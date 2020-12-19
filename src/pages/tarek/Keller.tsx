import React from "react";
import {CheckPosition} from "../../components/CheckPosition";
import {IonCard, IonCardContent} from "@ionic/react";
import {StepProps} from "../steps/commonSteps";


export const Keller: React.FC<StepProps> = ({goToNextStep}) => {
    return (
        <IonCard style={{paddingBottom: '32px'}}>
            <IonCardContent style={{fontSize: '14px'}}>
                Begonnen hat's oben, <br/>
                wir wollen dich loben. <br/>
                Lösen konnte man's nicht schneller, <br/>
                enden wird es nun im ...
            </IonCardContent>
            <CheckPosition latitude={48.28819} longitude={7.80779} arrived={() => goToNextStep()} buttonText={'Hier ?'}/>
        </IonCard>
    );
};
