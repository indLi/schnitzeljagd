import React, {useEffect, useState} from 'react';
import {IonButton, IonContent, IonInput, IonModal, IonPage} from '@ionic/react';
import './Home.css';
import {Welcome} from "./evi/Welcome";
import {ViewFlintsbach} from "./evi/ViewFlintsbach";
import {Loading} from "./evi/Loading";
import {Plugins} from '@capacitor/core';
import {Marienkaefer} from "./evi/Marienkaefer";
import {InitialPassword} from "./tarek/00_InitialPassword";
import {CoordinatesLake} from "./tarek/01_CoordinatesLake";
import {Hochstand} from "./tarek/02_Hochstand";
import {Sesam} from "./tarek/03_Sesam";
import {Weber} from "./tarek/04_Weber";
import {WeberWappen} from "./tarek/05_WeberWappen";
import {KarteWegKreuz} from "./tarek/06_KarteWegKreuz";
import {Verboten} from "./tarek/07_Verboten";
import {ZumTurm} from "./tarek/08_ZumTurm";
import {Stufen} from "./tarek/09_Stufen";
import {Berge} from "./tarek/10_Berge";
import {Grundstueck} from "./tarek/11_Grundstueck";
import {GrundstueckBaum} from "./tarek/12_GrundstueckBaum";
import {Alfons} from "./tarek/13_Alfons";
import {AlfonsNachbar} from "./tarek/14_AlfonsNachbar";
import {Keller} from "./tarek/15_Keller";
import {Bier} from "./tarek/16_Bier";
import {CheckInput} from "../components/CheckInput";
import {KarteMarienkaefer} from "./evi/KarteMarienkaefer";
import {Kreuzung} from "./evi/Kreuzung";
import {ZurBuehne} from "./evi/ZurBuehne";
import {Post} from "./evi/Post";
import {KoordinatenBank} from "./evi/KoordinatenBank";
import {See} from "./evi/See";
import {SeeStein} from "./evi/SeeStein";
import {Ende} from "./evi/Ende";
import {EndeEnde} from "./evi/EndeEnde";
import {getCurrentStepSteffi, StepSteffi} from "./steffi/getCurrentStepSteffi";
import {getCurrentStepMartin} from "./martin/getCurrentStepMartin";
import {getCurrentStepJana, StepJana} from "./jana/getCurrentStepJana";

const {Storage} = Plugins;


enum StepEvi {
    InitialPassword,
    Welcome,
    ViewFlintsbach,
    Marienkaefer,
    KarteMarienkaefer,
    Kreuzung,
    ZurBuehne,
    Post,
    KoordinatenBank,
    See,
    SeeStein,
    Ende,
    EndeEnde,
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
const personStorageKey = 'person';

export type Person = 'evi' | 'tarek' | 'steffi' | 'martin' | 'jana';

const Home: React.FC = () => {
        const [person, setPerson] = useState<Person>();
        const [step, setStep] = useState<StepEvi | StepTarek | StepSteffi | StepJana | undefined>();
        const [backgroundColor, setBackgroundColor] = useState<string>('#fbfbfb');

        const [showPasswordModal, setShowPasswordModal] = useState<boolean>(false);
        const [showCheatModal, setShowCheatModal] = useState<boolean>(false);
        const [secretTouch, setSecretTouch] = useState<string>('');
        const [inputForStep, setInputForStep] = useState<string>();

        const setCurrentStepAndPersonFromStorage = async () => {
            const currentStep = await Storage.get({key: currentStepStorageKey})
            const person = await Storage.get({key: personStorageKey})
            setStep(currentStep?.value ? Number(currentStep.value) : 0)
            setPerson(person?.value as Person)
        }

        useEffect(() => {
            // TODO error handling
            setCurrentStepAndPersonFromStorage()
        }, [])

        useEffect(() => {
            if (person === 'tarek') {
                setBackgroundColor('#ffda6b')
                document.body.style.setProperty('--ion-color-primary', '#15a1d0');
                document.body.style.setProperty('--ion-color-primary-shade', '#128eb7');
                document.body.style.setProperty('--ion-color-primary-contrast', '#ffffff');

                document.body.style.setProperty('--ion-color-secondary', '#009b8b');
                document.body.style.setProperty('--ion-color-secondary-shade', '#00887a');
                document.body.style.setProperty('--ion-color-secondary-contrast', '#ffffff');
            } else if (person === 'evi') {
                setBackgroundColor('#fffaf7')
                document.body.style.setProperty('--ion-color-primary', '#f58b95');
                document.body.style.setProperty('--ion-color-primary-shade', '#d87a83');
                document.body.style.setProperty('--ion-color-primary-contrast', '#ffffff');

                document.body.style.setProperty('--ion-color-secondary', '#72eab7');
                document.body.style.setProperty('--ion-color-secondary-shade', '#64cea1');
                document.body.style.setProperty('--ion-color-secondary-contrast', '#000000');
            } else if (person === 'steffi') {
                setBackgroundColor('#fdcdb1')
                document.body.style.setProperty('--ion-color-primary', '#9c27b0');
                document.body.style.setProperty('--ion-color-primary-shade', '#89229b');
                document.body.style.setProperty('--ion-color-primary-contrast', '#ffffff');

                document.body.style.setProperty('--ion-color-secondary', '#7e1895');
                document.body.style.setProperty('--ion-color-secondary-shade', '#ffffff');
                document.body.style.setProperty('--ion-color-secondary-contrast', '#000000');
            } else if (person === 'martin') {
                setBackgroundColor('#fae418')
                document.body.style.setProperty('--ion-color-primary', '#00339a');
                document.body.style.setProperty('--ion-color-primary-shade', '#002d88');
                document.body.style.setProperty('--ion-color-primary-contrast', '#ffffff');


                document.body.style.setProperty('--ion-color-secondary', '#215cc4');
                document.body.style.setProperty('--ion-color-secondary-shade', '#1d51ac');
                document.body.style.setProperty('--ion-color-secondary-contrast', '#ffffff');
            } else if (person === 'jana') {
                setBackgroundColor('#559e52')
                document.body.style.setProperty('--ion-color-primary', '#6388a9');
                document.body.style.setProperty('--ion-color-primary-shade', '#038f00');
                document.body.style.setProperty('--ion-color-primary-contrast', '#ffffff');

                document.body.style.setProperty('--ion-color-secondary', '#215cc4');
                document.body.style.setProperty('--ion-color-secondary-shade', '#1d51ac');
                document.body.style.setProperty('--ion-color-secondary-contrast', '#ffffff');
            }
        }, [person])

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

        const selectPerson = async (selectedPerson: Person) => {
            await Storage.set({key: personStorageKey, value: selectedPerson})
            setPerson(selectedPerson)
        }
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
                case StepEvi.InitialPassword:
                    return <InitialPassword goToNextStep={goToNextStep} setPerson={selectPerson}/>
                case StepEvi.Welcome:
                    return <Welcome goToNextStep={goToNextStep}/>
                case StepEvi.ViewFlintsbach:
                    return <ViewFlintsbach goToNextStep={goToNextStep}/>
                case StepEvi.Marienkaefer:
                    return <Marienkaefer goToNextStep={goToNextStep}/>
                case StepEvi.KarteMarienkaefer:
                    return <KarteMarienkaefer goToNextStep={goToNextStep}/>
                case StepEvi.Kreuzung:
                    return <Kreuzung goToNextStep={goToNextStep}/>
                case StepEvi.ZurBuehne:
                    return <ZurBuehne goToNextStep={goToNextStep}/>
                case StepEvi.Post:
                    return <Post goToNextStep={goToNextStep}/>
                case StepEvi.KoordinatenBank:
                    return <KoordinatenBank goToNextStep={goToNextStep}/>
                case StepEvi.See:
                    return <See goToNextStep={goToNextStep}/>
                case StepEvi.SeeStein:
                    return <SeeStein goToNextStep={goToNextStep}/>
                case StepEvi.Ende:
                    return <Ende goToNextStep={goToNextStep}/>
                case StepEvi.EndeEnde:
                    return <EndeEnde goToNextStep={goToNextStep}/>
                default:
                    return <Loading/>
            }
        }

        const getCurrentStepTarek = () => {
            switch (step) {
                case StepTarek.InitialPassword:
                    return <InitialPassword goToNextStep={goToNextStep} setPerson={selectPerson}/>
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
            } else if (person === 'steffi') {
                return getCurrentStepSteffi({goToNextStep, selectPerson, step})
            } else if (person === 'martin') {
                return getCurrentStepMartin({goToNextStep, selectPerson, step})
            } else if (person === 'jana')
                return getCurrentStepJana({goToNextStep, goToStep, selectPerson, step})
            return <InitialPassword goToNextStep={goToNextStep} setPerson={selectPerson}/>
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
                    <div>Person wechseln:
                        <IonButton onClick={() => selectPerson('tarek')}>Tarek</IonButton>
                        <IonButton onClick={() => selectPerson('evi')}>Evi</IonButton>
                        <IonButton onClick={() => selectPerson('steffi')}>Steffi</IonButton>
                        <IonButton onClick={() => selectPerson('martin')}>Martin</IonButton>
                        <IonButton onClick={() => selectPerson('jana')}>Jana</IonButton>
                    </div>
                    <IonButton onClick={() => setShowCheatModal(false)}>Ich habe nur zufällig das Passwort erraten</IonButton>
                </IonModal>
                <IonContent fullscreen style={{'--background': backgroundColor}}>
                    <div style={{padding: '24px 12px 0 12px'}}>
                        {getCurrentStep()}
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <div style={{width: '100px', height: '100px', backgroundColor: backgroundColor}} onClick={() => {
                            setSecretTouch(secretTouch + '1');
                        }}/>
                        <div style={{width: '100px', height: '100px', backgroundColor: backgroundColor}} onClick={() => {
                            setSecretTouch(secretTouch + '2');
                        }}/>
                    </div>
                </IonContent>
            </IonPage>
        );
    }
;

export default Home;
