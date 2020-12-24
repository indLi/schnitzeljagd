import React, {useState} from "react";
import {StepProps} from "./commonSteps";
import {CheckPosition} from "../../components/CheckPosition";
import {IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonInput, IonText} from "@ionic/react";
import {DescriptionText} from "../../components/DescriptionText";


export const Castle: React.FC<StepProps> = ({goToNextStep}) => {
    const [inputValue, setInputValue] = useState<string>();


    const enterInput = (customEvent: CustomEvent) => {
        const value = customEvent.detail.value;
        console.log(value)
        setInputValue(value)
    };

    return (
        <div>
            <DescriptionText>
                <h2>Willkommen im Königreich</h2>
                <p>Jetzt kannst du noch die letzten Meter zur Burg hinauf schreiten. Die nächste Frage wartet auch schon auf dich.</p>
            </DescriptionText>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Was sieht man?</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    Wie viele Fenster befinden sich auf der nord-west Seite des Burgturms?
                </IonCardContent>
            </IonCard>
            {/*TODO: insert correct position*/}
            <IonInput style={{backgroundColor: 'white'}} onIonChange={value => enterInput(value)} color={'secondary'}/>
            <CheckPosition latitude={28.12312} longitude={7.1237182} arrived={() => goToNextStep()}/>
        </div>
    );
};
