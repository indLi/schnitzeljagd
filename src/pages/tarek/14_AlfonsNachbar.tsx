import React from "react";
import {StepProps} from "../evi/commonSteps";
import {IonCard, IonCardContent} from "@ionic/react";
import {CheckInput} from "../../components/CheckInput";

export const AlfonsNachbar: React.FC<StepProps> = ({goToNextStep}) => {
    return (
        <IonCard style={{paddingBottom: '12px', marginBottom: '0'}}>
            <IonCardContent>
                Wie sind die Initialen seines Nachbars?
            </IonCardContent>
            <CheckInput correctValues={['ab', 'a.b.']} placeholder={'der Nachbar...'} onSuccess={goToNextStep} buttonText={'Meint ihr den?'} errorMessage={'Nein, probier\'s nochmal'}/>
        </IonCard>
    );
}
