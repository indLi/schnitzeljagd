import React from "react";
import {IonCard, IonCardContent} from "@ionic/react";
import {StepProps} from "./commonSteps";
import {CheckInput} from "../../components/CheckInput";

export const GuteFreunde: React.FC<StepProps> = ({goToNextStep}) => {
    return (
        <>
                <IonCard style={{ backgroundColor: '#fff5d7'}}>
                    <IonCardContent>
                        Manchmal ist man an einem Punkt, an dem nur ein guter Freund weiter helfen kann
                    </IonCardContent>
                    <IonCardContent >
                        <p style={{fontSize: '18px', fontWeight: 'bold'}}>.</p>
                    </IonCardContent>
                </IonCard>
                <CheckInput correctValues={['schokoladensorbet']} placeholder={'Lösungswort'}
                            onSuccess={() => goToNextStep()} successMessage={'lecker lecker'}
                            errorMessage={'Konnte noch niemal helfen?'} buttonText={'Stimmt\'s?'}/>
        </>
    );
};
