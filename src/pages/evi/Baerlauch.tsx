import React from "react";
import {StepProps} from "./commonSteps";
import {IonCard, IonCardContent} from "@ionic/react";
import {CheckInput} from "../../components/CheckInput";


export const Baerlauch: React.FC<StepProps> = ({goToNextStep}) => {
    return (
        <div>
            <IonCard>
                <IonCardContent>
                    Hier hat die Fee einige Kräuter gesammelt. <br/><br/>Welche Kräuter wachsen hier im Frühjahr?
                </IonCardContent>
            </IonCard>
            <CheckInput correctValues={['bärlauch']} placeholder={'Basilikum oder doch was anderes?'} onSuccess={() => goToNextStep()}
                        errorMessage={'Da hast du in Bio aber nicht aufgepasst.'}/>
        </div>
    );
};
