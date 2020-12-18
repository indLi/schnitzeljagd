import React from "react";
import {IonButton, IonText} from "@ionic/react";
import {StepProps} from "./commonSteps";

export const Welcome: React.FC<StepProps> = ({goToNextStep}) => {

    return (
        <>
            <div style={{display: 'flex', flexDirection: 'column', padding: '32px'}}>
                <IonText color={'dark'}>
                    <h1>Hallo Evi</h1>
                    <p>hast du sie auch gesehen usw</p>
                    <p>lalal und blub und so</p>
                    <br/>
                    <p>Bist du bereit?</p>
                </IonText>
                <IonButton style={{alignSelf: 'center'}} onClick={goToNextStep}>Es kann los gehen</IonButton>
            </div>
        </>
    );
};
