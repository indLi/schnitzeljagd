import React from "react";
import {IonCardContent} from "@ionic/react";
import {LeftButton} from "../../components/LeftButton";
import {StepProps} from "./commonSteps";

export const FriedenskircheFakten: React.FC<StepProps> = ({goToNextStep}) => {
    return (
        <IonCardContent>
            <p style={{fontSize: '20px'}}>Angekommen an der Ost-West-Friedenskirche</p> <br/>
            Und? Hast du sie schon gekannt?<br/>
            Die Ost-West-Friedenskirche wurde in den 1950er Jahren von Timofej Wassiljewitsch Prochorow und seiner Frau Natascha errichtet. <br/><br/>
            Als Baumaterial nutzten sie herumliegenden Schutt aus dem Zweiten Weltkrieg und allerlei Unrat. So ist beispielsweise die Decke des Gebäudes mit glitzerndem Schokoladenpapier versilbert. <br/><br/>
            Als 1972 in München die Bauarbeiten für die Olympische Spiele begannen, wurde das Olympiagelände extra weiter nördlich gelegt als geplant, um die kleine Kirche zu erhalten. <br/><br/>
            Sie wurde anschließend Ost-West-Friedenskirche genannt, denn die Kirche von Timofej und seiner Frau Natascha ist weder katholisch, noch orthodox, sondern gilt als Symbol, um den Osten und den Westen und alle Christen zu versöhnen. <br/><br/>
            Timofej starb 2004 mit rund 110 Jahren (sein genaues Geburtsdatum ist unbekannt) als bis dahin ältester Münchner. Sein Grab befindet sich auf dem Westfriedhof.
            <br/><br/>
            <p style={{fontSize: '20px'}}>Bist du bereit für die nächste Station?</p>
            <LeftButton goToNextStep={goToNextStep} buttonText={'Klar, weiter geht\'s'}/>
        </IonCardContent>
    )
        ;
};
