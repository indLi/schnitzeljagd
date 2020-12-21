import React from "react";
import {CheckPosition} from "../../components/CheckPosition";
import {IonCard, IonCardContent} from "@ionic/react";
import {StepProps} from "../steps/commonSteps";


export const Weber: React.FC<StepProps> = ({goToNextStep}) => {
    return (
        <IonCard style={{paddingBottom: '32px', marginBottom: '0'}}>
            <img src='schnitzeljagd/assets/images/weber.jpeg'/>
            <IonCardContent>
                Wo wurde dieses Foto aufgenommen?
            </IonCardContent>
            <CheckPosition latitude={48.25509} longitude={7.79374} arrived={() => goToNextStep()}/>
        </IonCard>
    );
};
