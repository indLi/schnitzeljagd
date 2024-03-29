import React from "react";
import {CheckPosition} from "../../components/CheckPosition";
import {IonCard, IonCardContent} from "@ionic/react";
import {StepProps} from "../evi/commonSteps";


export const ZumTurm: React.FC<StepProps> = ({goToNextStep}) => {
    return (
        <IonCard style={{paddingBottom: '32px', marginBottom: '0'}}>
            <IonCardContent>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '32px', fontSize: '24px'}}>
                    <img height={30} style={{marginRight: '12px'}} src='schnitzeljagd/assets/images/raute.gif'/>
                    1,0 km
                </div>
            </IonCardContent>
            <CheckPosition accuracy={70} latitude={48.243050} longitude={7.801360} arrived={() => goToNextStep()}/>
        </IonCard>
    );
};
