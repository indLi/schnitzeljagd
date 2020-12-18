import React from "react";
import {IonButton, IonContent, IonPage} from "@ionic/react";
import {StepProps} from "./commonSteps";

export const Welcome: React.FC<StepProps> = ({goToNextStep}) => {

    return (
        <IonPage>
            <IonContent fullscreen>
                welcome screen
                <IonButton onClick={goToNextStep}>Es kann los gehen</IonButton>
            </IonContent>
        </IonPage>
    );
};
