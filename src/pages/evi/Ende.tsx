import React from "react";
import {StepProps} from "./commonSteps";
import {IonButton, IonCard, IonCardContent} from "@ionic/react";


export const Ende: React.FC<StepProps> = ({goToNextStep}) => {
    return (
        <div>
            <IonCard>
                <IonCardContent>
                    Liebe Evi,
                    <br/><br/>
                    ich habe nun alles erledigt und da ich mich besonders beeilt habe, kann ich nochmals kurz bei dir Zuhause vorbei
                    schauen. <br/><br/>
                    Vielleicht treffe ich dich ja diesmal an.
                </IonCardContent>
            </IonCard>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '32px'}}>
                <IonButton onClick={goToNextStep}>Jetzt bin ich auch wieder Zuhause</IonButton>
            </div>
        </div>
    );
};
