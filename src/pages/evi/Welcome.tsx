import React from "react";
import {IonButton, IonCard, IonCardContent} from "@ionic/react";
import {StepProps} from "./commonSteps";

export const Welcome: React.FC<StepProps> = ({goToNextStep}) => {
    return (
        <>
            <IonCard style={{paddingBottom: '12px', paddingTop: '24px', marginBottom: '0'}}>
                <IonCardContent>
                    <p style={{fontSize: '20px'}}>Hallo Evi,</p>
                    <p><br/>
                        ich habe dich leider zu Hause nicht angetroffen. Deine Mutter meinte du bist bei Nachhilfe. <br/><br/>
                        Leider muss ich, bevor
                        ich in das Reich der Feen zurück gehe, noch ein paar Dinge erledigen und konnte nicht warten.<br/><br/>
                        Vielleicht holst du
                        mich ja noch ein. Ich hinterlasse dir verschlüsselte Nachrichten, sodass du immer weißt wo ich bin. <br/><br/>Ich
                        hoffe
                        wir sehen uns noch, damit ich dir dein Geschenk übergeben kann.<br/><br/></p>
                    <p style={{fontSize: '20px'}}>Deine Fee</p>
                </IonCardContent>
            </IonCard>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '32px'}}>
                <IonButton onClick={goToNextStep}>zur nächsten Nachricht</IonButton>
            </div>
        </>
    );
};
