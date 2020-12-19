import React from "react";
import {CheckPosition} from "../../components/CheckPosition";
import {IonCard, IonCardContent} from "@ionic/react";
import {StepProps} from "../steps/commonSteps";


export const Alfons: React.FC<StepProps> = ({goToNextStep}) => {
    return (
        <IonCard style={{paddingBottom: '32px'}}>
            <IonCardContent>
               Besuche Opa Alfons.
            </IonCardContent>
            <CheckPosition latitude={48.25099} longitude={7.81008} arrived={() => goToNextStep()} buttonText={'Hab\'s gefunden'}/>
        </IonCard>
    );
}
