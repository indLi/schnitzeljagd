import React from "react";
import {StepProps} from "../evi/commonSteps";
import {IonCard, IonCardContent} from "@ionic/react";
import {CurrentDistance} from "../../components/CurrentDistance";

export const Grundstueck: React.FC<StepProps> = ({goToNextStep}) => {

    return (
        <IonCard style={{paddingBottom: '12px', marginBottom: '0'}}>
            <IonCardContent>
                Gehe zu Flurstück 5926 <br/> <br/>
                Kleiner Tipp:
            </IonCardContent>
            <CurrentDistance latitude={48.23484} longitude={7.81123} arrived={() => goToNextStep()}/>.
        </IonCard>
    );
};
