import React from "react";
import {StepProps} from "../steps/commonSteps";
import {IonCard, IonCardContent} from "@ionic/react";
import {CheckInput} from "../../components/CheckInput";

export const GrundstueckBaum: React.FC<StepProps> = ({goToNextStep}) => {

    return (
        <IonCard style={{paddingTop: '12px'}}>
            <IonCardContent>
                Diesmal ist der Christbaum ein bisschen größer!
            </IonCardContent>
            <CheckInput correctValues={['zitronensorbet']} placeholder={'Lösungswort'} onSuccess={goToNextStep} buttonText={'Das muss stimmen!'} errorMessage={'Wie kommst du denn auf sowas?'}/>
        </IonCard>
    );
};
