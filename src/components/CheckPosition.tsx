import React, {useState} from "react";
import {Geoposition, Geolocation} from "@ionic-native/geolocation";
import {IonBadge, IonButton, IonChip, IonLoading, IonSpinner, IonToast} from "@ionic/react";

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

const getDistanceMessage = (distance: number) => {
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
    const [error, setError] = useState<LocationError>({showError: false});
    const [showSuccess, setShowSuccess] = useState<boolean>(false);
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
            setError({showError: false});
            const checkedPosition = checkPosition(position);
            if (checkedPosition.didArrive) {
                setResult(undefined)
                setShowSuccess(true)
            } else {
                setResult(getDistanceMessage(checkedPosition.distance));
            }
        } catch (e) {
            setError({showError: true, message: e.message});
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
                isOpen={error.showError}
                onDidDismiss={() => setError({message: "", showError: false})}
                message={error.message}
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
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <IonButton color="primary" onClick={getLocation}>{'Bin ich schon da?'}</IonButton>
                {result ? <IonChip color={'secondary'}>{result}</IonChip> : null}
            </div>
        </>
    );
};
