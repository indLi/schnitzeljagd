import React from "react";
import {IonButton, IonCard, IonCardContent} from "@ionic/react";
import {StepProps} from "./commonSteps";
import {CheckInput} from "../../components/CheckInput";
import {CurrentDistance} from "../../components/CurrentDistance";

export const Eisbauernhof: React.FC<StepProps> = ({goToNextStep}) => {
    return (
        <>
            <IonCard style={{backgroundColor: '#fffec7'}}>
                <IonCardContent>
                    <CurrentDistance latitude={51.379207} longitude={9.500030} arrived={() => goToNextStep()} accuracy={100}/>
                    <p style={{fontStyle: 'italic'}}>Bitte beachte:
                        Aus technischen Gründen kann es sein, dass dein Standort hier nicht richtig aktualisiert wird. Um sicher zu gehen, dass dein richtiger Standort verwendet wird, öffne kurz google maps und warte bis dort dein Standort stimmt. Danach stimmt er auch hier.</p>
                </IonCardContent>
            </IonCard>
        </>
    );
};
