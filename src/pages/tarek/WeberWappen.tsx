import React from "react";
import {StepProps} from "../steps/commonSteps";
import {IonCard, IonCardContent} from "@ionic/react";
import {CheckInput} from "../../components/CheckInput";

export const WeberWappen: React.FC<StepProps> = ({goToNextStep}) => {

    return (
        <IonCard style={{paddingTop: '12px'}}>
            <IonCardContent>
                Wie viele Trauben hat das Wappen?
            </IonCardContent>
            <CheckInput correctValues={['30']} placeholder={'Anzahl'} onSuccess={goToNextStep} errorMessage={'zähl nochmal...'}/>
        </IonCard>
    );
};
