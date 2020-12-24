import React from "react";
import {IonSpinner, IonText} from "@ionic/react";

export const Loading: React.FC = () => {
    return (
        <div style={{height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <IonSpinner color={'secondary'} name={'circles'}/>
            <IonText color={'secondary'} style={{marginLeft: '12px'}}>Gleich geht's los</IonText>
        </div>
    );
};
