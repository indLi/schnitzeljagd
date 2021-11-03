import React from "react";
import {IonButton, IonCard, IonCardContent} from "@ionic/react";
import {StepProps} from "./commonSteps";
import {CheckInput} from "../../components/CheckInput";

export const Puzzle: React.FC<StepProps> = ({goToNextStep}) => {
    return (
        <>
            <IonCard style={{backgroundColor: '#fffec7'}}>
                <img src='schnitzeljagd/assets/images/karteMarienkaefer.jpg'/>
                <IonCardContent>
                    Viel Erfolg!
                </IonCardContent>
            <CheckInput correctValues={['bananenkuchen']} onSuccess={goToNextStep} placeholder={'Lösungswort hier tippen'}/>
            </IonCard>
        </>
    );
};
