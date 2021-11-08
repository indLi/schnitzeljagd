import React from "react";
import {IonCard, IonCardContent} from "@ionic/react";
import {backgroundCardColorMartin} from "./commonSteps";
import {LeftButton} from "../../components/LeftButton";

export const Geschenk2: React.FC<{}> = () => {
    return (
        <>
            <IonCard style={{backgroundColor: backgroundCardColorMartin}}>
                <IonCardContent>
                    Ok, Spaß.. Hier nun dein Geschenk: <br/><br/>
                    Ca. 100m östlich an der großen Straße (Friedrich-Ebert-Straße) findest du das Restaurant Gusto Travo Calda. <br/><br/>
                    Such dir eine <b style={{fontSize:'60px'}}>Pizza</b> aus und iss sie entweder sofort, wenn du sehr hungrig bist, oder nimm sie mit und genieße sie neben "Die Winzlinge - Abenteuer in der Karibik"<br/><br/>
                    Du müsstest in Vorleistung gehen, aber die Rechnung geht dann natürlich an monkeybusiness24@web.de, der Betrag wird dir dann Rückerstattet.


                </IonCardContent>
            </IonCard>
        </>
    );
};
