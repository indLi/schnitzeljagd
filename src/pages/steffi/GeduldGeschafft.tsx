import React from "react";
import {IonButton, IonCard, IonCardContent} from "@ionic/react";
import {StepProps} from "./commonSteps";
import {CheckInput} from "../../components/CheckInput";

export const GeduldGeschafft: React.FC<StepProps> = ({goToNextStep}) => {
    return (
        <>
            <IonCard style={{backgroundColor: '#fff5d7'}}>
                <IonCardContent>
                    Geschafft! <br/>
                    Die schwächsten Verfolger auf dem Weg zum Geschenk haben wir abgehängt.
                    <br/> <br/>
                    Und wenn du nun auch schonmal hier bist, kannst du auch gleich deine Füße in die Isar tauchen. Das tut sicher gut :)
                    <br/> <br/>
                    Bist du bereit für die nächste Aufgabe?
                </IonCardContent>
            </IonCard>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '32px'}}>
                <IonButton onClick={goToNextStep}>Ich bin bereit</IonButton>
            </div>
        </>
    );
};
