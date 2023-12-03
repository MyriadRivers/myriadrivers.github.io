import styled from "styled-components";
import Sidebar from "../../../components/Sidebar";
import { useRef } from "react";
import Expandable from "../../../components/Expandable";
import ProjectTitle from "../../../components/ProjectTitle";
import Image from "../../../components/Image";

import mainImage from "../../../assets/images/spotify_karaoke.png";
import pipelineImage from "./spotify_karaoke_pipeline.png";
import stackImage from "./spotify_karaoke_stack.png";

const StyledPage = styled.div`
    display: flex;
    gap: 20px;
    height: 100%;

    .projectContents {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;

        height: 100%;
        overflow: auto;

        padding-right: 20px;
        scroll-behavior: smooth;
    }
`

function SpotifyKaraoke() {
    const headings = ["Description", "Stack", "Pipeline", "Algorithm"];
    const headingRefs = useRef<Array<HTMLDivElement | null>>([]);
    const contentsRef = useRef<HTMLDivElement | null>(null);

    return (<StyledPage>
        <Sidebar headings={headings} scrollRef={contentsRef.current} headingRefs={headingRefs.current} />
        <div className={"projectContents"} ref={contentsRef}>
            <ProjectTitle 
                text={"Spotify Karaoke"} 
                subtitle={"Aug–Dec 2023"} 
                image={mainImage}
                description={"Spotify Karaoke is a web app that lets you sing along to any song on Spotify with English lyrics."}
                links={[{text: "site", url: "https://aidn.jp/mikutap/"}, {text: "GitHub", url: "https://aidn.jp/mikutap/"}]} 
                ref={el => headingRefs.current[0] = el} 
            />
            <Expandable 
                heading={"Stack"} 
                summary={"The app is separated into three main components: the front end, the API, and the back end"} 
                ref={el => headingRefs.current[1] = el} 
            >
                <p>
                The app is separated into three main components: the front end, the API, and the back end.
                </p>
                <Image src={stackImage} caption={"Web development stack used for the project."} />
                <p>
                    The front end was developed in TypeScript using React.js, using the styled-components library and set up with Create React App. 
                    The front end authenticates with the Spotify Web API, and then lets users search Spotify for songs. Upon selecting a song, data is sent to the backend 
                    via the API in order to begin generation of the karaoke track and synced lyrics.
                </p>
                <p>
                    The back end was developed in Python. After getting a request through the API, the back end 
                    begins generating the vocaless karaoke track and a JSON file containing the word-level time synced lyrics. 
                    It stores the completed files on an Amazon S3 bucket, which also serves as a cache so that a song requested a second time doesn't have to be
                    generated again. The back end's data processing pipeline is explained in more detail in the <b>Pipeline</b> section.
                </p>
                <p>
                    The API was developed in TypeScript using Apollo. 
                    The back end's data processing takes time—such that a front-end request to the API would typically time out before receiving a response.
                    In order to accommodate this, the app uses a GraphQL API which supports long-term subscriptions through the websocket protocol.  
                    When the front end sends a message through the API containing the song data, 
                    it also begins a subscription which listens for a response with the matching song ID. The backend, meanwhile, 
                    is subscribed to song data events. Upon receiving a request, it initiates the processing, 
                    and when completed sends an event containing the karaoke data along with the original song ID to the front end. 
                    The front end subscription verifies the song ID and then displays the generated lyrics and audio track.
                </p>
            </Expandable>
            <Expandable 
                heading={"Pipeline"} 
                summary={"The app retrieves data from the Spotify Web API and YouTube, and use source separation and speech-to-text transcription in order to derive the time synced lyrics"} 
                ref={el => headingRefs.current[2] = el} 
            >
                <Image src={pipelineImage} caption={"Data pipeline for back-end processing."} />
                Expanded problem is expanded. Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah.
            </Expandable>
            <Expandable 
                heading={"Algorithm"} 
                summary={"Summary of algorithm."} 
                ref={el => headingRefs.current[3] = el} 
            >
                Research stuff bleh blah blooh blee bleh blah blooh blee bleh blah blooh blee.
            </Expandable>
        </div>
    </StyledPage>);
}

export default SpotifyKaraoke;