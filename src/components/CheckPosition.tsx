import React, {useState} from "react";
import {Geolocation, Geoposition} from "@ionic-native/geolocation";
import {IonButton, IonLoading, IonToast} from "@ionic/react";
import {headingDistanceTo} from "geolocation-utils";

interface LocationError {
    showError: boolean;
    message?: string;
}

interface CheckPositionProps {
    latitude: number;
    longitude: number;
    accuracy?: number;
    arrived: () => void;
    successMessage?: string;
    buttonText?: string;
}

const getDistanceErrorMessage = (distance: number) => {
    if (distance < Math.sqrt(10)) {
        return 'ganz knapp'
    } else if (distance < Math.sqrt(20)) {
        return 'ganz gut'
    } else {
        return 'ganz kalt, such noch ein bisschen weiter'
    }
}

export const CheckPosition: React.FC<CheckPositionProps> = ({latitude, longitude, arrived, successMessage, accuracy, buttonText}) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [positionError, setPositionError] = useState<LocationError>({showError: false});
    const [showSuccess, setShowSuccess] = useState<boolean>(false);
    const [distanceError, setDistanceError] = useState<string>();

    const checkPosition = (position: Geoposition): { didArrive: boolean, distance: number } => {
        const from = {lat: position.coords.latitude, lon: position.coords.longitude}
        const to = {lat: latitude, lon: longitude}
        const headingDistance = headingDistanceTo(from, to);
        return {didArrive: headingDistance.distance < ((accuracy || 20)), distance: headingDistance.distance};
    }

    const getLocation = async () => {
        setLoading(true);

        try {
            const position = await Geolocation.getCurrentPosition();
            setLoading(false);
            setPositionError({showError: false});
            const checkedPosition = checkPosition(position);
            if (checkedPosition.didArrive) {
                setDistanceError(undefined)
                setShowSuccess(true)
            } else {
                setDistanceError(getDistanceErrorMessage(checkedPosition.distance));
            }
        } catch (e) {
            setPositionError({showError: true, message: e.message});
            setLoading(false);
        }
    }

    return (
        <>
            <IonLoading
                isOpen={loading}
                onDidDismiss={() => setLoading(false)}
                message={'Ok, ich such dich...'}
            />
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
            <IonToast
                color={'danger'}
                position={'middle'}
                isOpen={!!distanceError}
                onDidDismiss={() => {
                    setDistanceError(undefined);
                }}
                message={distanceError}
                duration={2000}
            />
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '24px'}}>
                <IonButton color="primary" onClick={getLocation}>{buttonText || 'Bin ich schon da?'}</IonButton>
            </div>
        </>
    );
};
