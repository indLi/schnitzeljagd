import React from "react";
import {IonButton, IonCard, IonCardContent} from "@ionic/react";
import {backgroundCardColorMartin, StepProps} from "./commonSteps";
import {CheckInput} from "../../components/CheckInput";
import {LeftButton} from "../../components/LeftButton";

export const PalaisDone: React.FC<StepProps> = ({goToNextStep}) => {
    return (
        <>
            <IonCard style={{backgroundColor: backgroundCardColorMartin}}>
                <IonCardContent>
                    Super, damit hast du gerade die Antwort auf alles gefunden und kannst somit die restlichen Aufgaben überspringen. Hier geht’s zu deinem Geschenk
                </IonCardContent>
                <LeftButton goToNextStep={goToNextStep} buttonText={'Zum Geschenk'}/>
            </IonCard>
        </>
    );
};
