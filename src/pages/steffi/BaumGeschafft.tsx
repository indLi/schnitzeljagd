import React from "react";
import {IonButton, IonCard, IonCardContent} from "@ionic/react";
import {StepProps} from "./commonSteps";
import {CheckInput} from "../../components/CheckInput";

export const BaumGeschafft: React.FC<StepProps> = ({goToNextStep}) => {
    return (
        <>
            <IonCard style={{backgroundColor: '#fff5d7'}}>
                <IonCardContent>
                    Juhuuuuuu, ich freu mich, dass du so weit gekommen bist! :) <br/><br/>
                    Ein letztes verschlüsseltes Rätsel gibt es noch. Vielleicht ist es das schwerste, vielleicht auch das leichteste oder vielleicht liegt es irgendwo dazwischen.<br/>
                    Danach haben wir mit Sicherheit alle Verfolger abgehängt und du wirst dein Geschenk sicher erhalten.
                    <br/> <br/>
                    Sobald du willst, kann es weiter gehen.
                    <br/> <br/>
                    Bist du bereit für die letzte Aufgabe?
                </IonCardContent>
            </IonCard>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '32px'}}>
                <IonButton onClick={goToNextStep}>Los gehts zur letzten Aufgabe</IonButton>
            </div>
        </>
    );
};
