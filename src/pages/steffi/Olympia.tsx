import React from "react";
import {IonCard, IonCardContent} from "@ionic/react";
import {StepProps} from "./commonSteps";
import {CheckInput} from "../../components/CheckInput";
import {CheckPosition} from "../../components/CheckPosition";

export const Olympia: React.FC<StepProps> = ({goToNextStep}) => {
    return (
        <>
            <IonCard style={{backgroundColor: '#fff5d7'}}>
                <IonCardContent>
                    nikimm dekeikineken likiekebsteken mikit ukund bekestekeikigeke deken bekerg akan dekem dikieke bekesteken deker wekeld
                    wekettkäkämpfeke akaukusgeketrakageken hakabeken. Ekes ikist schokon lakangeke heker, dakass sikieke hikieker gekekäkämpft hakabeken. Zukuleketzt wakareken sikieke ikim fekerneken Jakapakan.
                    <br/><br/>
                    <p style={{fontStyle: 'italic'}}>
                        bikitteke bekeakachteke akaukuf grukund tekechnikischeker gekegekebekenhekeikiteken kakann ekes sekeikin, dakass
                        dekeikin hakandyky dekeikineken stakandokort nikicht rikichtikig akaktukuakalikisikiekert. zukur sikichekerhekeikit
                        kakannst duku gokookogleke makaps ököffneken, wakarteken bikis dekeikin stakandokort rikichtikig ikist ukund
                        hikieker wekeikiteker makacheken.
                    </p>
                </IonCardContent>
            </IonCard>
            <CheckPosition latitude={48.1698990} longitude={11.5515956} accuracy={100} arrived={() => goToNextStep()} buttonText={'daka?'}
                           getErrorMessage={getDistanceErrorMessage}/>
        </>
    );
};

const getDistanceErrorMessage = (distance: number, accuracy: number) => {
    if (distance < accuracy + 25) {
        return 'heiß'
    } else if (distance < accuracy + 100) {
        return 'warm'
    } else if (distance < accuracy + 300) {
        return 'lauwarm'
    } else if (distance < accuracy + 500) {
        return 'geschmolzen ist es schon'
    } else if (distance < accuracy + 800) {
        return 'es taut'
    } else if (distance < accuracy + 1000) {
        return 'kalt'
    } else {
        return 'Eisig kalt'
    }
}
