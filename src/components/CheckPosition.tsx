import React, {useState} from "react";
import {Geolocation, Geoposition} from "@ionic-native/geolocation";
import {IonButton, IonChip, IonLoading, IonToast} from "@ionic/react";

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

export const CheckPosition: React.FC<CheckPositionProps> = ({latitude, longitude, arrived, successMessage, accuracy}) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [positionError, setPositionError] = useState<LocationError>({showError: false});
    const [showSuccess, setShowSuccess] = useState<boolean>(false);
    const [distanceError, setDistanceError] = useState<string>();
    const [result, setResult] = useState<string>();

    const checkPosition = (position: Geoposition): { didArrive: boolean, distance: number } => {
        const squaredDistance = Math.sqrt(position.coords.latitude - latitude) + Math.sqrt(position.coords.longitude - longitude);
        return {didArrive: squaredDistance < (Math.sqrt(accuracy || 20)), distance: squaredDistance};
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
                duration={2000}
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
                <IonButton color="primary" onClick={getLocation}>{'Bin ich schon da?'}</IonButton>
            </div>
        </>
    );
};
