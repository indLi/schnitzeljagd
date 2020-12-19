import React from "react";
import {StepProps} from "../steps/commonSteps";
import {IonCard, IonCardContent} from "@ionic/react";
import {CurrentDistance} from "../../components/CurrentDistance";

export const Grundstueck: React.FC<StepProps> = ({goToNextStep}) => {

    return (
        <IonCard style={{paddingTop: '12px'}}>
            <IonCardContent>
                Gehe zu Flurstück xxx <br/> <br/>
                Kleiner Tipp:
            </IonCardContent>
            <CurrentDistance latitude={48.23484} longitude={7.81123} arrived={() => goToNextStep()}/>.
        </IonCard>
    );
};
