import React from "react";
import {IonButton, IonCard, IonCardContent} from "@ionic/react";
import {StepProps} from "./commonSteps";
import {CheckInput} from "../../components/CheckInput";

export const GuteFreundeGeschafft: React.FC<StepProps> = ({goToNextStep}) => {
    return (
        <>
            <IonCard style={{backgroundColor: '#fff5d7'}}>
                <IonCardContent>
                    Geschafft! <br/>
                    Zum Glück gibt es gute Freunde.
                    <br/> <br/>
                    Bist du bereit für die nächste Aufgabe? Die musst du nun wieder alleine lösen.
                </IonCardContent>
            </IonCard>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '32px'}}>
                <IonButton onClick={goToNextStep}>Ich bin bereit</IonButton>
            </div>
        </>
    );
};
