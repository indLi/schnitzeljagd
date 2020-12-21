import React from "react";
import {StepProps} from "../steps/commonSteps";
import {IonCard} from "@ionic/react";
import {CheckInput} from "../../components/CheckInput";

export const InitialPassword: React.FC<StepProps> = ({goToNextStep}) => {

    return (
        <IonCard style={{paddingBottom: '12px', marginBottom: '0'}}>
            <CheckInput correctValues={['blacky13']} placeholder={'Passwort'} onSuccess={goToNextStep} buttonText={'START'}/>
        </IonCard>
    );
};
