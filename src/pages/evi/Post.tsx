import React from "react";
import {StepProps} from "./commonSteps";
import {IonCard, IonCardContent} from "@ionic/react";
import {CheckInput} from "../../components/CheckInput";
import {DescriptionText} from "../../components/DescriptionText";


export const Post: React.FC<StepProps> = ({goToNextStep}) => {
    return (
        <div>
            <DescriptionText><p>Nachdem die Fee alle nötigen Wildblumen gesammelt hat, hat sie diese zur Post gebracht, um sie schon vorab
                nach Hause zu schicken.</p>
                <p>Du wunderst dich sicher, aber ja, die Post versendet zwischen dem Reich der Feen und unserer Welt.</p></DescriptionText>
            <IonCard>
                <IonCardContent>
                    Am Briefkasten findest du den nächsten Hinweis.
                    <br/><br/>
                    Was ist die Nummer des Service-Telefons?
                </IonCardContent>
            </IonCard>
            <CheckInput correctValues={['0228 4333112', '02284333112']} placeholder={'tuuuuhhhht, tuuuuuuhhht, ...'}
                        onSuccess={() => goToNextStep()} successMessage={'Guten Tag, hier das Service-Telefon der Post, ...'}
                        errorMessage={'Kein Anschluss unter dieser Nummer.'} buttonText={'Wählen'}/>
        </div>
    );
};
