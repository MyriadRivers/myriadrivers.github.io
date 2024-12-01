import { Project, ProjectTag, Section } from "../../../types";

import Image from "../../../components/Image";
import Video from "../../../components/Video";

import architectureImage from "./architecture.png";
import embryoVideo from "./embryo_sonified.mp4";
import bugVideo from "./soldier_bug_sonified.mp4";
import fractalVideo from "./julia_set_sonified.mp4";
import MediaGrid from "../../../components/MediaGrid";

import demoVideo from "./video_sonification_demo.mp4";
import { ReactNode } from "react";

const title: string = "Video Sonification";
const dateRange: string = "Aug–Sep 2023";
const summary: string = "Summary";
const links: Array<{ text: string, url: string }> = [
    { text: "front-end GitHub", url: "https://github.com/MyriadRivers/aivf" }
];
const tags: Array<ProjectTag> = [
    ProjectTag.engineering
];
const media: ReactNode = <Video src={demoVideo} mainImage={true}/>;
const sections: Array<Section> = [
    {
        shortTitle: "Description",
        title: "Description",
        contents:
            <>
                <p>
                    Users upload videos and the system generates accompaniment, transforming them into music videos. App deployment by me, music generation by Richard Savery.
                </p>
                <p>
                    At the request of the client, the site was authorized only to a set of initial testers.
                </p>
            </>
    },
    {
        shortTitle: "Stack",
        title: "Stack",
        summary: "The app is separated into three main components: the front end, the API, and the back end",
        contents:
            <>
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
            </>
    },
    {
        shortTitle: "Examples",
        title: "Examples",
        summary: "The app was originally developed to sonify footage of embryo development, but can sonify any video",
        contents:
            <>
                <p>
                    The app was originally developed to sonify footage of embryo development, but can sonify any video.
                    However, the app restricts video duration on uploads, as longer videos take longer to process.
                </p>
                <MediaGrid>
                    <Video src={embryoVideo} caption="Embryo, source: @ivflondon6502, YouTube" />
                    <Video src={bugVideo} caption="Stink Bug, source: Me" />
                    <Video src={fractalVideo} caption="Julia Set Fractal, source: Me" />
                </MediaGrid>
            </>
    }
]

const VideoSonification: Project = {
    title: title,
    dateRange: dateRange,
    summary: summary,
    links: links,
    tags: tags,
    media: media,
    sections: sections
}

export default VideoSonification;

