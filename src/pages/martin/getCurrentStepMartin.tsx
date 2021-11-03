import {InitialPassword} from "../tarek/00_InitialPassword";
import {Loading} from "../evi/Loading";
import React from "react";
import {WelcomeMartin} from "./WelcomeMartin";
import {Puzzle} from "./Puzzle";

export enum StepMartin {
    InitialPassword,
    WelcomeMatrin,
    Puzzle,
    EisBauernhof,

}

export const getCurrentStepMartin = ({
                                         goToNextStep,
                                         selectPerson,
                                         step
                                     }: { goToNextStep: () => Promise<void>, selectPerson: (selectedPerson: any) => Promise<void>, step: StepMartin | any }) => {
    switch (step) {
        case StepMartin.InitialPassword:
            return <InitialPassword goToNextStep={goToNextStep} setPerson={selectPerson}/>
        case StepMartin.WelcomeMatrin:
            return <WelcomeMartin goToNextStep={goToNextStep}/>
        case StepMartin.Puzzle:
            return <Puzzle goToNextStep={goToNextStep}/>
        case StepMartin.EisBauernhof:
            return <Puzzle goToNextStep={goToNextStep}/>
        default:
            return <Loading/>
    }
}
