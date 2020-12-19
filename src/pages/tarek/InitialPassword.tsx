import React from "react";
import {StepProps} from "../steps/commonSteps";
import {IonCard} from "@ionic/react";
import {CheckInput} from "../../components/CheckInput";

export const InitialPassword: React.FC<StepProps> = ({goToNextStep}) => {

    return (
        <IonCard style={{paddingTop: '12px'}}>
            <CheckInput correctValue={'blacky13'} placeholder={'Passwort'} onSuccess={goToNextStep} buttonText={'START'}/>
        </IonCard>
    );
};
