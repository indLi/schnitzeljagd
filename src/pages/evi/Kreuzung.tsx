import React from "react";
import {StepProps} from "./commonSteps";
import {IonCard, IonCardContent, IonIcon} from "@ionic/react";
import {CheckInput} from "../../components/CheckInput";
import {ellipse, ellipseOutline, flag} from "ionicons/icons";


export const Kreuzung: React.FC<StepProps> = ({goToNextStep}) => {
    return (
        <div>
            <IonCard>
                <IonCardContent>
                    Was ist die Summe?<br/><br/>
                    <IonIcon style={{fontSize: '25px', color: 'red'}} icon={ellipseOutline}/> +
                    <IonIcon style={{fontSize: '25px', color: '#000000'}} icon={ellipse}/> +
                    <IonIcon style={{fontSize: '25px', color: '#e8e8e8'}} icon={flag}/>
                </IonCardContent>
            </IonCard>
            <CheckInput correctValues={['13']} placeholder={'...'} onSuccess={() => goToNextStep()}/>
        </div>
    );
};
