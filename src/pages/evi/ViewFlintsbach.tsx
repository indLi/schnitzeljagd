import React from "react";
import {StepProps} from "./commonSteps";
import {CheckPosition} from "../../components/CheckPosition";
import {IonCard, IonCardContent} from "@ionic/react";
import {DescriptionText} from "../../components/DescriptionText";


export const ViewFlintsbach: React.FC<StepProps> = ({goToNextStep}) => {
    return (
        <div>
            <DescriptionText><p>Soeben ist eine Postkarte für dich angekommen: </p><br/></DescriptionText>
            <IonCard>
                <img src='schnitzeljagd/assets/images/flintsbach.jpeg'/>
                <IonCardContent>
                    Ich bin gerade zu Besuch bei einem alten Freund. Er regiert sein Königreich schon sehr lange. Von seinem Thron
                    überblickt man das ganze Land. <br/>
                    Ich komme immer gerne hier her, die Aussicht ist super.
                    <br/>
                    <br/>
                    Sieh es dir am besten selbst an und komm auch her.
                </IonCardContent>
            </IonCard>
            <CheckPosition latitude={47.716110} longitude={12.130480} arrived={() => goToNextStep()} accuracy={100}/>
        </div>
    );
};
