import React from "react";
import {IonButton, IonCard, IonCardContent} from "@ionic/react";
import {StepProps} from "./commonSteps";
import {CheckInput} from "../../components/CheckInput";

export const GuteFreundeGeschafft: React.FC<StepProps> = ({goToNextStep}) => {
    return (
        <>
            <IonCard style={{backgroundColor: '#fff5d7'}}>
                <IonCardContent>
                    Geschafft!
                    Zum Glück gibt es gute Freunde.
                </IonCardContent>
            </IonCard>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '32px'}}>
                <IonButton onClick={goToNextStep}>Und weiter geht's</IonButton>
            </div>
        </>
    );
};
