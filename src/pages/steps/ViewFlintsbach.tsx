import React from "react";
import {IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonToolbar} from "@ionic/react";
import {StepProps} from "./commonSteps";


export const ViewFlintsbach: React.FC<StepProps> = ({goToNextStep}) => {


    return (
        <IonPage>
            <IonHeader translucent>
                <IonToolbar>
                    <IonButtons>
                        <IonBackButton text="Inbox" defaultHref="/home"></IonBackButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                ion content
            </IonContent>
        </IonPage>
    );
};
