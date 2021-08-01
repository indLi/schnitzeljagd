import {InitialPassword} from "../tarek/00_InitialPassword";
import {HalloSteffi} from "./HalloSteffi";
import {Geduld} from "./Geduld";
import {GeduldGeschafft} from "./GeduldGeschafft";
import {GuteFreunde} from "./GuteFreunde";
import {GuteFreundeGeschafft} from "./GuteFreundeGeschafft";
import {Loading} from "../evi/Loading";
import React from "react";

export enum StepSteffi {
    InitialPassword,
    WelcomeSteffi,
    Geduld,
    GeduldGeschafft,
    GuteFreunde,
    GuteFreundeGeschafft,
}
export const getCurrentStepSteffi = ({goToNextStep, selectPerson, step}: {goToNextStep: () => Promise<void>, selectPerson: (selectedPerson: any) => Promise<void>, step: StepSteffi | any}) => {
    switch (step) {
        case StepSteffi.InitialPassword:
            return <InitialPassword goToNextStep={goToNextStep} setPerson={selectPerson}/>
        case  StepSteffi.WelcomeSteffi:
            return <HalloSteffi goToNextStep={goToNextStep}/>
        case  StepSteffi.Geduld:
            return <Geduld goToNextStep={goToNextStep}/>
        case  StepSteffi.GeduldGeschafft:
            return <GeduldGeschafft goToNextStep={goToNextStep}/>
        case  StepSteffi.GuteFreunde:
            return <GuteFreunde goToNextStep={goToNextStep}/>
        case  StepSteffi.GuteFreundeGeschafft:
            return <GuteFreundeGeschafft goToNextStep={goToNextStep}/>
        default:
            return <Loading/>
    }
}
