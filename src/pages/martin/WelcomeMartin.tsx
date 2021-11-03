import React from "react";
import {IonButton, IonCard, IonCardContent} from "@ionic/react";
import {StepProps} from "./commonSteps";
import {CenteredButton} from "../../components/CenteredButton";

export const WelcomeMartin: React.FC<StepProps> = ({goToNextStep}) => {
    return (
        <>
            <IonCard style={{paddingBottom: '14px', paddingTop: '24px', marginBottom: '0', backgroundColor: '#fffec7'}}>
                <IonCardContent>
                    <p style={{fontSize: '18px'}}>Hallo Martin,</p>
                    <p style={{fontSize: '16px'}}>
                        <br/>
                ich wünsche dir alles gute zum Geburtstag. <br/><br/>
                Leider kann ich heute nicht persönlich da sein und dir dein Geschenk übergeben. <br/>
                Es ist etwas seltenes und so wertvolles, dass ich es nicht einfach auch schicken konnte. Die Gefahr, dass es jemand stehlen würde wäre zu groß. Es ist an einem sicheren Ort versteckt. Ich habe dir aber Hinweise hinterlassen, damit du es finden kannst.
                        <br/><br/>
                        Einfach wird es nicht werden und es wird auch nicht an einem Tag zu schaffen sein, aber manchmal ist ja auch der Weg das Ziel.
                        <br/> <br/>
                Viel Glück bei der Suche!<br/><br/></p>
                    <p style={{fontSize: '18px'}}>Schöne Grüße, *****</p>
                </IonCardContent>
            </IonCard>
            <CenteredButton goToNextStep={goToNextStep} text={'Die Suche kann beginnen'}/>
        </>
    );
};
