import React from "react";
import {StepProps} from "../evi/commonSteps";
import {IonCard} from "@ionic/react";
import {CheckInput} from "../../components/CheckInput";
import {Person} from "../Home";


type InitialPasswordProps = StepProps & { setPerson: (person: Person) => {} }
export const InitialPassword: React.FC<InitialPasswordProps> = ({goToNextStep, setPerson}) => {
    const passwordTarek = 'blacky13';
    const passwordEvi = 'fee';
    const passwordSteffi = 'test';

    const onSuccess = (value: string) => {
        if (value === passwordTarek) {
            setPerson('tarek')
        } else if (value === passwordEvi) {
            setPerson('evi')
        } else if (value === passwordSteffi)
            setPerson('steffi')
        goToNextStep()
    };

    return (
        <IonCard style={{paddingBottom: '12px', paddingTop: '24px', marginBottom: '0'}}>
            <CheckInput correctValues={[passwordTarek, passwordEvi, passwordSteffi]} placeholder={'Passwort'} onSuccess={onSuccess} buttonText={'START'}/>
        </IonCard>
    );
}
