import React from "react";
import {StepProps} from "../evi/commonSteps";
import {IonCard} from "@ionic/react";
import {CurrentCoordinates} from "../../components/CurrentCoordinates";

export const CoordinatesLake: React.FC<StepProps> = ({goToNextStep}) => {

    return (
        <IonCard style={{paddingBottom: '12px', marginBottom: '0'}}>
            <CurrentCoordinates latitude={48.28654} longitude={7.78818} arrived={goToNextStep}/>
        </IonCard>
    );
};
