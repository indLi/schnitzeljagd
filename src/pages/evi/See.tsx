import React from "react";
import {StepProps} from "./commonSteps";
import {IonCard, IonCardContent} from "@ionic/react";
import {CurrentDistance} from "../../components/CurrentDistance";


export const See: React.FC<StepProps> = ({goToNextStep}) => {
    return (
        <>
            <IonCard>
                <IonCardContent>
                    Folge dem Wasser zum nächsten See.
                </IonCardContent>
                <CurrentDistance latitude={47.717105} longitude={12.120031} arrived={() => goToNextStep()} accuracy={50}/>.
            </IonCard>
        </>
    )
};
