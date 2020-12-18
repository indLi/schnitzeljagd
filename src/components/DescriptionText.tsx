import React from "react";
import {IonText} from "@ionic/react";

export const DescriptionText: React.FC = (props) => {
    return (
        <IonText color={'fee'} style={{fontStyle: 'italic', textAlign: 'center', marginBottom: '24px'}}>{props.children}</IonText>
    );
};
