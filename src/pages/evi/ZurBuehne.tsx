import React from "react";
import {StepProps} from "./commonSteps";
import {IonCard, IonCardContent} from "@ionic/react";
import {CheckInput} from "../../components/CheckInput";
import {DescriptionText} from "../../components/DescriptionText";


export const ZurBuehne: React.FC<StepProps> = ({goToNextStep}) => {
    return (
        <div>
            <DescriptionText><p>Obwohl du sehr schnell im Rechnen bist, ist die Fee leider schon weiter gereist.</p><p>Sie musste noch
                einige Wildblumen sammeln, die es nur hier und nicht im Reich der Feen gibt, die allerdings für Heiltinkturen benötigt
                werden.</p>
                <p>Sie hinterlässt dir jedoch folgende Wegbeschreibung dorthin.</p></DescriptionText>

            <IonCard>
                <IonCardContent>
                    Am Fuße des Berges angekommen, gehe den Weg Richtung nord-westen entlang. <br/>
                    Rechts im Wald vor dem nächsten Ort findest du eine alte Dorfbühne.<br/><br/>
                    Bei den Wurzeln des großen, alten Bauemes neben der Bühne findest du Wildblumen.
                    <br/><br/>
                    Wie viele Blumen sind es?
                </IonCardContent>
            </IonCard>
            <CheckInput correctValues={['5']} placeholder={'Rosen, Tulpen, Nelken, ...'} onSuccess={() => goToNextStep()}/>
        </div>
    );
};
