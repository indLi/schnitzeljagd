import React from "react";
import {StepProps} from "./commonSteps";
import {IonCard, IonCardContent} from "@ionic/react";
import {CheckInput} from "../../components/CheckInput";


export const SeeStein: React.FC<StepProps> = ({goToNextStep}) => {
    return (
        <IonCard>
            <IonCardContent>
                Dort wo das Wasser zum See wandert, gibt es besondere steinerne Quellen. Findest du eine?
                <br/><br/>
                Wie viele Quellen hat ein solcher Stein?
            </IonCardContent>
            <CheckInput correctValues={['3']} placeholder={'quelllleleelel'} onSuccess={() => goToNextStep()}/>
        </IonCard>
    )
};
