import React, {useEffect, useState} from 'react';
import {IonContent, IonPage} from '@ionic/react';
import './Home.css';
import {Welcome} from "./steps/Welcome";
import {ViewFlintsbach} from "./steps/ViewFlintsbach";
import {Loading} from "./steps/Loading";
import {Plugins} from '@capacitor/core';
import {Castle} from "./steps/Castle";
import {InitialPassword} from "./tarek/InitialPassword";
import {CoordinatesLake} from "./tarek/CoordinatesLake";

const {Storage} = Plugins;


enum StepEvi {
    Welcome,
    ViewFlintsbach,
    Castle
}

enum StepTarek {
    InitialPassword,
    CoordinatesLake,
}

const currentStepStorageKey = 'currentStep';

const Home: React.FC = () => {
    const [person] = useState<'evi' | 'tarek'>('tarek');
    const [step, setStep] = useState<StepEvi | StepTarek | undefined>();

    const setCurrentStepFromStorage = async () => {
        const currentStep = await Storage.get({key: currentStepStorageKey})
        setStep(currentStep?.value ? Number(currentStep.value) : 0)
    }

    useEffect(() => {
        // TODO error handling
        setCurrentStepFromStorage()
    }, [])

    const goToNextStep = async () => {
        const newStep = step !== undefined ? step + 1 : StepEvi.Welcome;
        await Storage.set({key: currentStepStorageKey, value: newStep?.toString()})
        setStep(newStep)
    }

    const getCurrentStepEvi = () => {
        switch (step) {
            case StepEvi.Welcome:
                return <Welcome goToNextStep={goToNextStep}/>
            case StepEvi.ViewFlintsbach:
                return <ViewFlintsbach goToNextStep={goToNextStep}/>
            case StepEvi.Castle:
                return <Castle goToNextStep={goToNextStep}/>
            default:
                return <Loading/>
        }
    }

    const getCurrentStepTarek = () => {
        switch (step) {
            case StepTarek.InitialPassword:
                return <InitialPassword goToNextStep={goToNextStep}/>
            case StepTarek.CoordinatesLake:
                return <CoordinatesLake goToNextStep={goToNextStep}/>
            default:
                return <Loading/>
        }
    }

    const getCurrentStep = () => {
        if (person === 'tarek') {
            return getCurrentStepTarek()
        } else if (person === 'evi') {
            return getCurrentStepEvi()
        }
        return <div>keine person konfiguriert</div>
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
