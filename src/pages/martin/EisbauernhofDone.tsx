import React from "react";
import {IonButton, IonCard, IonCardContent} from "@ionic/react";
import {StepProps} from "./commonSteps";
import {CheckInput} from "../../components/CheckInput";
import {CurrentDistance} from "../../components/CurrentDistance";
import {LeftButton} from "../../components/LeftButton";

export const EisbauernhofDone: React.FC<StepProps> = ({goToNextStep}) => {
    return (
        <>
            <IonCard style={{backgroundColor: '#fffec7'}}>
                <IonCardContent>
                    Gefunden! Jetzt kauf dir ein Eis und streichle eine Kuh, oder zumindest eins von beidem, wie du magst.
                <LeftButton goToNextStep={goToNextStep} buttonText={'Hm lecker Eis'}/>
                </IonCardContent>
            </IonCard>
        </>
    );
};
