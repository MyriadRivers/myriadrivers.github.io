import Sidebar from "../../../components/Sidebar";
import { useEffect, useRef, useState } from "react";
import Expandable from "../../../components/Expandable";
import ProjectTitle from "../../../components/ProjectTitle";
import StyledPage from "../../../components/StyledPage";
import Image from "../../../components/Image";

import mainImage from "./music_accessibility_sketch.png";
import featureMatrixImage from "./feature_matrix.png";
import valenceEnergyImage from "./valence_energy.png";
import systemImage from "./system.png";

function MusicAccessibility() {
    const headings = ["Description", "Motivation", "Design", "System", "Future", "References"];
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
                text={"Multimodal Music Accessibility"}
                subtitle={"Jan–May 2023"}
                links={[]}
                tags={["engineering", "ui/ux"]}
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
                    Despite the development of various technologies meant for helping d/Deaf users experience music [1], many are inaccessible or
                    largely unused due to cost, availability, lack of utility, or misalignment with users' desires.
                </p>
                <p>
                    This project further explores options for DHH music experiences. We initially conducted interviews with users of varying hearing
                    levels ranging from mostly to profoundly deaf, as well as interpreters. Users consistently reported a reliance on tactile
                    vibrations as well as emotional content, often conveyed through interpreters at live events, when enjoying music. This substantiates
                    existing literature on visual and haptic musical feedback for DHH users [2].
                </p>
            </Expandable>
            <Expandable
                heading={"Design"}
                summary={"The goal was an exploratory breadth-first approach providing many different modalities to see what users liked"}
                ref={el => headingRefs.current[2] = el}
            >
                <p>
                    Listening to music is a multidimensional experience where specific lower-level information such as frequencies, durations, and words
                    can generate visceral, emotional, and cognitive changes.
                </p>
                <p>
                    We explored various ways we could translate these different musical features to multimodal parameters.
                    Having users envision an ideal model in the absence of existing comparable systems is difficult; thus,
                    we opted to create multiple different interpretations to allow DHH users to give feedback on the different components of the each modality.
                </p>
                <Image src={featureMatrixImage} caption={`Matrix exploring possible music-visual correlations. 
                Some associations are established in the literature for hearing users.`} />
                <p>
                    In addition to visual and haptic, we also consider capturing the emotive content of music through dance and gesture,
                    specifically through the robotic companion Shimi; robots have been shown to be able to convey emotions through gestures
                    to humans [3].
                </p>
                <p>
                    We based some of our feature mappings on existing literature showing common associations between musical features such as tonality, mood,
                    and visual features such as color [4, 5]. The Spotify Web API provides information on valence and energy of songs, which can approximate
                    a general mood.
                </p>
                <Image src={valenceEnergyImage} caption={`Possible relationships between valence, energy, and multimodal features.`} />
            </Expandable>
            <Expandable
                heading={"System"}
                summary={"An app displays visualizations and lyrics on a user's phone, while also triggering robotic dance in time with the played music"}
                ref={el => headingRefs.current[3] = el}
            >
                <p>
                    When a user selects a song, the mobile app establishes a TCP connection to Shimi and sends a message containing the song and
                    a start message. It also begins the visualization on the phone based on the song.
                </p>
                <Image src={systemImage} caption={`Song selection informs Shimi's dancing and also selects the visualization.`} />
                <p>
                    Every song is associated with a genre and tempo, taken from the Spotify API. Based on the genre,
                    Shimi begins a specific dance loop ranging from a more frantic head bob for rock to a side-to-side shimmy for jazz.
                    The tempo decides how fast Shimi dances, as well as how quickly he taps his foot to the rhythm.
                </p>
                <p>
                    Presently, the songs are stored directly on Shimi for rapid retrieval on app notification. The audio plays through
                    Shimi's head speakers (his "eyes"), while also being low-passed and sent to his bottom mounted haptic motors, which lets
                    the bass frequencies vibrate the table. When the song ends, Shimi stops dancing.
                </p>
                <p>
                    Meanwhile, lyrics and visualizations play on the phone screen. The visualizations are primarily beat-driven
                    animations based on time-invariant song metrics such as loudness, energy, valence, and tempo, derived from the Spotify API. The lyrics,
                    also taken from Spotify, are displayed line-by-line in time with the music.
                </p>
                <p>
                    Two primary visualizations were created. One of these was developed using JavaScript and focused on the movement and color changes of 2D objects
                    and a background; Spotify metrics such as "danceability"—calculated based on metrics such as tempo, rhythm, beat strength, and regularity according to their
                    API—changed parameters such as how jerky the object motion was. The other visualization developed in C# and focused primarily on movement of 3D shapes
                    (i.e. cubes), changing object grouping, number, and orientation based on song information such as time signature and beat demarcation.
                </p>
                <p>
                    In addition to research and ideation, my primary responsibilities involved creating the second visualization and the app, as well
                    as configuring app communication with Shimi, primarily using C# and Unity.
                </p>
            </Expandable>
            <Expandable
                heading={"Future Work"}
                summary={"Future work could involve more visualization options focusing on time-variant features and thorough user testing"}
                ref={el => headingRefs.current[4] = el}
            >
                <p>
                    Our visualizations mainly translated time-invariant features that were constant throughout the entire song. Future work might involve
                    the creation of more robust animation, gestural, and haptic options based on time-variant features such as the current section the song is in,
                    the tracking of specific instrumental lines, and the changing of chords, which would likely require realtime Music Information Retrieval.
                </p>
                <p>
                    Besides additional visualizations, extensive user studies are necessary to evaluate the effectiveness of the different modalities, such as
                    Shimi's gestures in mediating user response to the music.
                </p>
            </Expandable>
            <Expandable
                heading={"References"}
                summary={"Sources referenced"}
                ref={el => headingRefs.current[5] = el}
            >
                <ol className={"references"}>
                    <li>
                        M. D. Fletcher, “Can Haptic Stimulation Enhance Music Perception in Hearing-Impaired Listeners?,” Frontiers in Neuroscience, vol. 15,
                        Aug. 2021, doi: https://doi.org/10.3389/fnins.2021.723877.
                    </li>
                    <li>
                        S. C. Nanayakkara, L. Wyse, S.H. Ong, E. A. Taylor, “Enhancing Musical Experience for the Hearing-Impaired Using Visual and Haptic Displays,”
                        vol. 28, pp. 115–160, 2013, doi: https://doi.org/10.1080/07370024.2012.697006.
                    </li>
                    <li>
                        R. Savery, R. D. Rose, and G. Weinberg, “Establishing Human-Robot Trust through Music-Driven Robotic Emotion Prosody and Gesture,”
                        Oct. 2019, doi: https://doi.org/10.1109/ro-man46459.2019.8956386.
                    </li>
                    <li>
                        D. Jonauskaite, B. Althaus, N. Dael, E. Dan-Glauser, and C. Mohr, “What color do you feel? Color choices are driven by mood,”
                        Color Research & Application, vol. 44, no. 2, pp. 272–284, Dec. 2018, doi: https://doi.org/10.1002/col.22327.
                    </li>
                    <li>
                        G. D. Webster and C. G. Weir, “Emotional Responses to Music: Interactive Effects of Mode, Texture, and Tempo,”
                        Motivation and Emotion, vol. 29, no. 1, pp. 19–39, Mar. 2005, doi: https://doi.org/10.1007/s11031-005-4414-0.
                    </li>
                </ol>
            </Expandable>
            <div className={"bottomSpace"}></div>
        </div>
    </StyledPage>);
}

export default MusicAccessibility;