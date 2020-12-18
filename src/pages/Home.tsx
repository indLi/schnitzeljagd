import React, {useEffect, useState} from 'react';
import {IonPage} from '@ionic/react';
import './Home.css';
import {Welcome} from "./steps/Welcome";
import {ViewFlintsbach} from "./steps/ViewFlintsbach";

enum Step {
    Welcome,
    ViewFlintsbach,
}

const Home: React.FC = () => {

    const [step, setStep] = useState<Step | undefined>();

    useEffect(() => {
        console.log('use effect')
        setStep(Step.Welcome)
    }, [])

    const goToNextStep = () => {
        const newStep = step !== undefined ? step + 1 : undefined;
        setStep(newStep)
    }

    const getCurrentStep = () => {
        switch (step) {
            case Step.Welcome:
                return <Welcome goToNextStep={goToNextStep}/>
            case Step.ViewFlintsbach:
                return <ViewFlintsbach goToNextStep={goToNextStep}/>
            default:
                return <div>Loading</div>
        }

    }

    return (
        <>
            {
                getCurrentStep()
            }
        </>
    );
};

export default Home;
