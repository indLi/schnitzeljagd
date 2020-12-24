import React, {useEffect, useState} from "react";
import {Geolocation, Geoposition} from "@ionic-native/geolocation";
import {IonButton, IonIcon, IonText, IonToast} from "@ionic/react";
import {refresh} from "ionicons/icons";
import {headingDistanceTo} from 'geolocation-utils'


interface LocationError {
    showError: boolean;
    message?: string;
}

interface CurrentDistanceProps {
    latitude: number;
    longitude: number;
    accuracy?: number;
    arrived: () => void;
    successMessage?: string;
}

export const CurrentDistance: React.FC<CurrentDistanceProps> = ({latitude, longitude, arrived, successMessage, accuracy}) => {
        const [distance, setDistance] = useState<number>();
        const [positionError, setPositionError] = useState<LocationError>({showError: false});
        const [showSuccess, setShowSuccess] = useState<boolean>(false);

        useEffect(() => {
            getLocation()
        }, [])

        const checkPosition = (position: Geoposition): { didArrive: boolean, distance: number } => {
            const from = {lat: position.coords.latitude, lon: position.coords.longitude}
            const to = {lat: latitude, lon: longitude}
            const headingDistance = headingDistanceTo(from, to);
            return {didArrive: headingDistance.distance < ((accuracy || 20)), distance: headingDistance.distance};
        }

        const getLocation = async () => {
            try {
                const position = await Geolocation.getCurrentPosition({enableHighAccuracy:true});
                setPositionError({showError: false});
                const checkedPosition = checkPosition(position);
                setDistance(checkedPosition.distance);
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
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 0 24px 0'}}>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        {distance ?
                            <div style={{fontSize: '16px', fontWeight: 'bold'}}>{`${distance?.toFixed(0)} Meter entfernt`}</div>
                            : null}
                        <IonButton style={{marginLeft: '12px'}} onClick={getLocation}>
                            <IonIcon style={{fontSize: '20px'}} icon={refresh}/>
                        </IonButton>
                    </div>
                </div>
            </>
        );
    }
;
