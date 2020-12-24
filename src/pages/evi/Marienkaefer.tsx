import React from "react";
import {StepProps} from "./commonSteps";
import {IonCard, IonCardContent} from "@ionic/react";
import {DescriptionText} from "../../components/DescriptionText";
import {CheckInput} from "../../components/CheckInput";


export const Marienkaefer: React.FC<StepProps> = ({goToNextStep}) => {
    return (
        <div>
            <DescriptionText>
                <p>Willkommen im Königreich</p>
            </DescriptionText>
            <IonCard>
                <IonCardContent>
                    Am Burggraben lebt ein Marienkäfer. Er kann dir sagen wo ich hingegangen bin.<br/><br/>
                    Tipp: Oft versteckt er sich.... TODO

                    <br/><br/>
                    Wie viele Punkte hat der Marienkäfer?
                </IonCardContent>
            </IonCard>
            <CheckInput correctValues={['17']} placeholder={'1, 2 oder 3 oder ...'} onSuccess={() => goToNextStep()}/>
        </div>
    );
};
