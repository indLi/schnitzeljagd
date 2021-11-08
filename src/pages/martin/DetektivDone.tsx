import React from "react";
import {IonCard, IonCardContent} from "@ionic/react";
import {StepProps} from "./commonSteps";
import {LeftButton} from "../../components/LeftButton";

export const DetektivDone: React.FC<StepProps> = ({goToNextStep}) => {
    return (
        <>
            <IonCard style={{backgroundColor: '#fffec7'}}>
                <IonCardContent>
                    Nicht ganz alleine geschafft, aber das lassen wir mal durchgehen ;) <br/><br/>
                    Du bist ja jetzt schon ganz schön weit gekommen, aber ein bisschen was kommt noch bevor du dein Geschenk erhälst.
                </IonCardContent>
                <LeftButton goToNextStep={goToNextStep} buttonText={'Weiter geht\'s'}/>
            </IonCard>
        </>
    );
};
