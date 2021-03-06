import React, {useState} from "react";
import {Geolocation, Geoposition} from "@ionic-native/geolocation";
import {IonButton, IonIcon, IonText, IonToast} from "@ionic/react";
import {flagOutline, walkOutline} from "ionicons/icons";
import {headingDistanceTo} from 'geolocation-utils'


interface LocationError {
    showError: boolean;
    message?: string;
}

interface CurrentCoordinatesProps {
    latitude: number;
    longitude: number;
    accuracy?: number;
    arrived: () => void;
    successMessage?: string;
}

export const CurrentCoordinates: React.FC<CurrentCoordinatesProps> = ({latitude, longitude, arrived, successMessage, accuracy}) => {
    const [position, setPosition] = useState<Geoposition>();
    const [positionError, setPositionError] = useState<LocationError>({showError: false});
    const [showSuccess, setShowSuccess] = useState<boolean>(false);

    const checkPosition = (position: Geoposition): { didArrive: boolean, distance: number } => {
        const from = {lat: position.coords.latitude, lon: position.coords.longitude}
        const to = {lat: latitude, lon: longitude}
        const headingDistance = headingDistanceTo(from, to);
        return {didArrive: headingDistance.distance < ((accuracy || 20)), distance: headingDistance.distance};
    }

    const getLocation = async () => {
        try {
            const position = await Geolocation.getCurrentPosition({enableHighAccuracy:true});
            setPosition(position);
            setPositionError({showError: false});
            const checkedPosition = checkPosition(position);
            console.log(checkedPosition.distance)
            if (checkedPosition.didArrive) {
                setShowSuccess(true)
            }
        } catch (e) {
            setPositionError({showError: true, message: e.message});
        }
    }

    return (
        <>
            <IonToast
                isOpen={positionError.showError}
                onDidDismiss={() => setPositionError({message: "", showError: false})}
                message={positionError.message}
                duration={3000}
            />
            <IonToast
                color={'success'}
                position={'middle'}
                isOpen={showSuccess}
                onDidDismiss={() => {
                    setShowSuccess(false);
                    arrived()
                }}
                message={successMessage || 'Juhuuu, geschafft!'}
                duration={1000}
            />
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '24px 0'}}>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '24px'}}>
                    <IonIcon style={{fontSize: '30px', marginRight: '12px'}} icon={flagOutline}/>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontSize: '20px', alignItems: 'flex-end'}}>
                        <IonText>{latitude}</IonText>
                        <IonText>{longitude}</IonText>
                    </div>
                </div>

                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <IonButton style={{marginRight: '12px'}} onClick={getLocation}>
                        <IonIcon style={{fontSize: '30px'}} icon={walkOutline}/>
                    </IonButton>
                    {position ? <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        fontSize: '20px',
                        alignItems: 'flex-end'
                    }}>
                        <IonText>{position.coords.latitude.toFixed(5)}</IonText>
                        <IonText>{position.coords.longitude.toFixed(5)}</IonText>
                    </div> : null}
                </div>
            </div>
        </>
    );
};
