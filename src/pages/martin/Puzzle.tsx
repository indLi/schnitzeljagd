import React from "react";
import {IonButton, IonCard, IonCardContent} from "@ionic/react";
import {backgroundCardColorMartin, StepProps} from "./commonSteps";
import {CheckInput} from "../../components/CheckInput";

export const Puzzle: React.FC<StepProps> = ({goToNextStep}) => {
    return (
        <>
            <IonCard style={{backgroundColor: backgroundCardColorMartin}}>
                <IonCardContent>
                    Hoffentlich hast du noch ein paar freie Abende um das erste Rätsel zu lösen
                </IonCardContent>
                <a href="schnitzeljagd/assets/images/puzzle.jpg" target='_blank'>

                <img src='schnitzeljagd/assets/images/puzzle.jpg'/>
                </a>
            <CheckInput correctValues={['bananenkuchen']} onSuccess={goToNextStep} placeholder={'Lösungswort hier tippen'}/>
            </IonCard>
        </>
    );
};
