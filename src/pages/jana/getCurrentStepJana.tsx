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
    LuitpoldparkHuegel,
    Herrgottseck,
    Buecherschrank,
    BuecherschrankLoesungswort,
    Navigation,
    Navigation2,
    Peter,
    PeterAnleitung,
    PeterOben,
    PeterUnten,
    PeterDanach,
    Ende,
}

export const backgroundCardColorJana = '#ececec';

export const getCurrentStepJana = ({
                                       goToNextStep,
                                       goToStep,
                                       selectPerson,
                                       step
                                   }: { goToNextStep: () => Promise<void>, goToStep: (desiredStep: string) => Promise<void>, selectPerson: (selectedPerson: any) => Promise<void>, step: StepJana | any }) => {
    if (step === StepJana.InitialPassword) {
        return <InitialPassword goToNextStep={goToNextStep} setPerson={selectPerson}/>;
    } else {
        return <IonCard style={{backgroundColor: backgroundCardColorJana, fontSize: '16px'}}>
            {getCardContentJana({goToNextStep, goToStep, selectPerson, step})}
        </IonCard>
    }
};

export const getCardContentJana = ({
                                       goToNextStep,
                                       goToStep,
                                       selectPerson,
                                       step
                                   }: { goToNextStep: () => Promise<void>, goToStep: (desiredStep: string) => Promise<void>, selectPerson: (selectedPerson: any) => Promise<void>, step: StepJana | any }) => {
    switch (step) {
        case StepJana.InitialPassword:
            return <InitialPassword goToNextStep={goToNextStep} setPerson={selectPerson}/>;
        case StepJana.WelcomeJana:
            return <IonCardContent>
                <div>
                    Hallo Jana, <br/> <br/>
                    du wohnst zwar schon lange in München, aber vielleicht kennst du noch nicht alle Ecken. <br/>
                    Deshalb haben wir dir eine kleine Schnitzejagd vorbereitet, um München noch besser kennen zu lernen. <br/><br/>
                    Du kannst sie jederzeit unterbrechen und musst auch nicht alles am Stück machen. Ich würde ein Fahrrad empfehlen um
                    herum zu kommen und natürlich darfst du dir auch Begleitung und Hilfe zum lösen der Rätsel holen. <br/> <br/>
                    Und nun noch ein paar technische Hinweise: Ich verwende deinen Standort, aber keine Angst, ich verwende ihn nicht
                    wirklich, aber dein Handy. Manchmal, wenn man in der Schnitzeljagd versucht, oft den Standort abzufragen, aktualisiert
                    dieser nicht mehr. Ein kleiner Trick um sicher zu gehen, dass der richtige Standort verwendet wird: Öffne google maps
                    oder ähnliches, warte bis dein Standort dort richtig angezeigt wird, dann kannst du auch sicher sein, dass dein Standort
                    in der Schnitzeljagd richtig ist. <br/><br/>
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
                Fakten habe ich leider keine zu diesem Labyrinth gefunden. Dafür wünsche ich aber viel Spaß beim verlaufen :)
                <LeftButton goToNextStep={goToNextStep} buttonText={'Weiter'}/>
            </IonCardContent>
        case StepJana.LuitpoldparkFakten:
            return <IonCardContent>
                <LuitpoldparkFakten/>
                <LeftButton goToNextStep={goToNextStep} buttonText={'Hä, welcher Hinweis?'}/>
            </IonCardContent>
        case StepJana.LuitpoldparkHuegel:
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
        case StepJana.Herrgottseck:
            return <IonCardContent>
                Gehe zur Hausnummer 2 zur Straße die das Gegenteil von Frauteufelskreis ist. Wenn du dort bist, biege in die weiche Straße
                ein und finde das kleine Haus aus Holz.
                <CheckPosition latitude={48.127261} longitude={11.5848029} arrived={() => goToNextStep()}
                               getErrorMessage={getDistanceErrorMessage}/>
            </IonCardContent>
        case StepJana.Buecherschrank:
            return <IonCardContent>
                <p style={{fontSize: '20px'}}>Super, angekommen!</p> <br/>
                Hast du das Haus aus Holz schon entdeckt? Es ist ein Bücherschrank. <br/>
                Hier kannst du dir gleich ein Buch aussuchen, falls du was zu lesen suchst. <br/><br/>
                Wusstest du, dass es in München über 30 Bücherschränke gibt? <br/>
                <LeftButton goToNextStep={goToNextStep} buttonText={'Wahnsinn'}/>
            </IonCardContent>
        case StepJana.BuecherschrankLoesungswort:
            return <IonCardContent>
                Du darfst nun Umschlag Nr. 2 öffnen. <br/>
                <CheckInput correctValues={['schleiereule']} placeholder={'Lösungswort'} onSuccess={() => goToNextStep()}/>
            </IonCardContent>
        case StepJana.Navigation:
            return <IonCardContent>
                Du stehst gerade vor dem Bücherschrank. <br/><br/>
                Gehe nach Süden bis zum Ende der Straße. <br/><br/>
                Jetzt rechts und gleich wieder links, bis zur großen Straße. <br/><br/>
                Gehe rechts bis zum Kreisel <br/><br/>
                Nimm die 2. Ausfahrt. <br/><br/>
                Gehe bis zum Ende der Straße. <br/><br/>
                <LeftButton goToNextStep={goToNextStep} buttonText={'Ok, kann weiter gehen'}/>
            </IonCardContent>
        case StepJana.Navigation2:
            return <IonCardContent>
                Such dir einen Weg durch den Markt bis du auf der anderen Seite vor dem Café Rischart stehst.<br/><br/>
                Gehe links am Café vorbei und links an der Kirche entlang.<br/><br/>
                Bleibe neben dem Kirchturm stehen. <br/>
                <LeftButton goToNextStep={goToNextStep} buttonText={'Ok, bin da'}/>
            </IonCardContent>
        case StepJana.Peter:
            return <IonCardContent>
                Öffne den Umschlag Nr. 3!
                <LeftButton goToNextStep={goToNextStep} buttonText={'Weiter'}/>
            </IonCardContent>
        case StepJana.PeterAnleitung:
            return <IonCardContent>
                Woooooww, so viel Geld. Was kann man denn damit alles machen? <br/><br/>
                Zum Beispiel kannst du damit auf den Alten Peter gehen. <br/><br/>
                <LeftButton goToNextStep={() => goToStep(StepJana.PeterOben.toString())} buttonText={'ja cool, das mach ich'}/>
                <LeftButton goToNextStep={() => goToStep(StepJana.PeterUnten.toString())} buttonText={'ne, keinen Bock auf Treppen'}/>
            </IonCardContent>
        case StepJana.PeterOben:
            return <IonCardContent>
                Krasse Aussicht oder? Die Treppen haben sich gelohnt.
                <LeftButton goToNextStep={() => goToStep(StepJana.PeterDanach.toString())} buttonText={'Bin wieder unten'}/>
            </IonCardContent>
        case StepJana.PeterUnten:
            return <IonCardContent>
                Ok auch kein Problem, du hast dir trotzdem was verdient. <br/><br/>
                Und das gute ist, du hast jetzt noch doppelt so viel Geld, wie wenn du erst auf den Turm gegangen wärst. ;)
                <LeftButton goToNextStep={() => goToStep(StepJana.PeterDanach.toString())} buttonText={'Geilo'}/>
            </IonCardContent>
        case StepJana.PeterDanach:
            return <IonCardContent>
                So, du hast dir jetzt auf jeden Fall was leckeres verdient. <br/><br/>
                Unser Tipp wäre zum Beispiel eine Schmalznudel beim Café Frischhut (gegenüber der Schrannenhalle). Das Café gibt es schon
                seit fast 50 Jahren (1973).<br/><br/>
                Du kannst dir natürlich aber auch irgendwas anderes leckeres auf dem Viktualienmarkt holen! :)<br/><br/>
                Und damit bist du jetzt auch schon am Ende dieser kleinen München-Tour angekommen. Wir hoffen es hat dir gefallen und du
                hast vielleicht ein paar Sachen entdeckt, die du noch nicht kanntest.<br/><br/>
                Jetzt lass es dir aber erstmal schmecken!

                <LeftButton goToNextStep={goToNextStep} buttonText={'Lecker war\'s'}/>
            </IonCardContent>
        case StepJana.Ende:
            return <IonCardContent>
                <p style={{fontSize: '35px', textAlign: 'center', margin: '24px 0'}}>Ende!</p>
                <LeftButton goToNextStep={() => goToStep(StepJana.InitialPassword.toString())} buttonText={'Zurück zum Anfang'}/>
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
