import Sidebar from "../../../components/Sidebar";
import { useEffect, useRef, useState } from "react";
import Expandable from "../../../components/Expandable";
import ProjectTitle from "../../../components/ProjectTitle";
import Image from "../../../components/Image";
import StyledPage from "../../../components/StyledPage";
import Video from "../../../components/Video";

import architectureImage from "./architecture.png";
import embryoVideo from "./embryo_sonified.mp4";
import bugVideo from "./soldier_bug_sonified.mp4";
import fractalVideo from "./julia_set_sonified.mp4";
import MediaGrid from "../../../components/MediaGrid";

import demoVideo from "./video_sonification_demo.mp4";

function VideoSonification() {
    const headings = ["Description", "Stack", "Examples"];
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
                text={"Video Sonification"}
                subtitle={"Aug–Oct 2023"}
                links={[{ text: "site", url: "https://main.d2s6y4nzwyqtzd.amplifyapp.com/" }, { text: "front-end GitHub", url: "https://github.com/MyriadRivers/aivf" }]}
                tags={["webdev"]}
                ref={el => headingRefs.current[0] = el}
            >
                <Video src={demoVideo} />
                <p>
                    Users upload videos and the system generates accompaniment, transforming them into music videos. App deployment by me, music generation by Richard Savery.
                </p>
                <p>
                    At the request of the client, the site was authorized only to a set of initial testers.
                </p>
            </ProjectTitle>
            <Expandable
                heading={"Stack"}
                summary={"The app is separated into three main components: the front end, the API, and the back end"}
                ref={el => headingRefs.current[1] = el}
            >
                <p>
                    The app is hosted on the cloud through AWS and is separated into three main components: the front end, the API, and the back end.
                </p>
                <Image src={architectureImage} caption={"Web development stack used for the project."} />
                <p>
                    <b>Front End:</b> Developed in TypeScript using React.js, using the styled-components library and set up with Create React App,
                    hosted on Amplify. Users authenticate with AWS Cognito, which lets them upload videos on their own private accounts to an S3 bucket.
                    Previous videos uploaded can then be accessed via a user library.
                </p>
                <p>
                    <b>API:</b> The back end audio generation takes a nontrivial amount of time. In order to accommodate this, the app uses a GraphQL API
                    backed by the websockets protocol which allows for long-term subscriptions. The back end is subscribed to "request video" events.
                    When a user uploads a video, the front end sends one of these events and also subscribes to a "return video" event with their specific user ID.
                    When the back end gets an event which contains the video URL and the requesting user, it begins generation of the music video. When it finishes,
                    it sends an event containing the new URL along with the original user ID, which the front end uses to display the finished video. The API is
                    deployed on AppSync.
                </p>
                <p>
                    <b>Back End:</b> Developed in Python, deployed as a docker container using ECS on EC2 cloud compute instances. After getting a request through the API, the back end
                    begins generating the music to accompany the video, using Google's MediaPipe computer vision models along with a rule-based system for detecting and converting
                    salient parts of the video. The music generation system was developed by Richard Savery.
                </p>
            </Expandable>
            <Expandable
                heading={"Examples"}
                summary={"The app was originally developed to sonify footage of embryo development, but can sonify any video"}
                ref={el => headingRefs.current[2] = el}
            >
                <p>
                    The app was originally developed to sonify footage of embryo development, but can sonify any video.
                    However, the app restricts video duration on uploads, as longer videos take longer to process.
                </p>
                <MediaGrid>
                    <Video src={embryoVideo} caption="Embryo, source: @ivflondon6502, YouTube" />
                    <Video src={bugVideo} caption="Stink Bug, source: Me" />
                    <Video src={fractalVideo} caption="Julia Set Fractal, source: Me" />
                </MediaGrid>
            </Expandable>
            <div className={"bottomSpace"}></div>
        </div>
    </StyledPage>);
}

export default VideoSonification;