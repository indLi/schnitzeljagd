import React from "react";
import {IonCard, IonCardContent} from "@ionic/react";
import {StepProps} from "./commonSteps";
import {CheckInput} from "../../components/CheckInput";

export const Geduld: React.FC<StepProps> = ({goToNextStep}) => {
    return (
        <>
            <IonCard style={{backgroundColor: '#fff5d7'}}>
                <IonCardContent>
                    Dort wo du Geduld findest, findest du auch den Schlüssel
                    <br/><br/>
                    <p style={{fontSize: '18px', fontWeight: 'bold'}}>RVCPUKBOCIYTPUKBZ</p>
                </IonCardContent>
            </IonCard>
            <CheckInput correctValues={['zwetschgendatschi']} placeholder={'Lösungswort'}
                        onSuccess={() => goToNextStep()} successMessage={'Jaaaa! Du hast die Geduld gefunden!'}
                        errorMessage={'Das ist nicht die Lösung. Zuerst musst du den Schlüssel finden!'} buttonText={'Stimmt\'s?'}/>
        </>
    );
};
