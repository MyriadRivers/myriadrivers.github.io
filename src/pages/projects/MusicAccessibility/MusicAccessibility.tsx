import styled from "styled-components";
import Sidebar from "../../../components/Sidebar";
import { useEffect, useRef, useState } from "react";
import Expandable from "../../../components/Expandable";
import ProjectTitle from "../../../components/ProjectTitle";
import StyledPage from "../../../components/StyledPage";
import Image from "../../../components/Image";

import mainImage from "./music_accessibility_sketch.png";
import featureMatrixImage from "./feature_matrix.png";
import valenceEnergyImage from "./valence_energy.png";

function MusicAccessibility() {
    const headings = ["Description", "Motivation", "Design", "System", "References"];
    const headingRefs = useRef<Array<HTMLDivElement | null>>([]);
    const contentsRef = useRef<HTMLDivElement | null>(null);

    const [scrollRef, setScrollRef] = useState<HTMLDivElement | null>(null);

    useEffect(() => {
        setScrollRef(contentsRef.current);
    }, [contentsRef.current])

    return (<StyledPage>
        <Sidebar headings={headings} scrollRef={scrollRef} headingRefs={headingRefs.current} />
        <div className={"projectContents"} ref={contentsRef}>
            <ProjectTitle 
                text={"Multimodal Music Accessibility"} 
                subtitle={"Jan–May 2023"} 
                links={[]} 
                ref={el => headingRefs.current[0] = el} 
            >
                <Image src={mainImage} />
                <p>
                    A multimodal accessibility experience meant to explore different ways of helping Deaf and Hard-of-Hearing (DHH) users experience music through
                    visuals, haptics, and affective gestures.
                </p>
                <p>
                    Project headed by Dani Leinwander as part of the Robotic Musicianship Lab, directed by Dr. Gil Weinberg. App and Unity visualizations
                    developed by me.
                </p>
            </ProjectTitle>
            <Expandable 
                heading={"Motivation"} 
                summary={"We sought to contribute to existing literature on DHH musical experiences"} 
                ref={el => headingRefs.current[1] = el} 
            >
                <p>
                    Despite the development of various technologies meant for helping d/Deaf users experience music [1, 2], many are inaccessible or
                    largely unused due to cost, availability, lack of utility, or misalignment with users' desires. 
                </p>
                <p>
                    This project further explores options for DHH music experiences. We initially conducted interviews with users of varying hearing 
                    levels ranging from mostly to profoundly deaf, as well as interpreters. Users consistently reported a reliance on tactile
                    vibrations as well as emotional content, often conveyed through interpreters at live events, when enjoying music. This substantiates
                    existing literature on visual and haptic musical feedback for DHH users [3].  
                </p>
            </Expandable>
            <Expandable
                heading={"Design"} 
                summary={"The goal was an exploratory breadth-first approach providing many different options to see what users liked"} 
                ref={el => headingRefs.current[2] = el} 
            >
                <p>
                    Listening to music is a multidimensional experience where specific lower-level information such as frequencies, durations, and words
                    can generate visceral, emotional, and cognitive changes. 
                </p>
                <p>
                    While there is established research that demonstrates certain affective states being associated with specific visual (e.g., color) [4]
                    or auditory (e.g. tonality) [5] cues, less work has been done regarding the relationships of moods and other modalities. 
                </p>
                <p>
                    In addition to visual and haptic, we also consider capturing the emotive content of music through dance and gesture, 
                    specifically through a robotic companion; robots have been shown to be able to convey emotions through gestures 
                    to humans [6]. 
                </p>
                <Image src={featureMatrixImage} caption={`Matrix exploring possible music-visual correlations. 
                Some associations are established in the literature for hearing users.`}/>
                <p>
                    We explored various ways we could translate different musical features to visual, haptic, and gestural parameters. 
                    Having users envision an ideal model in the absence of existing comparable systems is difficult; thus, 
                    we opted to create multiple different interpretations to allow DHH users to give feedback on the different components of the each modality. 
                </p>
                <Image src={valenceEnergyImage} caption={`Possible relationships between valence, energy, and mood features.`}/>
            </Expandable>
            <div className={"bottomSpace"}></div>
        </div>
    </StyledPage>);
}

export default MusicAccessibility;