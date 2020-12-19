import React from "react";
import {StepProps} from "../steps/commonSteps";
import {IonCard, IonCardContent} from "@ionic/react";
import {CheckInput} from "../../components/CheckInput";

export const Berge: React.FC<StepProps> = ({goToNextStep}) => {

    return (
        <IonCard style={{paddingTop: '12px'}}>
            <IonCardContent>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '32px'}}>
                    Summiere alle Höhenangaben (auch doppelte)!
                </div>
            </IonCardContent>
            <CheckInput correctValues={['50734']} placeholder={'1, 2 oder 3 oder ...'} onSuccess={goToNextStep} buttonText={'Hoffentlich stimmt\'s'} errorMessage={'Oh je, nochmal von vorne.'}/>
        </IonCard>
    );
}
