import {InitialPassword} from "../tarek/00_InitialPassword";
import {Loading} from "../evi/Loading";
import React from "react";
import {WelcomeMartin} from "./WelcomeMartin";
import {Puzzle} from "./Puzzle";
import {Eisbauernhof} from "./Eisbauernhof";
import {PuzzleDone} from "./PuzzleDone";
import {EisbauernhofDone} from "./EisbauernhofDone";
import {Detektiv} from "./Detektiv";
import {DetektivDone} from "./DetektivDone";
import {Palais} from "./Palais";
import {PalaisDone} from "./PalaisDone";
import {PalaisQuadrate} from "./PalaisQuadrate";
import {Geschenk} from "./Geschenk";
import {Geschenk2} from "./Geschenk2";

export enum StepMartin {
    InitialPassword,
    WelcomeMatrin,
    Puzzle,
    PuzzleDone,
    EisBauernhof,
    EisBauernhofDone,
    Detektiv,
    DetektivDone,
    Palais,
    PalaisQuadrate,
    PalaisDone,
    Geschenk,
    Geschenk2
}

export const getCurrentStepMartin = ({
                                         goToNextStep,
                                         selectPerson,
                                         step
                                     }: { goToNextStep: () => Promise<void>, selectPerson: (selectedPerson: any) => Promise<void>, step: StepMartin | any }) => {
    switch (step) {
        case StepMartin.InitialPassword:
            return <InitialPassword goToNextStep={goToNextStep} setPerson={selectPerson}/>;
        case StepMartin.WelcomeMatrin:
            return <WelcomeMartin goToNextStep={goToNextStep}/>;
        case StepMartin.Puzzle:
            return <Puzzle goToNextStep={goToNextStep}/>;
        case StepMartin.PuzzleDone:
            return <PuzzleDone goToNextStep={goToNextStep}/>;
        case StepMartin.EisBauernhof:
            return <Eisbauernhof goToNextStep={goToNextStep}/>;
        case StepMartin.EisBauernhofDone:
            return <EisbauernhofDone goToNextStep={goToNextStep}/>;
        case StepMartin.Detektiv:
            return <Detektiv goToNextStep={goToNextStep}/>;
        case StepMartin.DetektivDone:
            return <DetektivDone goToNextStep={goToNextStep}/>;
        case StepMartin.Palais:
            return <Palais goToNextStep={goToNextStep}/>;
        case StepMartin.PalaisQuadrate:
            return <PalaisQuadrate goToNextStep={goToNextStep}/>;
        case StepMartin.PalaisDone:
            return <PalaisDone goToNextStep={goToNextStep}/>;
        case StepMartin.Geschenk:
            return <Geschenk goToNextStep={goToNextStep}/>;
        case StepMartin.Geschenk2:
            return <Geschenk2/>;
        default:
            return <Loading/>
    }
};
