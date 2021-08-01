import React from "react";
import {IonCard, IonCardContent} from "@ionic/react";
import {StepProps} from "./commonSteps";
import {CheckInput} from "../../components/CheckInput";

export const Brunnen: React.FC<StepProps> = ({goToNextStep}) => {
    return (
        <>
                <IonCard style={{ backgroundColor: '#fff5d7'}}>
                    <IonCardContent>
                        Dort wo sich Stein und Milch treffen, findest du eine Quelle des Wassers.
                    </IonCardContent>
                    <IonCardContent >
                        Was wird über der <b>LIEBE</b> gefordert?
                    </IonCardContent>
                </IonCard>
                <CheckInput correctValues={['mehr trinkbrunnen in münchen!!!', 'mehr trinkb.runnen in münchen!!!', 'mehr trinkbrunnen in münchen', 'mehr trinkb.runnen in münchen', 'mehr trinkb. runnen in münchen!!!', 'mehr trinkb. runnen in münchen']} placeholder={'gefordert wird...'}
                            onSuccess={() => goToNextStep()} successMessage={'Genau! mehr Trinkbrunnen wollen wir!!'}
                            errorMessage={'Das ist leider falsch'} buttonText={'Stimmt\'s?'}/>
        </>
    );
};
