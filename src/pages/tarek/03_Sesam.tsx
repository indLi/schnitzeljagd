import React from "react";
import {StepProps} from "../evi/commonSteps";
import {IonCard, IonCardContent} from "@ionic/react";
import {CheckInput} from "../../components/CheckInput";

export const Sesam: React.FC<StepProps> = ({goToNextStep}) => {

    return (
        <IonCard style={{paddingBottom: '12px', marginBottom: '0'}}>
            <IonCardContent>
                Gehe den Weg Richtung Süden zum nächsten Gewässer. <br/><br/>
                Am kleinen Christbaum am Eck findest du den nächsten Hinweis.
            </IonCardContent>
            <CheckInput correctValues={['sesam']} placeholder={'Lösungswort'} onSuccess={goToNextStep}/>
        </IonCard>
    );
}
