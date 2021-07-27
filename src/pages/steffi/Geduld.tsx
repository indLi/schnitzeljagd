import React from "react";
import {IonCard, IonCardContent} from "@ionic/react";
import {StepProps} from "./commonSteps";
import {CheckInput} from "../../components/CheckInput";

export const Geduld: React.FC<StepProps> = ({goToNextStep}) => {
    return (
        <>
                <IonCard style={{ backgroundColor: '#fff5d7'}}>
                    <IonCardContent>
                        An den Wurzeln der Geduld findest du den Schlüssel
                    </IonCardContent>
                    <IonCardContent >
                        <p style={{fontSize: '18px', fontWeight: 'bold'}}>AKDJFKAJSKASDKFJKASJDKFJAKSJDFKA</p>
                    </IonCardContent>
                </IonCard>
                <CheckInput correctValues={['zitronenkuchen']} placeholder={'hier tippen'}
                            onSuccess={() => goToNextStep()} successMessage={'Jaaaa! Die Gedult hat sich gelohnt!'}
                            errorMessage={'Das ist nicht die Lösung. Zuerst musst du den Schlüssel finden!'} buttonText={'Stimmt\'s?'}/>
        </>
    );
};
