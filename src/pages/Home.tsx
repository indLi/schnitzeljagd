import React, {useEffect, useState} from 'react';
import {IonContent, IonPage} from '@ionic/react';
import './Home.css';
import {Welcome} from "./steps/Welcome";
import {ViewFlintsbach} from "./steps/ViewFlintsbach";
import {Loading} from "./steps/Loading";
import {Plugins} from '@capacitor/core';

const {Storage} = Plugins;


enum Step {
    Welcome,
    ViewFlintsbach,
}

const currentStepStorageKey = 'currentStep';

const Home: React.FC = () => {

    const [step, setStep] = useState<Step | undefined>();

    const setCurrentStepFromStorage = async () => {
        const currentStep = await Storage.get({key: currentStepStorageKey})
        setStep(currentStep?.value ? Number(currentStep.value) : Step.Welcome)
    }

    useEffect(() => {
        // TODO error handling
        setCurrentStepFromStorage()
    }, [])

    const goToNextStep = async () => {
        const newStep = step !== undefined ? step + 1 : Step.Welcome;
        await Storage.set({key: currentStepStorageKey, value: newStep?.toString()})
        setStep(newStep)
    }

    const getCurrentStep = () => {
        switch (step) {
            case Step.Welcome:
                return <Welcome goToNextStep={goToNextStep}/>
            case Step.ViewFlintsbach:
                return <ViewFlintsbach goToNextStep={goToNextStep}/>
            default:
                return <Loading/>
        }

    }

    return (
        <IonPage>
            <IonContent fullscreen style={{'--background': '#fffaf7'}}>
                <div style={{padding: '24px 12px'}}>
                {getCurrentStep()}
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Home;
