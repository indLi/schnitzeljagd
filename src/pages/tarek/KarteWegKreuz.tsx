import React from "react";
import {CheckPosition} from "../../components/CheckPosition";
import {IonCard} from "@ionic/react";
import {StepProps} from "../steps/commonSteps";


export const KarteWegKreuz: React.FC<StepProps> = ({goToNextStep}) => {
    return (
        <IonCard style={{paddingBottom: '32px'}}>
            <img src='./assets/images/karte.jpeg'/>
            <CheckPosition latitude={48.24828} longitude={7.79566} arrived={() => goToNextStep()}/>
        </IonCard>
    );
};
