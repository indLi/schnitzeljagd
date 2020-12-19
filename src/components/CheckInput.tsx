import React, {useState} from "react";
import {IonButton, IonInput, IonToast} from "@ionic/react";


type CheckInputProps = { correctValues: string[], placeholder: string, buttonText?: string, successMessage?: string, errorMessage?: string, onSuccess: () => void };

export const CheckInput: React.FC<CheckInputProps> = ({correctValues, placeholder, buttonText, successMessage, errorMessage, onSuccess}) => {
    const [inputValue, setInputValue] = useState<string>();
    const [showSuccess, setShowSuccess] = useState<boolean>(false);
    const [showError, setShowError] = useState<boolean>(false);


    const enterInput = (customEvent: CustomEvent) => {
        const value = customEvent.detail.value;
        console.log(value)
        setInputValue(value)
    };

    const onCheckInput = () => {
        if (correctValues.includes((inputValue || '').toLocaleLowerCase())) {
            setShowSuccess(true)
        } else {
            setShowError(true)
        }
    };

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '12px'}}>
            <IonToast
                color={'success'}
                position={'middle'}
                isOpen={showSuccess}
                onDidDismiss={() => {
                    setShowSuccess(false);
                    onSuccess()
                }}
                message={successMessage || 'Juhuuu, richtig!'}
                duration={1000}
            />
            <IonToast
                color={'danger'}
                position={'middle'}
                isOpen={showError}
                onDidDismiss={() => {
                    setShowError(false);
                }}
                message={errorMessage || 'Leider falsch...'}
                duration={2000}
            />
            <IonInput style={{backgroundColor: 'white', border: '1px solid #dedede', textAlign: 'center'}} placeholder={placeholder}
                      onIonChange={value => enterInput(value)} color={'secondary'}/>
            <IonButton style={{margin: '24px 12px 12px 12px'}} onClick={onCheckInput}>{buttonText || 'Und stimmt\'s ?'}</IonButton>
        </div>
    );
};
