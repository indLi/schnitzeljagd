import React from "react";
import {IonButton, IonCard, IonCardContent} from "@ionic/react";
import {backgroundCardColorMartin, StepProps} from "./commonSteps";
import {CheckInput} from "../../components/CheckInput";

export const Detektiv: React.FC<StepProps> = ({goToNextStep}) => {
    return (
        <>
            <IonCard style={{backgroundColor: backgroundCardColorMartin}}>
                <IonCardContent>

                    <p>Na hoffentlich bekommst du hier professionelle Hilfe</p>
                    <CheckInput correctValues={['detektive helfen sich', 'detektive helfe sich']} onSuccess={goToNextStep} placeholder={'Lösungswort'}/>
                    <img src='schnitzeljagd/assets/images/karl.jpg'/>
                </IonCardContent>
            </IonCard>
        </>
    );
};
