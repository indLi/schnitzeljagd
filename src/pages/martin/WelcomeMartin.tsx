import React from "react";
import {IonButton, IonCard, IonCardContent} from "@ionic/react";
import {backgroundCardColorMartin, StepProps} from "./commonSteps";
import {LeftButton} from "../../components/LeftButton";

export const WelcomeMartin: React.FC<StepProps> = ({goToNextStep}) => {
    return (
        <>
            <IonCard style={{backgroundColor: backgroundCardColorMartin}}>
                <IonCardContent>
                    <div style={{fontSize: '16px'}}>
                        Hallo Martin, <br/> <br/>
                        super, du hast es bis hier geschafft. Dann wirst du wohl schon realisiert haben, dass du dein Geschenk
                        diesmal nicht einfach so bekommst, sondern etwas dafür tun musst. Aber für so ein wertvolles Geschenk wird sich jede
                        Mühe lohnen!
                        <br/><br/>
                        Also viel Glück!
                    </div>
                    <LeftButton goToNextStep={goToNextStep} buttonText={'Los geht\'s'}/>
                </IonCardContent>
            </IonCard>
        </>
    );
};
