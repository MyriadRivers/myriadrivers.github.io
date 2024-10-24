import Sidebar from "../../../components/Sidebar";
import { useEffect, useRef, useState } from "react";
import Expandable from "../../../components/Expandable";
import ProjectTitle from "../../../components/ProjectTitle";
import Image from "../../../components/Image";

import troovPdf from "../../../assets/files/troov_ux_research.pdf"

import pipelineImage from "./spotify_karaoke_pipeline.png";
import stackImage from "./spotify_karaoke_stack.png";
import algorithmImage from "./spotify_karaoke_algorithm_table.png";
import gapImage from "./spotify_karaoke_gap_interpolation.png";
import StyledPage from "../../../components/StyledPage";

import demoVideo from "./spotify_karaoke_demo.mp4";
import Video from "../../../components/Video";

function Troov() {
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
                text={"Safety on Dating and Friendship Apps"}
                subtitle={"Aug–Dec 2024"}
                links={[
                    { text: "slides", url: troovPdf },
                ]}
                tags={["ui/ux"]}
                ref={el => headingRefs.current[0] = el}
            >
                <p>
                    Team: Jason Gao, Shareen Chang, Madison Steinau, Xinxuyang Zhao
                </p>
                <p>
                    This project partnered with the friendship and dating app startup <a href={"https://troov.app/"}><u>Troov, Inc.</u></a> The purpose was
                    to evaluate and generate recommendations for fostering a safe environment on the app to encourage users to go on in-person meetups.
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
                    We defined the problem statement as follows.
                </p>
                <p>
                    <b>How can we foster a safe environment on Dating and Meetup Apps (DMAs) to promote authentic and meaningful in-person connections?</b>
                </p>
                <p>
                    User research included literature review, survey design and administration (N=53), semi-structured interview (N=9), competitive analysis,
                    app walkthrough, and usability feedback.
                </p>
                <p>
                    Quantitative data from the surveys was analyzed through Qualtrics to generate broad insights. Qualitative data was analyzed through
                    thematic analysis via affinity mapping to delve into the rationale and context behind the quantitative insights. These research findings
                    were used to generate user needs and design recommendations for Troov.
                </p>
                <p>
                    The team generated sketches and wireframes of these ideas to get feedback from both Troov and users, before developing a higher fidelity
                    prototype to do a more detailed evaluation on.
                </p>
            </Expandable>
            <div className={"bottomSpace"}></div>
        </div>
    </StyledPage>);
}

export default Troov;