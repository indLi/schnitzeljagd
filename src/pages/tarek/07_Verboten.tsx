import React from "react";
import {StepProps} from "../evi/commonSteps";
import {IonCard, IonCardContent} from "@ionic/react";
import {CheckInput} from "../../components/CheckInput";

export const Verboten: React.FC<StepProps> = ({goToNextStep}) => {

    return (
        <IonCard style={{paddingBottom: '12px', marginBottom: '0'}}>
            <IonCardContent>
                Was ist hier verboten?
            </IonCardContent>
            <CheckInput correctValues={['schutt und müll abladen', 'schutt u. müll abladen']} placeholder={'was ist es nur?'} onSuccess={goToNextStep} buttonText={'Meint ihr das?'} errorMessage={'Nein, das ist es nicht...'}/>
        </IonCard>
    );
};
