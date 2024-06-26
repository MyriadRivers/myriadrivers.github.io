import Sidebar from "../../../components/Sidebar";
import { useEffect, useRef, useState } from "react";
import Expandable from "../../../components/Expandable";
import ProjectTitle from "../../../components/ProjectTitle";
import StyledPage from "../../../components/StyledPage";
import Image from "../../../components/Image";
import SoundCloudSmall from "../../../components/SoundCloudSmall";

import maxImage from "./max_patch.png";
import arduinoImage from "./arduino.png";
import VoicemailCanvas from "../../../components/VoicemailCanvas";

function Voicemail() {
    const headings = ["Description", "Design", "Art"];
    const headingRefs = useRef<Array<HTMLDivElement | null>>([]);
    const contentsRef = useRef<HTMLDivElement | null>(null);

    const [scrollRef, setScrollRef] = useState<HTMLDivElement | null>(null);

    useEffect(() => {
        setScrollRef(contentsRef.current);
    }, [])

    return (<StyledPage>
        <Sidebar headings={headings} scrollRef={scrollRef} headingRefs={headingRefs.current} />
        <div className={"projectContents"} ref={contentsRef}>
            <ProjectTitle
                text={"Voicemail"}
                subtitle={"March 2022"}
                links={[]}
                tags={["fun"]}
                ref={el => headingRefs.current[0] = el}
            >
                <SoundCloudSmall
                    artist={"Jason Gao"}
                    track={"Voicemail"}
                    artistURL={"https://soundcloud.com/myriadrivers-558554438"}
                    trackURL={"https://soundcloud.com/myriadrivers-558554438/voicemail?si=819715ce8d3d46ffa1ac10c1e0c78f4d&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"}
                    trackID={"1694478468"}
                />
                <p>
                    A composition featuring various cellphone sounds, performed using a controller built with an Arduino.
                </p>
            </ProjectTitle>
            <Expandable
                heading={"Design"}
                summary={"The composition was performed using Ableton Live and an Arduino controller"}
                ref={el => headingRefs.current[1] = el}
            >
                <p>
                    A custom controller was built using an Arduino, an ultrasonic sensor, and a slide potentiometer.
                    Gliding a finger along the potentiometer and altering the distance of an object to the ultrasonic sensor would trigger different
                    samples in different groupings using Ableton's Session View.
                </p>
                <Image src={arduinoImage} caption={`The controller made from an Arduino.`} />
                <p>
                    The signals from the Arduino were then routed through a custom Max for Live patch to control which Ableton events to trigger,
                    allowing for a live performance of the composition.
                </p>
                <Image src={maxImage} caption={`The Max MSP patch that controls Ableton.`} />
                <p>
                    The samples of the composition are all sounds generated by a cellphone, with effects and processing applied in Ableton.
                </p>
            </Expandable>
            <Expandable
                heading={"Art"}
                summary={"The art for the track was generated randomly on an HTML Canvas with TypeScript"}
                ref={el => headingRefs.current[2] = el}
            >
                <p>
                    The track art consists of a bunch of randomly generated phone numbers. You can make your own below!
                </p>
                <VoicemailCanvas />
            </Expandable>
            <div className={"bottomSpace"}></div>
        </div>
    </StyledPage>);
}

export default Voicemail;