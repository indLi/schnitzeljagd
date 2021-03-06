import React from "react";
import {StepProps} from "../evi/commonSteps";
import {IonCard, IonCardContent} from "@ionic/react";
import {CheckInput} from "../../components/CheckInput";

export const Hochstand: React.FC<StepProps> = ({goToNextStep}) => {

    return (
        <IonCard style={{paddingBottom: '12px', marginBottom: '0'}}>
            <IonCardContent>
                Schaue nach Süden, was für ein Holzbauwerk siehst du?
            </IonCardContent>
            <CheckInput correctValues={['hochsitz', 'jägersitz', 'jägerstand', 'hochstand']} placeholder={'...'} onSuccess={goToNextStep}/>
        </IonCard>
    );
};
