import React from "react";
import {StepProps} from "./commonSteps";
import {IonCard} from "@ionic/react";
import {DescriptionText} from "../../components/DescriptionText";
import {CurrentCoordinates} from "../../components/CurrentCoordinates";


export const KoordinatenBank: React.FC<StepProps> = ({goToNextStep}) => {
    return (
        <>
            <DescriptionText><p>Der Mitarbeiter des Service Telefons, kann dir nur folgenden Hinweis geben.</p>
            </DescriptionText>
            <IonCard>
                <CurrentCoordinates latitude={47.71818} longitude={12.12139} arrived={goToNextStep} accuracy={20}/>
            </IonCard>
        </>
    )
};
