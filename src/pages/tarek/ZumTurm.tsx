import React from "react";
import {CheckPosition} from "../../components/CheckPosition";
import {IonCard, IonCardContent} from "@ionic/react";
import {StepProps} from "../steps/commonSteps";


export const ZumTurm: React.FC<StepProps> = ({goToNextStep}) => {
    return (
        <IonCard style={{paddingBottom: '32px', marginBottom: '0'}}>
            <IonCardContent>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '32px', fontSize: '24px'}}>
                    <img height={30} style={{marginRight: '12px'}} src='./assets/images/raute.gif'/>
                    1,0 km
                </div>
            </IonCardContent>
            <CheckPosition latitude={48.25509} longitude={7.79374} arrived={() => goToNextStep()}/>
        </IonCard>
    );
};
