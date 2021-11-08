import React from "react";
import {IonButton, IonCard, IonCardContent} from "@ionic/react";
import {backgroundCardColorMartin, StepProps} from "./commonSteps";
import {CheckInput} from "../../components/CheckInput";
import {LeftButton} from "../../components/LeftButton";

export const PuzzleDone: React.FC<StepProps> = ({goToNextStep}) => {
    return (
        <>
            <IonCard style={{backgroundColor: backgroundCardColorMartin}}>
                <IonCardContent>
                    Endlich geschafft! Gratuliere! <br/> <br/>
                    Jetzt bist du aber lange genug herum gesessen, als nächstes geht's raus... <br/> <br/>
                    Bist du bereit?
                </IonCardContent>
            <LeftButton goToNextStep={goToNextStep} buttonText={'Bereiter geht\'s nicht'}/>
            </IonCard>
        </>
    );
};
