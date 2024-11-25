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
const links: Array<{ text: string, url: string }> = [{ text: "YouTube", url: "https://www.youtube.com/watch?v=ENX0IeDVcl8" }];
const tags: Array<ProjectTag> = [
    ProjectTag.uiux
];
const media: ReactNode = <SoundCloudLarge
    artist={"RIIIVER"}
    track={"Nyan Cat (Remix)"}
    artistURL={"https://soundcloud.com/riiivermusic"}
    trackURL={"https://on.soundcloud.com/uzBBX"}
    trackID={"979559179"}
/>;
const sections: Array<Section> = [
    {
        shortTitle: "Description",
        title: "Description",
        contents:
            <>
                <SoundCloudSmall
                    artist={"RIIIVER"}
                    track={"Nyan Cat (Remix)"}
                    artistURL={"https://soundcloud.com/riiivermusic"}
                    trackURL={"https://on.soundcloud.com/uzBBX"}
                    trackID={"979559179"}
                />
                <p>
                    A composition remixing the popular 2011 internet meme <Link url={"https://www.youtube.com/watch?v=2yJgwwDcgV8"}>Nyan Cat</Link>.
                </p>
            </>
    },
    {
        shortTitle: "About",
        title: "About",
        summary: "The remix was originally submitted for a competition",
        contents:
            <>
                <p>
                    Nyan Cat was a popular 2011 meme originally featuring a short loop of a cat with a Pop-Tart body, illustrated by Christopher Torres,
                    paired with the song "Nyanyanyanyanyanyanya!" by Japanese producer daniwell.
                </p>
                <p>
                    In 2021, daniwell called for people to submit some remixes of the song to
                    be featured in a 10 year anniversary <Link url={"https://www.youtube.com/watch?v=cAnFYwOu9Js&list=OLAK5uy_nC2NqTyv5O37bPmd5p_ck3WYyGel00-DI"}>album</Link>,
                    so I decided to give it a shot.
                </p>
                <p>
                    I tried to take some more creative liberties with the composition rather than sticking with too straight forward of a remix, which usually
                    bores me. I also made the art.
                </p>
            </>
    }
]

const NyanCat: Project = {
    title: title,
    dateRange: dateRange,
    links: links,
    tags: tags,
    media: media,
    sections: sections
}

export default NyanCat;

