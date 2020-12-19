import React from "react";
import {StepProps} from "../steps/commonSteps";
import {IonCard, IonCardContent} from "@ionic/react";
import {CheckInput} from "../../components/CheckInput";

export const Verboten: React.FC<StepProps> = ({goToNextStep}) => {

    return (
        <IonCard style={{paddingTop: '12px'}}>
            <IonCardContent>
                Was ist hier verboten?
            </IonCardContent>
            <CheckInput correctValues={['schutt und müll ablagen', 'schutt u. müll ablagen']} placeholder={'was ist es nur?'} onSuccess={goToNextStep} buttonText={'Meint ihr das?'} errorMessage={'Nein, das ist es nicht...'}/>
        </IonCard>
    );
};
