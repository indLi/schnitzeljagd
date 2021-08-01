import React from "react";
import {IonCard, IonCardContent} from "@ionic/react";
import {StepProps} from "./commonSteps";
import {CheckInput} from "../../components/CheckInput";
import {CheckPosition} from "../../components/CheckPosition";

export const OlympiaGeschafft: React.FC<StepProps> = () => {
    return (
        <IonCard style={{backgroundColor: '#fff5d7'}}>
            <IonCardContent>
                Du bist angekommen!!!
                <br/><br/>
                Singe dir nun selbst ein Geburtstagslied, genieße die Aussicht und warte!
                <br/><br/>
                <img src='schnitzeljagd/assets/images/geburtstagstorte.jpg'/>
            </IonCardContent>
        </IonCard>
    );
};
