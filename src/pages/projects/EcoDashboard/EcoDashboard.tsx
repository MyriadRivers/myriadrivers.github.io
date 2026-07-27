import { Project, ProjectTag, Section } from "../../../types";

import Image from "../../../components/Image";

import mainImage from "./dashboard_main.png";
import smMining from "./sm_mining.png";
import interview from "./interview.png";
import affinityMap from "./affinity_map.png";
import landfillMeeting from "./landfill_meeting.png";
import hta from "./hta.png";
import ideation from "./ideation.png";
import storyboard from "./storyboard.png";
import stakeholders from "./stakeholders.png";
import heuristicEval from "./heuristic_evaluation.png";

import viewTimeline from "./timeline.gif";
import viewInsights from "./view_insights.gif";
import setUrgent from "./set_urgent.gif";
import markComplete from "./mark_complete.gif";

import { ReactNode } from "react";

import researchSlides from "../../../assets/files/ux_research_environmental_justice.pdf";
import Heading from "../../../components/Heading";
import Table from "../../../components/Table";
import Link from "../../../components/Link";
import GridList from "../../../components/GridList/GridList";
import { BackHand, Biotech, Dashboard, Directions, Diversity2, Diversity3, EditNote, EmojiPeople, Facebook, FormatListNumbered, GridGoldenratio, Handshake, Info, InterpreterMode, Keyboard, MenuBook, Newspaper, RecordVoiceOver, Rule, SentimentVeryDissatisfied, Traffic, TurnLeft, Warning } from "@mui/icons-material";
import { AxisConfig, BarChart, ChartsYAxisProps } from "@mui/x-charts";
import { Box, Grid2, Typography } from "@mui/material";
import MediaContainer from "../../../components/MediaContainer";
import Timeline from "../../../components/Timeline/Timeline";

const title: string = "EcoJustice Dashboard";
const dateRange: string = "Aug – Dec 2024";
const subtitles = [
    { title: "Team", text: "Jason Gao, Shareen Chang, Madison Steinau, Xinxuyang Zhao" },
    { title: "Tools", text: "Figma, Miro, Dovetail, Google Sheets" }
    // { title: "My Role", text: "User Research, Design" }
]
const summary: string = "How might we empower leaders of fenceline communities to keep their residents engaged and informed in the fight for environmental justice?";
const links: Array<{ text: string, url: string }> = [
    { text: "prototype", url: "https://www.figma.com/design/HWV9yvvhLUYO5whGoxNYwF/D3---Design?node-id=833-8289&t=Y4G1ywa0NmW0tgEi-1" },
    { text: "slides", url: researchSlides }
];
const media: ReactNode = <Image src={mainImage} mainImage />;
const sections: Array<Section> = [
    {
        shortTitle: "Description",
        title: "Description",
        contents:
            <>
                <p>
                    Fenceline communities, also known as sacrifice zones, are communities located extremely close to heavily polluting industrial facilities,
                    where residents face high rates of health risks, disease, and birth defects. These companies hold significant economic and legal sway,
                    meaning communities must rely on grassroots organization for any hope of change.
                </p>
                <p>
                    We pursued a <b>16-week end-to-end UX project</b> involving the research and design of a new system to integrate with Facebook, a tool many of these
                    communities already rely on. These features aim to help community leaders more effectively mobilize and monitor their residents.
                </p>
                <Timeline sections={[
                    {
                        name: "RESEARCH",
                        weeks: 6,
                        events: [
                            "Literature Review",
                            "Social Media Mining",
                            "Semi-structured Interviews",
                            "Participant Observation"
                        ]
                    },
                    {
                        name: "ANALYSIS",
                        weeks: 1,
                        events: [
                            "Affinity Mapping",
                            "Task Analysis"
                        ]
                    },
                    {
                        name: "DESIGN",
                        weeks: 3,
                        events: [
                            "SCAMPER",
                            "Sketching",
                            "Storyboarding"
                        ]
                    },
                    {
                        name: "PROTOTYPE",
                        weeks: 4,
                        events: [
                            "Hi-fi Figma"
                        ]
                    },
                    {
                        name: "EVALUATION",
                        weeks: 2,
                        events: [
                            "Heuristic Evaluation",
                            "Usability Testing"
                        ]
                    }
                ]} />
            </>
    },
    {
        shortTitle: "Research",
        title: "Primary research identifies user needs",
        summary: "Initial research evaluated the problem space and existing strategies users employ",
        contents:
            <>
                <p>
                    Initial research involved three primary methods of engaging with the community.
                </p>
                <GridList items={[
                    {
                        icon: <Facebook fontSize="large" />,
                        header: "Social Media Mining",
                        text: `Digital observations of Facebook groups used by 2 fenceline communities for organization.`
                    },
                    {
                        icon: <InterpreterMode fontSize="large" />,
                        header: "Semi-structured Interviews",
                        text: `3 interviews with community organizers and an environmental scientist who led cleanup work.`
                    },
                    {
                        icon: <EditNote fontSize="large" />,
                        header: "Participant Observation",
                        text: `Attendance and observation of a local community meeting to discuss neighborhood environmental concerns..`
                    }
                ]} />
                <Image src={landfillMeeting} caption={"Community organizer setting up agenda and notes for a meeting to discuss a neighboring landfill."} />
            </>
    },
    {
        shortTitle: "Analysis",
        title: "Thematic analysis reveals key user insights",
        summary: "We conducted an inductive thematic analysis through affinity mapping and 2 hierarchical task analyses to identify needs and areas of intervention",
        contents:
            <>
                <p>
                    We conducted thematic analysis through affinity mapping to organize 7 research findings, 
                    which we then developed into <b>3 non-functional design requirements</b> and <b>4 functional design requirements</b>:
                </p>
                <GridList items={[
                    {
                        icon: <Diversity3 fontSize="large" />,
                        header: "NFR 1: Organization and Hierarchy",
                        text: `Design should facilitate organization and hierarchy within a community (F1: Organization).`
                    },
                    {
                        icon: <Info fontSize="large" />,
                        header: "NFR 2: Transparent Processes",
                        text: `Design should facilitate transparency and accountability in processes (F2: Transparency, F7: Literacy).`
                    },
                    {
                        icon: <MenuBook fontSize="large" />,
                        header: "NFR 3: Non-expert Accessibility",
                        text: `Design should be easy to use and accessible to anyone regardless of scientific literacy (F7: Literacy).`
                    },
                    {
                        icon: <Warning fontSize="large" />,
                        header: "FR 1: Communicate Danger",
                        text: `The system should make the dangers of environmental contaminants understandable and relevant to the community (F2: Tranparency, F7: Literacy).`
                    },
                    {
                        icon: <FormatListNumbered fontSize="large" />,
                        header: "FR 2: Suggest Actions",
                        text: `Design should suggest concrete and actionable items to community members (F3: Representation, F6: Powerlessness).`
                    },
                    {
                        icon: <Handshake fontSize="large" />,
                        header: "FR 3: Facilitate Understanding",
                        text: `Design should enable researchers to develop an intimate and empathetic understanding of constituent residents (F3: Representation, F4: Engagement).`
                    }
                    ,
                    {
                        icon: <Diversity2 fontSize="large" />,
                        header: "FR 4: Encourage Discussion",
                        text: `Design should facilitate creating a safe and open online environment to gather feedback and experiences from all community members
                        (F2: Transparency, F3: Representation, F4: Engagement, F5: Media).`
                    }
                ]} />
            </>
    },
    {
        shortTitle: "Design",
        title: "Iterative design narrows problem scope",
        summary: `We generated 11 sketches and voted on the 2 best ideas, which were further developed as storyboards. 
        Through this process, we narrowed our problem statement to focus on community organizers and residents instead of researchers and communities`,
        contents:
            <>
                <p>
                    We generated 11 rapid sketches encapsulating different areas of the process of organizing 
                    communities against environmental injustice. Through task analysis, storyboarding, and 
                    iterative design, we arrived at two primary ideas:
                </p>
                <GridList items={[
                    {
                        icon: <Biotech fontSize="large" />,
                        header: "Data Collection",
                        text: `A system for allowing residents to conduct community science through the collection and reporting of environmental data and samples.`
                    },
                    {
                        icon: <Diversity3 fontSize="large" />,
                        header: "Project Management",
                        text: `A system for helping residents understand environmental literature, organize meetings, and keep track of progress in regulations and community cleanup.`
                    }
                ]} />
                <p>
                    After voting and evaluating the feasibility of development, we chose to pursue the <b>project management</b> idea. 
                </p>
                <Image src={storyboard} caption={"Storyboard of the data collection system, idea 1."} />
            </>
    },
    {
        shortTitle: "Prototype",
        title: "Prototype empowers users through actions",
        summary: "We designed a dashboard to integrate with Facebook, allowing community organizers to easily keep track of processes and issue tasks to residents",
        contents:
            <>
                <p>
                    Our prototype was developed in Figma, representing a new page/tab on a Facebook group called the "Dashboard".
                    The prototype walks through a community organizer's point of view.
                </p>
                <p>
                    Below represents example flows showcasing timeline organization of posts to allow residents to keep track of most recent news, 
                    as well as an organizer viewing and responding to community blockers to increase engagement.
                </p>
                <Image src={viewTimeline} caption={"Viewing the Urgent Action Items, Timelines, and a post within a Timeline."} gif />
                <Image src={viewInsights} caption={"An organizer responds privately through direct message to an individual blocked resident."} gif />
            </>
    },
    {
        shortTitle: "Results",
        title: "Evaluation with professionals and community members reveals excitement",
        summary: "We evaluated our design on two design requirements using heuristic evaluations with other HCI students and usability testing with fenceline community members",
        contents:
            <>
                <p>
                    We evaluated two specific design requirements, <b>Organization and Hierarchy</b> and <b>Suggest Actions</b> 
                    through both heuristic evaluation with 4 UX practitioners, as well as usability testing with 2 
                    actual members of fenceline communities. 
                </p>
                <p>
                    From our SUS scores, the resident rated our system <b>92.5</b>, while the community organizer rated it <b>77.5</b>.
                    Through these scores and our analysis, we found that we need to make our design more intuitive especially
                    towards older users.
                </p>
                <p>
                    From our heuristic evaluations, we found that our system across all evaluators and heuristics
                    had an average score <b>81.36</b>, indicating that our design generally supported our tasks but had
                    minor usability issues.
                </p>
                <p>
                    Among the words chosen from a bank to describe our system during usability testing were <b>controllable, convenient, effective, 
                    and empowering</b>. Both the resident and community leader described the system as <b>clean</b> and <b>organized</b> implying that our system broadly supports
                    <b> NFR 1: Organization and Hierarchy</b>.
                </p>
                <p>
                    As a whole, the community resident and organizer both expressed excitement at the design.
                    They found the timeline view and ability to create and monitor resident completion of tasks very helpful,
                    suggesting our system's generally supports <b> FR 1: Suggest Actions</b>.
                </p>
            </>
    }
]

const EcoDashboard: Project = {
    title: title,
    dateRange: dateRange,
    subtitles: subtitles,
    summary: summary,
    links: links,
    media: media,
    sections: sections
}

export default EcoDashboard;

