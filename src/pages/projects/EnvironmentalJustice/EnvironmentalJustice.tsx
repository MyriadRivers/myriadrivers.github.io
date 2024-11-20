import Sidebar from "../../../components/Sidebar/Sidebar";
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
    const headings = ["Description", "Problem", "Background", "Research", "Design", "Evaluation", "Next Steps"];
    const headingRefs = useRef<Array<HTMLDivElement | null>>([]);
    const contentsRef = useRef<HTMLDivElement | null>(null);

    const [scrollRef, setScrollRef] = useState<HTMLDivElement | null>(null);

    useEffect(() => {
        setScrollRef(contentsRef.current);
    }, [])

    return (<StyledPage>
        <Sidebar headings={headings} contentScrollTop={scrollRef} headingRefs={headingRefs.current} />
        <div className={"projectContents"} ref={contentsRef}>
            <ProjectTitle
                text={"Eco Justice Organizer"}
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
                    End-to-end UX process involving user research, design, and evaluation of a system to aid community leaders of neighborhoods facing environmental injustice.
                </p>
                <p>
                    Please view the slides for a detailed overview of the process.
                </p>
            </ProjectTitle>
            <Expandable
                heading={"Problem Statement"}
                summary={"Summary of qualitative research and design ideation"}
                ref={el => headingRefs.current[1] = el}
            >
                <p>
                    We focused specifically on the connection between communities and environmental scientists:
                </p>
            </Expandable>
            <Expandable
                heading={"Background"}
                summary={"Summary of qualitative research and design ideation"}
                ref={el => headingRefs.current[2] = el}
            >
                <p>
                    We focused specifically on the connection between communities and environmental scientists:
                </p>
            </Expandable>
            <Expandable
                heading={"User Research"}
                summary={"Summary of qualitative research and design ideation"}
                ref={el => headingRefs.current[3] = el}
            >
                <p>
                    We focused specifically on the connection between communities and environmental scientists:
                </p>
            </Expandable>
            <Expandable
                heading={"Design"}
                summary={"Summary of qualitative research and design ideation"}
                ref={el => headingRefs.current[4] = el}
            >
                <p>
                    We focused specifically on the connection between communities and environmental scientists:
                </p>
            </Expandable>
            <Expandable
                heading={"Evaluation"}
                summary={"Summary of qualitative research and design ideation"}
                ref={el => headingRefs.current[5] = el}
            >
                <p>
                    We focused specifically on the connection between communities and environmental scientists:
                </p>
            </Expandable>
            <Expandable
                heading={"Next Steps"}
                summary={"Summary of qualitative research and design ideation"}
                ref={el => headingRefs.current[6] = el}
            >
                <p>
                    We focused specifically on the connection between communities and environmental scientists:
                </p>
            </Expandable>
            <div className={"bottomSpace"}></div>
        </div>
    </StyledPage>);
}

export default EnvironmentalJustice;