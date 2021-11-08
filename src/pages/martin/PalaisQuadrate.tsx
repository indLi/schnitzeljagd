import React from "react";
import {IonButton, IonCard, IonCardContent} from "@ionic/react";
import {backgroundCardColorMartin, StepProps} from "./commonSteps";
import {CheckInput} from "../../components/CheckInput";
import {LeftButton} from "../../components/LeftButton";

export const PalaisQuadrate: React.FC<StepProps> = ({goToNextStep}) => {
    return (
        <>
            <IonCard style={{backgroundColor: backgroundCardColorMartin}}>
                <IonCardContent>
                    Wie viele weiße Quadrate findest du hier?
                </IonCardContent>
                <CheckInput correctValues={['42']} onSuccess={goToNextStep} placeholder={'Anzahl'}/>
            </IonCard>
        </>
    );
};
