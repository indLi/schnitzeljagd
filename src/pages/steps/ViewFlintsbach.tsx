import React from "react";
import {StepProps} from "./commonSteps";
import {CheckPosition} from "../../components/CheckPosition";


export const ViewFlintsbach: React.FC<StepProps> = ({goToNextStep}) => {
    return (
        <>
            <CheckPosition latitude={28.12312} longitude={7.1237182} arrived={() => console.log('arrived')}/>
        </>
    );
};
