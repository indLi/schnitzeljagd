import React from "react";
import {CheckPosition} from "../../components/CheckPosition";
import {IonCard, IonCardContent} from "@ionic/react";
import {StepProps} from "../evi/commonSteps";


export const Bier: React.FC = () => {
    return (
        <IonCard style={{paddingBottom: '32px', marginBottom: '0'}}>
            <IonCardContent style={{fontSize: '14px'}}>
                Der Topf ist ... <br/>
                Du bist so schlau. <br/>
                Suche hier, <br/>
                da gibt's dein ...
            </IonCardContent>
        </IonCard>
    );
};
