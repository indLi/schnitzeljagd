import React from "react";
import {CheckPosition} from "../../components/CheckPosition";
import {IonCard} from "@ionic/react";
import {StepProps} from "../evi/commonSteps";


export const KarteWegKreuz: React.FC<StepProps> = ({goToNextStep}) => {
    return (
        <IonCard style={{paddingBottom: '32px', marginBottom: '0'}}>
            <img src='schnitzeljagd/assets/images/karte.jpeg'/>
            <CheckPosition latitude={48.24828} longitude={7.79566} arrived={() => goToNextStep()}/>
        </IonCard>
    );
};
