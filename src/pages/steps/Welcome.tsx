import React from "react";
import {IonButton, IonContent, IonPage} from "@ionic/react";
import {StepProps} from "./commonSteps";
import {CheckPosition} from "../../components/CheckPosition";

export const Welcome: React.FC<StepProps> = ({goToNextStep}) => {

    return (
        <IonPage>
            <IonContent fullscreen style={{'--background': '#fffaf7'}}>
                welcome screen
                <IonButton onClick={goToNextStep}>Es kann los gehen</IonButton>
            </IonContent>
        </IonPage>
    );
};
