import { Project, Section } from "../../../types";
import Image from "../../../components/Image";

import pipelineImage from "./spotify_karaoke_pipeline.png";
import stackImage from "./spotify_karaoke_stack.png";
import algorithmImage from "./spotify_karaoke_algorithm_table.png";
import gapImage from "./spotify_karaoke_gap_interpolation.png";

import demoVideo from "./spotify_karaoke_demo.mp4";
import Video from "../../../components/Video";
import { ReactNode } from "react";
import Heading from "../../../components/Heading";

const title: string = "Spotify Karaoke";
const dateRange: string = "Aug – Dec 2023";
const subtitles = [
    { title: "Tools", text: "TypeScript, Python, React.js, Docker, AWS" }
]
const summary: string = "Word-level animated karaoke tracks for songs on Spotify";
const links: Array<{ text: string, url: string }> = [
    { text: "demo", url: "https://jasoncgao.com/spotify-karaoke/" },
    { text: "front-end GitHub", url: "https://github.com/MyriadRivers/spotify-karaoke" },
    { text: "back-end GitHub", url: "https://github.com/MyriadRivers/spotify-karaoke-generation" }
];
const media: ReactNode = <Video src={demoVideo} caption="Excuse my singing." mainImage={true} />;
const sections: Array<Section> = [
    {
        shortTitle: "Description",
        title: "Description",
        contents:
            <>
                <p>
                    Spotify Karaoke is a web app that lets you sing along to any song on Spotify with English lyrics.
                </p>
                <p>
                    Due to the costs of keeping the entire stack on the cloud, I had to take the back end and API down.
                    The demo shows off all the front-end functionality with some pregenerated tracks from the back end stored locally.
                </p>
            </>
    },
    {
        shortTitle: "Stack",
        title: "A full-stack app deployed on the cloud",
        summary: "The app is separated into three main components: the front end, the API, and the back end",
        contents:
            <>
                <p>
                    The app is separated into three main components: the front end, the API, and the back end.
                </p>
                <Image src={stackImage} caption={"Web development stack used for the project."} />
                <p>
                    <b>Front End:</b> Developed in TypeScript using React.js. 
                    Authenticates with the Spotify Web API, and then lets users search Spotify for songs.
                </p>
                <p>
                    <b>API:</b> GraphQL API allows for long-term subscriptions from the front end to support the generation time of the karaoke tracks.
                </p>
                <p>
                    <b>Back End:</b> Developed in Python. Generates karaoke tracks and timestamps, and stores files in an AWS S3 bucket.
                </p>
                <p>
                    The app was originally deployed on the cloud through AWS. The front end was hosted using Amplify, the API using AppSync, and the back
                    end Python container using ECS, running on EC2 instances.
                </p>
            </>
    },
    {
        shortTitle: "Pipeline",
        title: "Data pipeline connects Spotify, YouTube, and ML models",
        summary: "The app retrieves data from the Spotify Web API and YouTube, and use source separation and speech-to-text transcription in order to derive the time synced lyrics",
        contents:
            <>
                <p>
                    The app retrieves data from the Spotify Web API and YouTube, and use source separation and speech-to-text transcription in order
                    to derive the time synced lyrics.
                </p>
                <Image src={pipelineImage} caption={"Data pipeline for back-end processing."} />
                <p>
                    When the user selects a song, the front end sends the following data to the back end:
                </p>
                <ul>
                    <li>Song name</li>
                    <li>List of artists</li>
                    <li>Song duration</li>
                    <li>Spotify track ID</li>
                </ul>
                <p>
                    The back end searches YouTube for the "&lt;song name + list of artists&gt;", and downloads the audio of the first result
                    that is within a small margin of the song duration. The track ID is used to retrieve the lyrics of the song from Spotify.
                </p>
                <p>
                    The YouTube audio is then split into a vocal and an accompaniment track using the Spleeter source-separation library.
                    The vocal track is transcribed using the WhisperX automatic speech recognition model.
                </p>
                <p>
                    The WhisperX transcription is not 100% accurate, but it does provide word-level timestamps. This rough transcription is combined with
                    the lyrics retrieved from Spotify, which are much more accurate but only have line-level timestamps. The accurate lyrics from Spotify are
                    aligned with the word-level timestamps from WhisperX to provide the completed synced karaoke lyrics, using a dynamic programming approach
                    described in the <b>Algorithm</b> section.
                </p>
                <p>
                    The back end then uploads the accompaniment track to S3, and returns the karaoke lyrics and a URL to the accompaniment
                    back to the front end to be displayed to the user.
                </p>
            </>
    },
    {
        shortTitle: "Algorithm",
        title: "Algorithm matches words and timestamps using dynamic programming",
        summary: "The word-level synchronized lyrics are generated using a dynamic programming approach",
        contents:
            <>
                <p>
                    After the data transformation phase that filters out polyphonic lines and symbols, the word-level synchronized lyrics are
                    generated using a dynamic programming approach similar to finding the <b>longest common subsequence</b> between two strings,
                    with alterations to prioritize matching words that are close together.
                </p>
                <Image src={algorithmImage} caption={"Table visualizing the dynamic programming algorithm."} />
                <p>
                    After the alignment algorithm, there are usually still some Spotify lyrics left
                    that have not been matched to any WhisperX timestamps.
                </p>
                <p>
                    The WhisperX transcription is divided into lines, with the start of a line being the closest matching word-level time stamp to
                    Spotify's provided line-level timestamps. After the alignment algorithm, if the first words of both the Spotify and WhisperX lines
                    are still unmatched, then they are matched to each other.
                </p>
                <p>
                    The rest of lyrics are matched via syllable interpolation in the gaps.
                </p>
                <Image src={gapImage} caption={"Gaps between matched lyrics are filled in heuristically."} />
            </>
    }
]

const SpotifyKaraoke: Project = {
    title: title,
    dateRange: dateRange,
    subtitles: subtitles,
    summary: summary,
    links: links,
    media: media,
    sections: sections
}

export default SpotifyKaraoke;

