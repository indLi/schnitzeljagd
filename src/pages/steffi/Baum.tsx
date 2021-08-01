import React from "react";
import {IonCard, IonCardContent} from "@ionic/react";
import {StepProps} from "./commonSteps";
import {CheckInput} from "../../components/CheckInput";

export const Baum: React.FC<StepProps> = ({goToNextStep}) => {
    return (
        <>
            <IonCard style={{backgroundColor: '#fff5d7'}}>
                <div style={{backgroundColor: '#c7eee3', width: '100%', height: '40px'}}/>
                <div style={{backgroundColor: '#c9d05d', width: '100%', height: '40px'}}/>
                <div style={{backgroundColor: '#3c695c', width: '100%', height: '40px'}}/>
                <div style={{backgroundColor: '#559b99', width: '100%', height: '40px'}}/>
                <div style={{backgroundColor: '#ead04e', width: '100%', height: '40px'}}/>
                <div style={{backgroundColor: '#7aa852', width: '100%', height: '40px'}}/>
                <div style={{backgroundColor: '#9f3e36', width: '100%', height: '40px'}}/>
                <div style={{backgroundColor: '#463547', width: '100%', height: '40px'}}/>
                <div style={{backgroundColor: '#598ab3', width: '100%', height: '40px'}}/>
                <IonCardContent>
                    Der nächste Hinweis wird dich finden.
                    <br/>
                    Finde daraufhin die Abfolge dieser Farben.
                </IonCardContent>
            </IonCard>
            <CheckInput correctValues={['baumkuchen']} placeholder={'Lösungswort'}
                        onSuccess={() => goToNextStep()} successMessage={'lecker schmeckt der Baum'}
                        errorMessage={'leider falsch!'} buttonText={'Stimmt\'s?'}/>
        </>
    );
};
