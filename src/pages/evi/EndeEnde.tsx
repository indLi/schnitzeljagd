import React from "react";
import {StepProps} from "./commonSteps";
import {IonCard, IonCardContent} from "@ionic/react";


export const EndeEnde: React.FC<StepProps> = () => {
    return (
        <IonCard>
            <IonCardContent>
                <p style={{fontSize: '20px'}}>Liebe Evi,</p>
                <br/>
                leider warst du dieses mal wieder nicht Zuhause. <br/><br/>
                Ich bin nun zurück ins Reich der Feen. Dein Geschenk habe ich dir da gelassen. Du findest es ganz nah bei den
                Wolken. <br/><br/>
                Bis bald, <br/>
                <br/>
                <p style={{fontSize: '20px'}}>Deine Fee</p>
            </IonCardContent>
        </IonCard>
    );
};
