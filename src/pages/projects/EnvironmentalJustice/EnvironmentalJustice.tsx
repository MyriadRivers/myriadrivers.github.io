import Sidebar from "../../../components/Sidebar";
import { useEffect, useRef, useState } from "react";
import Expandable from "../../../components/Expandable";
import ProjectTitle from "../../../components/ProjectTitle";
import Image from "../../../components/Image";

import pipelineImage from "./spotify_karaoke_pipeline.png";
import stackImage from "./spotify_karaoke_stack.png";
import algorithmImage from "./spotify_karaoke_algorithm_table.png";
import gapImage from "./spotify_karaoke_gap_interpolation.png";
import StyledPage from "../../../components/StyledPage";

import ejPdf from "../../../assets/files/ux_research_environmental_justice.pdf"

import demoVideo from "./spotify_karaoke_demo.mp4";
import Video from "../../../components/Video";

function EnvironmentalJustice() {
    const headings = ["Description", "Summary"];
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
                text={"Fenceline Environmental Justice"}
                subtitle={"Aug–Dec 2024"}
                links={[
                    { text: "slides", url: ejPdf },
                ]}
                tags={["ui/ux"]}
                ref={el => headingRefs.current[0] = el}
            >
                <p>
                    Team: Jason Gao, Shareen Chang, Madison Steinau, Xinxuyang Zhao
                </p>
                <p>
                    This project looks at communities facing environmental injustice, specifically fenceline communities (a.k.a. "Sacrifice Zones") that are situated
                    in extreme proximity to heavily polluting industrial plants.
                </p>
                <p>
                    Please view the slides for a detailed overview of the process.
                </p>
            </ProjectTitle>
            <Expandable
                heading={"Summary"}
                summary={"Summary of qualitative research and design ideation"}
                ref={el => headingRefs.current[1] = el}
            >
                <p>
                    We focused specifically on the connection between communities and environmental scientists:
                </p>
                <p>
                    <b>How can we best foster relationships between residents facing environmental injustice and researchers to improve community well-being?</b>
                </p>
                <p>
                    User research included literature review; social media mining from online communities supporting fenceline neighborhoods;
                    semi-structured interviews with environmental researchers, community organizers, and residents; hierarchical task analysis of existing strategies;
                    and finally field research through participant observation of local community meetings on environmental concerns.
                </p>
                <p>
                    We used thematic analysis through affinity mapping to draw broad, underlying conclusions based on the qualitative data, which we then
                    used to iteratively and rapidly generate many design sketches.
                </p>
                <p>
                    Design ideas were refined collaboratively and the two best were storyboarded to outline contexts of use.
                </p>
                <p>
                    Finally, the team used the best design to generate a high fidelity prototype to evaluate with users.
                </p>
            </Expandable>
            <div className={"bottomSpace"}></div>
        </div>
    </StyledPage>);
}

export default EnvironmentalJustice;