import React from "react";
import {StepProps} from "../steps/commonSteps";
import {IonCard, IonCardContent} from "@ionic/react";
import {CheckInput} from "../../components/CheckInput";

export const Stufen: React.FC<StepProps> = ({goToNextStep}) => {

    return (
        <IonCard style={{paddingBottom: '12px', marginBottom: '0'}}>
            <IonCardContent>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '32px'}}>
                    Wie viele
                    <img height={20} style={{margin: '0 6px'}} src='schnitzeljagd/assets/images/stufen.jpg'/>
                    sind es bis oben?
                </div>
            </IonCardContent>
            <CheckInput correctValues={['59']} placeholder={'1, 2 oder 3 oder ...'} onSuccess={goToNextStep} buttonText={'Hab ich richtig gezählt?'}/>
        </IonCard>
    );
};
