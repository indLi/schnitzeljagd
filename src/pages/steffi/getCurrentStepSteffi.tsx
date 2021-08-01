import {InitialPassword} from "../tarek/00_InitialPassword";
import {HalloSteffi} from "./HalloSteffi";
import {Geduld} from "./Geduld";
import {GeduldGeschafft} from "./GeduldGeschafft";
import {GuteFreunde} from "./GuteFreunde";
import {GuteFreundeGeschafft} from "./GuteFreundeGeschafft";
import {Loading} from "../evi/Loading";
import React from "react";
import {Brunnen} from "./Brunnen";
import {BrunnenGeschafft} from "./BrunnenGeschafft";
import {Baum} from "./Baum";
import {BaumGeschafft} from "./BaumGeschafft";
import {Olympia} from "./Olympia";

export enum StepSteffi {
    InitialPassword,
    WelcomeSteffi,
    Geduld,
    GeduldGeschafft,
    Brunnen,
    BrunnenGeschafft,
    GuteFreunde,
    GuteFreundeGeschafft,
    Baum,
    BaumGeschafft,
    Olympia
}

export const getCurrentStepSteffi = ({
                                         goToNextStep,
                                         selectPerson,
                                         step
                                     }: { goToNextStep: () => Promise<void>, selectPerson: (selectedPerson: any) => Promise<void>, step: StepSteffi | any }) => {
    switch (step) {
        case StepSteffi.InitialPassword:
            return <InitialPassword goToNextStep={goToNextStep} setPerson={selectPerson}/>
        case  StepSteffi.WelcomeSteffi:
            return <HalloSteffi goToNextStep={goToNextStep}/>
        case  StepSteffi.Geduld:
            return <Geduld goToNextStep={goToNextStep}/>
        case  StepSteffi.Brunnen:
            return <Brunnen goToNextStep={goToNextStep}/>
        case  StepSteffi.BrunnenGeschafft:
            return <BrunnenGeschafft goToNextStep={goToNextStep}/>
        case  StepSteffi.GeduldGeschafft:
            return <GeduldGeschafft goToNextStep={goToNextStep}/>
        case  StepSteffi.GuteFreunde:
            return <GuteFreunde goToNextStep={goToNextStep}/>
        case  StepSteffi.GuteFreundeGeschafft:
            return <GuteFreundeGeschafft goToNextStep={goToNextStep}/>;
        case  StepSteffi.Baum:
            return <Baum goToNextStep={goToNextStep}/>
        case  StepSteffi.BaumGeschafft:
            return <BaumGeschafft goToNextStep={goToNextStep}/>
        case  StepSteffi.Olympia:
            return <Olympia goToNextStep={goToNextStep}/>
        default:
            return <Loading/>
    }
}
