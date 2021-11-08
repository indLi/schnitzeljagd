import React from "react";
import {IonCard, IonCardContent} from "@ionic/react";
import {backgroundCardColorMartin, StepProps} from "./commonSteps";
import {CheckPosition} from "../../components/CheckPosition";


export const Palais: React.FC<StepProps> = ({goToNextStep}) => {
    return (
        <>
            <IonCard style={{backgroundColor: backgroundCardColorMartin}}>
                <IonCardContent>
                    <p style={{marginBottom: '24px'}}>Um weiter zu kommen musst du wohl schon wieder von der Couch aufstehen. <br/>
                    Findest du folgendes Gebäude?
                    </p>
                    <img src='schnitzeljagd/assets/images/kassel.jpeg'/>
                    <CheckPosition latitude={51.316468} longitude={9.460864} arrived={() => goToNextStep()} accuracy={200} successMessage={'Verbrannt, aber da!'}/>
                    <p style={{fontStyle: 'italic', marginTop: '12px'}}>Bitte beachte: Auch hier gilt wieder der google maps Trick.</p>
                </IonCardContent>
            </IonCard>
        </>
    );
};
