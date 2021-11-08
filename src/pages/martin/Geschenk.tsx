import React from "react";
import {IonCard, IonCardContent} from "@ionic/react";
import {backgroundCardColorMartin, StepProps} from "./commonSteps";
import {LeftButton} from "../../components/LeftButton";

export const Geschenk: React.FC<StepProps> = ({goToNextStep}) => {
    return (
        <>
            <IonCard style={{backgroundColor: backgroundCardColorMartin}}>
                <IonCardContent>
                    <p style={{fontSize: '35px', textAlign: 'center', marginTop: '24px'}}>404</p>
                    <p style={{fontSize: '16px', textAlign: 'center', marginBottom: '24px'}}>#Geschenk# not found</p>

                    <LeftButton goToNextStep={goToNextStep} buttonText={'Danke :)'}/>
                </IonCardContent>
            </IonCard>
        </>
    );
};
