import { Project, ProjectTag, Section } from "../../../types";

import Image from "../../../components/Image";
import Video from "../../../components/Video";

import mainImage from "./music_accessibility_sketch.png";
import featureMatrixImage from "./feature_matrix.png";
import valenceEnergyImage from "./valence_energy.png";
import systemImage from "./system.png";
import SoundCloudSmall from "../../../components/SoundCloudSmall";
import Link from "../../../components/Link";
import { ReactNode } from "react";
import SoundCloudLarge from "../../../components/SoundCloudLarge";

const title: string = "Nyan Cat (Remix)";
const dateRange: string = "Feb 2021";
const subtitles = [
    { title: "Tools", text: "FL Studio, Adobe Photoshop" }
]
const summary: string = "A remix of a popular tune";
const links: Array<{ text: string, url: string }> = [{ text: "YouTube", url: "https://www.youtube.com/watch?v=ENX0IeDVcl8" }];
const tags: Array<ProjectTag> = [
    ProjectTag.uiux
];
const media: ReactNode = <SoundCloudSmall
    artist={"RIIIVER"}
    track={"Nyan Cat (Remix)"}
    artistURL={"https://soundcloud.com/riiivermusic"}
    trackURL={"https://on.soundcloud.com/uzBBX"}
    trackID={"979559179"}
/>
const sections: Array<Section> = [
    {
        shortTitle: "Description",
        title: "Description",
        contents:
            <>
                <p>
                    This composition remixes the popular 2011 internet meme <Link url={"https://www.youtube.com/watch?v=2yJgwwDcgV8"}>Nyan Cat</Link>;
                    original music by Japanese producer daniwell.
                </p>
                <p>
                    In 2021, daniwell called for people to submit remixes of the song to
                    be featured in a 10 year anniversary <Link url={"https://aidn.jp/nyancat10th/"}>album</Link>.
                    Unfortunately, my submission was not selected.
                </p>
                <p>
                    The remix takes an energetic approach with elements of happy hardcore, future bass, and chiptune.
                </p>
            </>
    }
]

const NyanCat: Project = {
    title: title,
    dateRange: dateRange,
    subtitles: subtitles,
    summary: summary,
    links: links,
    media: media,
    sections: sections
}

export default NyanCat;

