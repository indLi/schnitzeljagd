import React from "react";
import {IonButton, IonCard, IonCardContent} from "@ionic/react";
import {StepProps} from "./commonSteps";
import {CheckInput} from "../../components/CheckInput";

export const BrunnenGeschafft: React.FC<StepProps> = ({goToNextStep}) => {
    return (
        <>
            <IonCard style={{backgroundColor: '#fff5d7'}}>
                <IonCardContent>
                    Richtig! <br/>
                    Du kannst dir zur Stärkung nun gernen einen Schluck münchner Brunnenwasser gönnen.
                    <br/> <br/>
                    Hast du eigentlich den Bücherschrank neben dir schon gesehen? Vielleicht gibt es ja etwas gutes zu lesen.
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
