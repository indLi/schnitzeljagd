import React from "react";
import {StepProps} from "../evi/commonSteps";
import {IonCard} from "@ionic/react";
import {CheckInput} from "../../components/CheckInput";
import {Person} from "../Home";


type InitialPasswordProps = StepProps & { setPerson: (person: Person) => {} }
export const InitialPassword: React.FC<InitialPasswordProps> = ({goToNextStep, setPerson}) => {
    const passwordTarek = 'blacky13';
    const passwordEvi = 'fee';
    const passwordSteffi = 'zitronenkuchen';
    const passwordMartin = 'affentanz';
    const passwordJana = 'waschbär';

    const onSuccess = (value: string) => {
        if (value.toLowerCase() === passwordTarek) {
            setPerson('tarek')
        } else if (value.toLowerCase() === passwordEvi) {
            setPerson('evi')
        } else if (value.toLowerCase() === passwordSteffi) {
            setPerson('steffi')
        } else if (value.toLowerCase() === passwordMartin) {
            setPerson('martin')
        } else if (value.toLowerCase() === passwordJana) {
            setPerson('jana')
        }
        goToNextStep()
    };

    return (
        <IonCard style={{paddingBottom: '12px', paddingTop: '24px', marginBottom: '0'}}>
            <CheckInput correctValues={[passwordTarek, passwordEvi, passwordSteffi, passwordMartin, passwordJana]} placeholder={'Passwort'}
                        onSuccess={onSuccess}
                        buttonText={'START'}/>
        </IonCard>
    );
};
