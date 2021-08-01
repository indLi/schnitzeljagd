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
    getErrorMessage?: (distance: number, accuracy: number) => string;
}

const getDistanceErrorMessage = (distance: number, accuracy: number) => {
    if (distance < accuracy + 25) {
        return 'Ganz heiß. Ich verbrenne mich.'
    } else if (distance < accuracy + 100) {
        return 'Nicht mehr weit. Ich fange an zu schwitzen.'
    } else if (distance < accuracy + 300) {
        return 'Noch nicht ganz. Ok, jetzt kannst du die Jacke ausziehen.'
    } else if (distance < accuracy + 500) {
        return 'Ganz ok, aber kalt ist es mir trotzdem noch.'
    } else if (distance < accuracy + 1000) {
        return 'Brrr, ganz schön kalt.'
    } else if (distance < accuracy + 2000) {
        return 'Von wegen Klimaerwärmung.'
    } else if (distance < accuracy + 3000) {
        return 'Achtung, Glatteis.'
    } else {
        return 'Auf Spitzbergen war\'s wärmer.'
    }
}

export const CheckPosition: React.FC<CheckPositionProps> = ({
                                                                latitude,
                                                                longitude,
                                                                arrived,
                                                                successMessage,
                                                                accuracy,
                                                                buttonText,
                                                                getErrorMessage
                                                            }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [positionError, setPositionError] = useState<LocationError>({showError: false});
    const [showSuccess, setShowSuccess] = useState<boolean>(false);
    const [distanceError, setDistanceError] = useState<string>();

    const checkPosition = (position: Geoposition): { didArrive: boolean, distance: number } => {
        const from = {lat: position.coords.latitude, lon: position.coords.longitude}
        const to = {lat: latitude, lon: longitude}
        const headingDistance = headingDistanceTo(from, to);
        return {didArrive: headingDistance.distance < ((accuracy || 50)), distance: headingDistance.distance};
    }

    const getLocation = async () => {
        setLoading(true);

        try {
            const position = await Geolocation.getCurrentPosition({enableHighAccuracy: true});
            setLoading(false);
            setPositionError({showError: false});
            const checkedPosition = checkPosition(position);
            if (checkedPosition.didArrive) {
                setDistanceError(undefined)
                setShowSuccess(true)
            } else {
                if (!!getErrorMessage) {
                    setDistanceError(getErrorMessage(checkedPosition.distance, accuracy || 50));
                } else {
                    setDistanceError(getDistanceErrorMessage(checkedPosition.distance, accuracy || 50));

                }
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
