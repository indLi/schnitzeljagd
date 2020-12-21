import React, {useEffect, useState} from 'react';
import {IonButton, IonContent, IonModal, IonPage, IonInput} from '@ionic/react';
import './Home.css';
import {Welcome} from "./steps/Welcome";
import {ViewFlintsbach} from "./steps/ViewFlintsbach";
import {Loading} from "./steps/Loading";
import {Plugins} from '@capacitor/core';
import {Castle} from "./steps/Castle";
import {InitialPassword} from "./tarek/InitialPassword";
import {CoordinatesLake} from "./tarek/CoordinatesLake";
import {Hochstand} from "./tarek/Hochstand";
import {Sesam} from "./tarek/Sesam";
import {Weber} from "./tarek/Weber";
import {WeberWappen} from "./tarek/WeberWappen";
import {KarteWegKreuz} from "./tarek/KarteWegKreuz";
import {Verboten} from "./tarek/Verboten";
import {ZumTurm} from "./tarek/ZumTurm";
import {Stufen} from "./tarek/Stufen";
import {Berge} from "./tarek/Berge";
import {Grundstueck} from "./tarek/Grundstueck";
import {GrundstueckBaum} from "./tarek/GrundstueckBaum";
import {Alfons} from "./tarek/Alfons";
import {AlfonsNachbar} from "./tarek/AlfonsNachbar";
import {Keller} from "./tarek/Keller";
import {Bier} from "./tarek/Bier";
import {CheckInput} from "../components/CheckInput";

const {Storage} = Plugins;


enum StepEvi {
    Welcome,
    ViewFlintsbach,
    Castle
}

enum StepTarek {
    InitialPassword,
    CoordinatesLake,
    Hochstand,
    Sesam,
    Weber,
    WeberWappen,
    KarteWebKreuz,
    Verboten,
    ZumTurm,
    Stufen,
    Berge,
    Grundstueck,
    GrundstueckBaum,
    Alfons,
    AlfonsNachbar,
    Keller,
    Bier,
}

const currentStepStorageKey = 'currentStep';

const Home: React.FC = () => {
    const [person] = useState<'evi' | 'tarek'>('tarek');
    const [step, setStep] = useState<StepEvi | StepTarek | undefined>();

    const [showPasswordModal, setShowPasswordModal] = useState<boolean>(false);
    const [showCheatModal, setShowCheatModal] = useState<boolean>(false);
    const [secretTouch, setSecretTouch] = useState<string>('');
    const [inputForStep, setInputForStep] = useState<string>();

    const setCurrentStepFromStorage = async () => {
        const currentStep = await Storage.get({key: currentStepStorageKey})
        setStep(currentStep?.value ? Number(currentStep.value) : 0)
    }

    useEffect(() => {
        // TODO error handling
        setCurrentStepFromStorage()
    }, [])

    useEffect(() => {
        if (secretTouch === '121') {
            setShowPasswordModal(true)
        }
        const timeout = setTimeout(() => {
            if (secretTouch !== '') {
                setSecretTouch('')
            }
        }, 2000);
        return () => clearTimeout(timeout)
    }, [secretTouch])

    const goToNextStep = async () => {
        const newStep = step !== undefined ? step + 1 : 0;
        await Storage.set({key: currentStepStorageKey, value: newStep?.toString()})
        setStep(newStep)
    }
    const goToStep = async (desiredStep: string) => {
        const stepAsNumber = Number(desiredStep);
        if (!isNaN(stepAsNumber)) {
            await Storage.set({key: currentStepStorageKey, value: stepAsNumber.toString()})
            setStep(stepAsNumber)
        }
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
            case StepTarek.Hochstand:
                return <Hochstand goToNextStep={goToNextStep}/>
            case StepTarek.Sesam:
                return <Sesam goToNextStep={goToNextStep}/>
            case StepTarek.Weber:
                return <Weber goToNextStep={goToNextStep}/>
            case StepTarek.WeberWappen:
                return <WeberWappen goToNextStep={goToNextStep}/>
            case StepTarek.KarteWebKreuz:
                return <KarteWegKreuz goToNextStep={goToNextStep}/>
            case StepTarek.Verboten:
                return <Verboten goToNextStep={goToNextStep}/>
            case StepTarek.ZumTurm:
                return <ZumTurm goToNextStep={goToNextStep}/>
            case StepTarek.Stufen:
                return <Stufen goToNextStep={goToNextStep}/>
            case StepTarek.Berge:
                return <Berge goToNextStep={goToNextStep}/>
            case StepTarek.Grundstueck:
                return <Grundstueck goToNextStep={goToNextStep}/>
            case StepTarek.GrundstueckBaum:
                return <GrundstueckBaum goToNextStep={goToNextStep}/>
            case StepTarek.Alfons:
                return <Alfons goToNextStep={goToNextStep}/>
            case StepTarek.AlfonsNachbar:
                return <AlfonsNachbar goToNextStep={goToNextStep}/>
            case StepTarek.Keller:
                return <Keller goToNextStep={goToNextStep}/>
            case StepTarek.Bier:
                return <Bier/>
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
            <IonModal isOpen={showPasswordModal}>
                <p>Hier gelangst du zur Cheat-Seite <br/>
                    Nur bei Auftreten technischer Probleme zu verwenden</p>
                <CheckInput placeholder={'Passwort'} correctValues={['alohomora']} buttonText={'Cheat'} onSuccess={() => {
                    setShowPasswordModal(false);
                    setShowCheatModal(true)
                }}/>
                <IonButton onClick={() => setShowPasswordModal(false)}>Ich bin hier nur zufällig gelandet</IonButton>
            </IonModal>
            <IonModal isOpen={showCheatModal}>
                <p>Aktuelles Level <b>{step}</b></p>
                <div>
                    <IonInput style={{backgroundColor: '#cbcbcb'}} placeholder={'Neues Level'}
                              onIonChange={(value: CustomEvent) => setInputForStep(value.detail.value)}/>
                    <IonButton onClick={() => {
                        if (inputForStep) {
                            goToStep(inputForStep)
                            setShowCheatModal(false)
                        }
                    }}>Und los!</IonButton>
                </div>
                <IonButton onClick={() => setShowCheatModal(false)}>Ich habe nur zufällig das Passwort erraten</IonButton>
            </IonModal>
            <IonContent fullscreen style={{'--background': person === 'tarek' ? '#ffda6b' : '#fffaf7'}}>
                <div style={{width: '100px', height: '100px', backgroundColor: 'red'}} onClick={() => {
                    setSecretTouch(secretTouch + '1');
                }}/>
                <div style={{width: '100px', height: '100px', backgroundColor: 'green'}} onClick={() => {
                    setSecretTouch(secretTouch + '2');
                }}/>
                <div style={{padding: '24px 12px'}}>
                    {getCurrentStep()}
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Home;
