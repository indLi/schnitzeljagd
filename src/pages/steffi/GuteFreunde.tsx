import React from "react";
import {IonCard, IonCardContent} from "@ionic/react";
import {StepProps} from "./commonSteps";
import {CheckInput} from "../../components/CheckInput";

export const GuteFreunde: React.FC<StepProps> = ({goToNextStep}) => {
    return (
        <>
                <IonCard style={{ backgroundColor: '#fff5d7'}}>
                    <IonCardContent>
                        Du bist schon sehr weit gekommen, das ist sicher.
                        <br/>
                        Aber manchmal ist man an einem Punkt, an dem nur ein guter Freund weiter helfen kann.
                    </IonCardContent>
                    <IonCardContent >
                        <p style={{fontSize: '18px', fontWeight: 'bold'}}>.</p>
                    </IonCardContent>
                </IonCard>
                <CheckInput correctValues={['apfelkuchen']} placeholder={'Lösungswort'}
                            onSuccess={() => goToNextStep()} successMessage={'lecker lecker'}
                            errorMessage={'Konnte noch niemal helfen?'} buttonText={'Stimmt\'s?'}/>
        </>
    );
};
