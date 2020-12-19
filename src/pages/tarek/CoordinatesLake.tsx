import React from "react";
import {StepProps} from "../steps/commonSteps";
import {IonCard} from "@ionic/react";
import {CurrentCoordinates} from "../../components/CurrentCoordinates";

export const CoordinatesLake: React.FC<StepProps> = ({goToNextStep}) => {

    return (
        <IonCard style={{paddingTop: '12px'}}>
            <CurrentCoordinates latitude={48.28654} longitude={7.78818} arrived={goToNextStep}/>
        </IonCard>
    );
};
