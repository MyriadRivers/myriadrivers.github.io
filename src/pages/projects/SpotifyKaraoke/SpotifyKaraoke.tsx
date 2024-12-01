import { Project, ProjectTag, Section } from "../../../types";
import Image from "../../../components/Image";

import pipelineImage from "./spotify_karaoke_pipeline.png";
import stackImage from "./spotify_karaoke_stack.png";
import algorithmImage from "./spotify_karaoke_algorithm_table.png";
import gapImage from "./spotify_karaoke_gap_interpolation.png";

import demoVideo from "./spotify_karaoke_demo.mp4";
import Video from "../../../components/Video";
import { ReactNode } from "react";

const title: string = "Spotify Karaoke";
const dateRange: string = "Aug–Dec 2023";
const summary: string = "Get word-level animated karaoke tracks from songs on Spotify.";
const links: Array<{ text: string, url: string }> = [
    { text: "demo", url: "https://jasoncgao.com/spotify-karaoke/" },
    { text: "front-end GitHub", url: "https://github.com/MyriadRivers/spotify-karaoke" },
    { text: "back-end GitHub", url: "https://github.com/MyriadRivers/spotify-karaoke-generation" }
];
const tags: Array<ProjectTag> = [
    ProjectTag.engineering
];
const media: ReactNode = <Video src={demoVideo} caption="Excuse my singing." mainImage={true}/>;
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
        title: "Stack",
        summary: "The app is separated into three main components: the front end, the API, and the back end",
        contents:
            <>
                <p>
                    The app is separated into three main components: the front end, the API, and the back end.
                </p>
                <Image src={stackImage} caption={"Web development stack used for the project."} />
                <p>
                    <b>Front End:</b> Developed in TypeScript using React.js, using the styled-components library and set up with Create React App.
                    Authenticates with the Spotify Web API, and then lets users search Spotify for songs. Upon selecting a song, data is sent to the backend
                    via the API in order to begin generation of the karaoke track and synced lyrics.
                </p>
                <p>
                    <b>API:</b> The back end's data processing takes time—such that a front-end request to the API would typically time out before receiving a response.
                    In order to accommodate this, the app uses a GraphQL API which supports long-term subscriptions through the websocket protocol.
                    When the front end sends a message through the API containing the song data,
                    it also begins a subscription which listens for a response with the matching song ID. The backend, meanwhile,
                    is subscribed to song data events. Upon receiving a request, it initiates the processing,
                    and when completed sends an event containing the karaoke data along with the original song ID to the front end.
                    The front end subscription verifies the song ID and then displays the generated lyrics and audio track.
                </p>
                <p>
                    <b>Back End:</b> Developed in Python. After getting a request through the API, the back end
                    begins generating the instrumental karaoke track and a JSON file containing the word-level time synced lyrics.
                    It stores the completed files on an Amazon S3 bucket, which also serves as a cache so that a song requested a second time doesn't have to be
                    generated again. The back end's data processing pipeline is explained in more detail in the <b>Pipeline</b> section.
                </p>
                <p>
                    The app was originally deployed on the cloud through AWS. The front end was hosted using Amplify, the API using AppSync, and the back
                    end Python container using ECS, running on EC2 instances.
                </p>
            </>
    },
    {
        shortTitle: "Pipeline",
        title: "Pipeline",
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
        title: "Algorithm",
        summary: "The word-level synchronized lyrics are generated using a dynamic programming approach",
        contents:
            <>
                <p>
                    After the data transformation phase that filters out polyphonic lines and symbols, the word-level synchronized lyrics are
                    generated using a dynamic programming approach similar to finding the longest common subsequence between two strings,
                    with alterations to prioritize matching words that are close together.
                </p>
                <h3>Initial Alignment</h3>
                <p>
                    <i>S</i> represents the list of Spotify words.
                    <br />
                    <i>W</i> represents the list of WhisperX words.
                    <br />
                    <br />
                    We construct a 2D array <i>A</i> of dimensions <i>S.length + 1</i> × <i>W.length + 1</i>.
                    <br />
                    <br />
                    Every index <i>[i, j]</i> in the array stores the max number of matched words possible between
                    the substring of <i>S</i> of length <i>i</i> and the substring of <i>W</i> of length <i>j</i>,
                    as well as the syllable indices within <i>S</i> and <i>W</i> of the match. The syllable indices are important in case there are
                    multiple matches of the same words, in which case we choose the match in which <i>S[i]</i> and <i>W[j]</i> are closest in syllable
                    index proximity. The array is populated based on whether <i>S[i]</i> and <i>W[j]</i> match:
                </p>
                <ul>
                    <li>
                        <b>Match:</b> <i>A[i, j] = A[i - 1, j - 1] + 1</i>
                        <br />
                        Since the current index is a match, the total matches needs to be 1 higher than
                        when both of the substrings were one word shorter (before the addition of the current index).
                        <br />
                        <br />
                        The syllable indices stored are based on whether <i>A[i - 1, j]</i> or <i>A[i, j - 1]</i> has the same number of total matches
                        as <i>A[i, j]</i>:
                        <ul>
                            <br />
                            <li>
                                <b>Current index's matches = a previous index's matches: </b>
                                We compare the current and previous indices that have the same number of matches and save the syllable indices where
                                <i> i</i> is closest to <i>j</i>. This means that in a case where we have the same number of matches, we always prefer
                                to match words that are as close to the same position in the Spotify lyrics and WhisperX transcription as possible.
                                If the 2nd word of Spotify matches to both the 3rd and 8th word of WhisperX, we choose to match to the 3rd as they are closer
                                temporally and thus it is more likely that the WhisperX transcription was offset by a smaller amount.
                            </li>
                            <br />
                            <li>
                                <b>Current index's matches &gt; previous indices' matches: </b>
                                Because this is a new match and the maximum number of matches has gone strictly up from the previous indices,
                                we save the syllable indices of this match.
                            </li>
                        </ul>
                    </li>
                    <br />
                    <li>
                        <b>No Match:</b> <i>A[i, j] = max(A[i - 1, j], A[i, j - 1])</i>
                        <br />
                        Since the current index is not a match, the total matches remains the same, the max of the previous cases,
                        where either of the substrings was one word shorter.
                        <br />
                        <br />
                        The syllable indices saved are the same as the previous case that had the greater total matches.
                        In cases where both previous cases have the same number of matches,
                        the syllable indices carried over once again prioritize the indices closest together.
                    </li>
                </ul>
                <p>
                    The first row and column of the array are prepopulated with <i>0's</i>. Once the entire array is populated,
                    we can trace back to recover the indices of <i>S</i> and <i>W</i> that are matched.
                </p>
                <Image src={algorithmImage} caption={"Table visualizing the dynamic programming algorithm."} />
                <h3>Filling in the Gaps</h3>
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
                    We investigate the example in the image below, where the Spotify line "I'm like exiled in a sty" is aligned with the WhisperX line
                    "Highlighter a sty".
                </p>
                <Image src={gapImage} caption={"Gaps between matched lyrics are filled in heuristically."} />
                <p>
                    Here, the last two words are perfect matches and are aligned by the first algorithm. The first words,
                    since they did not get matched to any other words, are also automatically aligned.
                </p>
                <p>
                    Now, we have a gap between aligned words. The Spotify gap ("like exiled in") is 4 syllables, while the WhisperX gap ("-lighter") is only 2.
                    Notice how while we aligned the first words with each other, because "Highlighter" has 2 more syllables than "I'm", we still consider the
                    extra 2 syllables to be "free" and thus in the unaligned gap.
                </p>
                <p>
                    For every word in the Spotify gap, we assign a timestamp from a word in the WhisperX gap, matching based on syllable index:
                    the first syllable of the Spotify gap is assigned the timestamp of the first syllable of the WhisperX gap, the second syllable of the
                    Spotify gap get's the second WhisperX gap's syllable, and so on.
                </p>
                <p>
                    WhisperX gives us word-level timestamps including start and end time. In order to derive syllable-level timestamps,
                    we linearly interpolate between the word start and end times by the number of syllables the word contains, found through lookup in
                    CMU pronouncing dictionary, commonly used in Natural Language Processing. For words not found in the dictionary, we guess syllable count
                    based on rule-based heuristics for English.
                </p>
                <p>
                    Finally, there are two cases for the gap:
                </p>
                <ol>
                    <li>
                        The WhisperX has the same or more syllables than the Spotify gap. This means that every word in the
                        Spotify gap should have been assigned a timestamp from the WhisperX gap, and the gap is considered "closed".
                    </li>
                    <br />
                    <li>
                        The Spotify gap has more syllables than the WhisperX gap. In this case, we linearly interpolate
                        between the end of the last WhisperX syllable within the gap and the start of the next aligned word by the number of syllables
                        left in the Spotify gap, and then assign timestamps to the remaining Spotify words based on syllable index.
                    </li>
                </ol>
                <p>
                    In the example, "like" and "ex-" are assigned timestamps from the WhisperX gap. There are 2 syllables remaining,
                    so we get 2 evenly spaced positions between the end of the WhisperX word "Highlighter" and the start of "a", and assign
                    the second of those timestamps to the Spotify word "in", because it is the second syllable in the leftover syllables.
                </p>
                <p>
                    While the second syllable of "exiled" is also part of the leftover syllables, it doesn't need to be assigned a timestamp since
                    it's in the middle of a word whose starting syllable already got assigned a timestamp.
                </p>
                <p>
                    In these ways, all the words of the Spotify lyrics and WhisperX transcription are heuristically aligned to produce the complete karaoke lyrics.
                </p>
            </>
    },
    {
        shortTitle: "Future",
        title: "Future Work",
        summary: "Improvements to the app can include additional karaoke features like pitch shifting, as well as improving the algorithm accuracy",
        contents:
            <>
                <p>
                    There are various possible improvements for the Spotify Karaoke app.
                </p>
                <p>
                    First of all, the heuristic approaches linearly interpolating between syllables assume that every syllable takes up the same
                    amount of time in the pronunciation of the word, but this is not true in real life. Finding a way to guess syllable length might
                    improve the accuracy of the timestamps.
                </p>
                <p>
                    There is also an ongoing bug with the WhisperX, confirmed by other users in the GitHub repository, that causes it to sometimes lose segments
                    of audio, skipping parts of the transcription. While the gap filling algorithm performs decently for smaller gaps, if the transcription loses
                    an entire segment of audio, then accuracy noticeably deteriorates. Finding a way to work around this bug would also improve accuracy.
                </p>
                <p>
                    There are also many features that could be added to make the app easier to use.
                </p>
                <p>
                    The first could be displaying lines based on verse and chorus divisions, which might be heuristically determined by finding the most repeated
                    or loudest sections based on pitch information.
                </p>
                <p>
                    The app could also allow the user to toggle the voice on and off to hear the melody while practicing, switching between the original
                    downloaded off YouTube and the accompaniment track. There could even be a feature to change the volume of voice independent of the accompaniment
                    using the already extracted vocal track.
                </p>
                <p>
                    Finally, adding the option to pitch shift the audio by semitone or key signature could allow users to sing their favorite songs even
                    if the original is out of their natural vocal range.
                </p>
            </>
    }
]

const SpotifyKaraoke: Project = {
    title: title,
    dateRange: dateRange,
    summary: summary,
    links: links,
    tags: tags,
    media: media,
    sections: sections
}

export default SpotifyKaraoke;

