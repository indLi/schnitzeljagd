import {InitialPassword} from "../tarek/00_InitialPassword";
import {Loading} from "../evi/Loading";
import React from "react";
import {IonCard, IonCardContent} from "@ionic/react";
import {LeftButton} from "../../components/LeftButton";
import {CurrentDistance} from "../../components/CurrentDistance";
import {FriedenskircheFakten} from "./FriedenskircheFakten";
import {CheckPosition} from "../../components/CheckPosition";
import {LuitpoldparkFakten} from "./LuitpoldparkFakten";
import {CheckInput} from "../../components/CheckInput";

export enum StepJana {
    InitialPassword,
    WelcomeJana,
    ZurFriedenskirche,
    ZurFriedenskircheFakten,
    Labyrinth,
    LabyrinthGedicht,
    LuitpoldparkFakten,
    LuitpoldparkHügel,
}

export const backgroundCardColorJana = '#ececec';

export const getCurrentStepJana = ({
                                       goToNextStep,
                                       selectPerson,
                                       step
                                   }: { goToNextStep: () => Promise<void>, selectPerson: (selectedPerson: any) => Promise<void>, step: StepJana | any }) => {
    if (step === StepJana.InitialPassword) {
        return <InitialPassword goToNextStep={goToNextStep} setPerson={selectPerson}/>;
    } else {
        return <IonCard style={{backgroundColor: backgroundCardColorJana, fontSize: '16px'}}>
            {getCardContentJana({goToNextStep, selectPerson, step})}
        </IonCard>
    }
};

export const getCardContentJana = ({
                                       goToNextStep,
                                       selectPerson,
                                       step
                                   }: { goToNextStep: () => Promise<void>, selectPerson: (selectedPerson: any) => Promise<void>, step: StepJana | any }) => {
    switch (step) {
        case StepJana.InitialPassword:
            return <InitialPassword goToNextStep={goToNextStep} setPerson={selectPerson}/>;
        case StepJana.WelcomeJana:
            return <IonCardContent>
                <div>
                    Hallo Jana, <br/> <br/>
                    du wohnst zwar schon lange in München, aber vielleicht kennst du noch nicht alle Ecken. <br/>
                    Deshalb haben wir dir eine kleine Schnitzejagd vorbereitet, um München noch besser kennen zu lernen. <br/><br/>
                    Du kannst sie jederzeit unterbrechen und musst auch nicht alles am Stück machen. Ich würde ein Fahrrad empfehlen um herum zu kommen und natürlich darfst du dir auch Begleitung und Hilfe zum lösen der Rätsel holen. <br/> <br/>
                    Und nun noch ein paar technische Hinweise: Ich verwende deinen Standort, aber keine Angst, also ich verwende ihn nicht wirklich, aber dein Handy. Manchmal, wenn man in der Schnitzeljagd versucht, oft den Standort abzufragen, aktualisiert dieser nicht mehr. Ein kleiner Trick um sicher zu gehen, dass der richtige Standort verwendet wird: Öffne google maps oder ähnliches, warte bis dein Standort dort richtig angezeigt wird, dann kannst du auch sicher sein, dass dein Standort in der Schnitzeljagd richtig ist. <br/><br/>
                    Bei anderen Problemen, zögere nicht den Support zu kontaktieren ;)
                    <br/><br/>
                    Also viel Spaß und los geht's
                </div>
                <LeftButton goToNextStep={goToNextStep} buttonText={'Ich bin bereit!'}/>
            </IonCardContent>
        case StepJana.ZurFriedenskirche:
            return <IonCardContent>
                <br/>
                <CurrentDistance arrived={() => goToNextStep()} latitude={48.167223} longitude={11.548381}
                                 successMessage={'Juhuuu angekommen!!!'}/>
            </IonCardContent>
        case StepJana.ZurFriedenskircheFakten:
            return <IonCardContent>
                <FriedenskircheFakten goToNextStep={goToNextStep}/>
            </IonCardContent>
        case StepJana.Labyrinth:
            return <IonCardContent>
                Weiter geht es Richtung Osten, bis du den nächsten Park erreichst. Finde dort das Labyrinth!
                <CheckPosition latitude={48.171595} longitude={11.568444} arrived={() => goToNextStep()} accuracy={200}
                               getErrorMessage={getDistanceErrorMessage}/>
            </IonCardContent>
        case StepJana.LabyrinthGedicht:
            return <IonCardContent>
                Fakten habe ich leider keine zu diesem Labyrinth gefunden. Dafür aber ein Gedicht aus der Kategorie 'Gedichte zum
                Nachdenken' von Picolo: <br/><br/>
                <div style={{fontStyle: 'italic'}}>
                    Das Labyrinth<br/><br/>

                    Auf heißen Sohlen laufen Seelen,<br/>
                    durch des Lebens Labyrinth,<br/>
                    mit stummen Blicken sie erzählen,<br/>
                    wie fern sie der Erfüllung sind.<br/><br/>

                    Und sie hasten suchend weiter,<br/>
                    kalte Hoffnung treibet sie,<br/>
                    doch ihr Labyrinth wird breiter,<br/>
                    und den Ausgang sehn sie nie.<br/> <br/>
                </div>
                <LeftButton goToNextStep={goToNextStep} buttonText={'Genug nachgedacht'}/>
            </IonCardContent>
        case StepJana.LuitpoldparkFakten:
            return <IonCardContent>
                <LuitpoldparkFakten/>
                <LeftButton goToNextStep={goToNextStep} buttonText={'Hä, welcher Hinweis?'}/>
            </IonCardContent>
        case StepJana.LuitpoldparkHügel:
            return <IonCardContent>
                Oben auf dem Hügel findest du ein Bronzekreuz. Was steht auf dem Kreuz? <br/><br/>
                <div style={{fontStyle: 'italic'}}>Betet und gedenkt all <b style={{
                    backgroundColor: 'green',
                    color: 'green',
                    borderRadius: '4px'
                }}>..............</b> den Bergen von Trümmern Verstorbenen
                </div>
                <CheckInput correctValues={['der unter']} placeholder={'wem soll man gedenken?'} onSuccess={() => goToNextStep()}/>
            </IonCardContent>
        default:
            return <Loading/>
    }
};

const getDistanceErrorMessage = (distance: number, accuracy: number) => {
    if (distance < accuracy + 25) {
        return 'heiß'
    } else if
    (
        distance < accuracy + 100) {
        return 'warm'
    } else if
    (
        distance < accuracy + 300) {
        return 'lauwarm'
    } else if
    (
        distance < accuracy + 500) {
        return 'geschmolzen ist es schon'
    } else if
    (
        distance < accuracy + 800) {
        return 'es taut'
    } else if
    (
        distance < accuracy + 1000) {
        return 'kalt'
    } else {
        return 'Eisig kalt'
    }
}
