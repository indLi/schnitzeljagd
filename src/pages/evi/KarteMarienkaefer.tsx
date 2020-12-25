import React from "react";
import {StepProps} from "./commonSteps";
import {IonCard, IonCardContent, IonIcon} from "@ionic/react";
import {DescriptionText} from "../../components/DescriptionText";
import {CheckPosition} from "../../components/CheckPosition";
import {bugOutline} from "ionicons/icons";


export const KarteMarienkaefer: React.FC<StepProps> = ({goToNextStep}) => {
    return (
        <div>
            <DescriptionText>
                <p>Der Marienkäfer spricht leider eine andere Sprache. Er zeichnet dir aber folgende Karte:</p>
            </DescriptionText>
            <IonCard>
                <img src='schnitzeljagd/assets/images/karteMarienkaefer.jpg'/>
                <IonCardContent>
                    brrff mhmm ieeffff fffiiii laaaabbrrrr<br/><br/>
                    mjjjjjooooo llleeell ggggrrrrr ffffffiiiuuu
                    <br/><br/>
                    gggrrr bbfffff<IonIcon style={{fontSize: '14px', marginLeft: '12px'}} icon={bugOutline}/>
                </IonCardContent>
            </IonCard>
            <CheckPosition latitude={47.714440} longitude={12.136342} arrived={() => goToNextStep()}/>
        </div>
    );
};
