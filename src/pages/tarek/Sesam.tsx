import React from "react";
import {StepProps} from "../steps/commonSteps";
import {IonCard, IonCardContent} from "@ionic/react";
import {CheckInput} from "../../components/CheckInput";

export const Sesam: React.FC<StepProps> = ({goToNextStep}) => {

    return (
        <IonCard style={{paddingTop: '12px'}}>
            <IonCardContent>
                Gehe in diese Richtung bis zum nächsten Gewässer. <br/><br/>
                Am kleinen Christbaum am Eck findest du den nächsten Hinweis.
            </IonCardContent>
            <CheckInput correctValues={['sesam']} placeholder={'Lösungswort'} onSuccess={goToNextStep}/>
        </IonCard>
    );
};
