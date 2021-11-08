import React, {useState} from "react";
import {IonButton, IonInput, IonToast} from "@ionic/react";


type CenteredButtonProps = { goToNextStep: () => void, buttonText: string};

export const LeftButton: React.FC<CenteredButtonProps> = ({
                                                          goToNextStep,
                                                          buttonText,
                                                      }) => {
    return (
        <div style={{display: 'flex', justifyContent: 'flex-end', padding: '12px'}}>
            <IonButton onClick={goToNextStep}>{buttonText}</IonButton>
        </div>
    );
};
