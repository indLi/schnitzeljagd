import React from "react";
import {StepProps} from "./commonSteps";
import {CheckPosition} from "../../components/CheckPosition";
import {IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonText} from "@ionic/react";
import {DescriptionText} from "../../components/DescriptionText";


export const ViewFlintsbach: React.FC<StepProps> = ({goToNextStep}) => {
    return (
        <div>
            <DescriptionText><p>Soeben ist eine Postkarte für dich angekommen: </p><br/></DescriptionText>
            <IonCard>
                <img src='./assets/images/flintsbach.jpg'/>
                <IonCardHeader>
                    <IonCardTitle>Hallo Evi</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    Auf meiner Reise habe ich einen wunderschönen und magischen Ort entdeckt. Hier müssen mal Könige gelebt haben.
                    Ihr Thron, von dem man das ganze Land überblicken kann ist noch hier und man kann sich darauf setzen.
                    <br/>
                    <br/>
                    Deine Fee
                </IonCardContent>
            </IonCard>
            {/*TODO: insert correct position*/}
            <CheckPosition latitude={28.12312} longitude={7.1237182} arrived={() => goToNextStep()}/>
        </div>
    );
};
