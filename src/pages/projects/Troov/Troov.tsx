import { Project, Section } from "../../../types";

import Image from "../../../components/Image";

import mainImage from "./troov_main.png"
import competitiveAnalysis from "./competitive_analysis.png";
import { ReactNode } from "react";
import Link from "../../../components/Link";

import researchSlides from "../../../assets/files/troov_ux_research.pdf";
import overallSlides from "../../../assets/files/troov_final_presentation.pdf";
import Timeline from "../../../components/Timeline/Timeline";
import { Typography } from "@mui/material";
import GridList from "../../../components/GridList/GridList";

const title: string = "Meetup App Safety";
const dateRange: string = "Aug – Dec 2024";
const subtitles = [
    { title: "Affiliation", text: "Troov" },
    { title: "Team", text: "Jason Gao, Shareen Chang, Madison Steinau, Xinxuyang Zhao" },
    { title: "Tools", text: "Figma, Whimsical, Dovetail, Qualtrics, Google Sheets" }
    // { title: "My Role", text: "User Research, Design" }
]
const summary: string = "How might we foster a safe environment on Meetup Apps to promote authentic and meaningful in-person connections?";
const links: Array<{ text: string, url: string }> = [
    { text: "Figma", url: "https://www.figma.com/design/wu8l6Bjnnj8L1RE30EgdGf/R4-Troov---High-Fidelity-Design?node-id=907-20386&t=znfoRD1Qq9CvSgno-1" },
    { text: "research", url: researchSlides },
    { text: "slides", url: overallSlides }
];
const media: ReactNode = <Image src={mainImage} mainImage />
const sections: Array<Section> = [
    {
        shortTitle: "Description",
        title: "Description",
        contents:
            <>
                <p>
                    Dating and Friendship Apps (DFAs) continue to rise in popularity as a way to form interpersonal relationships, especially among young adults.
                    More than ever, safety is a critical concern—both on the app and during the actual
                    face-to-face meetup.
                </p>
                <p>
                    We partnered with <Link url={"https://troov.app/"}>troov</Link>, a startup developing a DFA focusing on creating deep,
                    one-on-one connections through in-person activities, in a 16-week end-to-end UX project to research and design ways of promoting a sense of
                    trust and safety on the platform.
                </p>
                <Timeline sections={[
                    {
                        name: "RESEARCH",
                        weeks: 7,
                        events: [
                            "Literature Review",
                            "Competitive Analysis",
                            "Surveys",
                            "Semi-structured Interviews",
                            "Beta App Feedback Sessions",
                            "App Walkthrough"
                        ]
                    },
                    {
                        name: "ANALYSIS",
                        weeks: 2,
                        events: [
                            "Conceptual Mapping",
                            "Affinity Mapping",
                            "Quantitative Analysis"
                        ]
                    },
                    {
                        name: "IDEATION",
                        weeks: 3,
                        events: [
                            "Sketching",
                            "SWOT Analysis",
                            "Feedback Sessions",
                            "Wireframing",
                        ]
                    },
                    {
                        name: "DESIGN",
                        weeks: 2,
                        events: [
                            "Hi-fi Prototype"
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
                ]}/>
            </>
    },
    {
        shortTitle: "Research",
        title: "Primary research identifies Troov's opportunities",
        summary: "Initial Research compared Troov to competitors, identified new opportunities, and briefly assessed the beta app",
        contents:
            <>
                <p>
                    We first conducted a <b>literature review</b> of over 30 articles, websites, and books
                    covering existing DFAs, the differences of online versus in-person mediums,
                    safety on apps, and the importance of connection to provide context for our primary research.
                </p>
                <Typography variant={"h4"}>Competitive Analysis</Typography>
                <p>
                    We analyzed 7 existing DFAs already on the market to evaluate opportunities and gaps in 
                    Troov's existing beta app design.
                </p>
                <Image src={competitiveAnalysis} caption={"Feature comparison between Troov and 7 other apps."} />
                <Typography variant={"h4"}>Surveys</Typography>
                <p>
                    Through flyers posted around campus, Midtown Atlanta, and online, 
                    we distributed a Qualtrics survey to 54 users, asking about experiences with DFAs,
                    interest in Troov, and availability for interviews.  
                </p>
                <Typography variant={"h4"}>Semi-structured Interviews</Typography>
                <p>
                    From our pool of survey respondents, we selected 8 participants to participate in a 1-1.5 hour
                    semi-structured interview. All users were current students (undergrad and grad) and were 
                    compensated $50 dollars for their participation.
                </p>
                <GridList items={[
                    {
                        icon: "U1",
                        header: "Female",
                        text: `Has both friendship and dating app experience.`
                    },
                    {
                        icon: "U2",
                        header: "Heterosexual Female",
                        text: `African American. Has dating app experience.`
                    },
                    {
                        icon: "U3",
                        header: "Bisexual Female",
                        text: `Has dating app experience.`
                    },
                    {
                        icon: "U4",
                        header: "Non-binary",
                        text: `Asian. Has both friendship and dating app experience.`
                    },
                    {
                        icon: "U5",
                        header: "Heterosexual Female",
                        text: `Caucasian. Has both friendship and dating app experience.`
                    },
                    {
                        icon: "U6",
                        header: "Heterosexual Female",
                        text: `Asian. Has both friendship and dating app experience.`
                    },
                    {
                        icon: "U7",
                        header: "Homosexual Female",
                        text: `Caucasian. Has both friendship and dating app experience.`
                    },
                    {
                        icon: "U8",
                        header: "Heterosexual Male",
                        text: `Asian. Has both friendship and dating app experience.`
                    }
                ]} />
                <p>
                    Participants were all chosen to have used either friendship or dating apps before. 
                    Participants were majority female as secondary research identified (straight) women as far
                    more concerned with safety than other demographics.
                </p> 
                <p>
                    Participants were paired with an interviewer and a note-taker, 
                    and were asked questions regarding their previous experiences and frustrations with FDAs and
                    their approach to safety. 
                </p>
                <Typography variant={"h4"}>Beta App Feedback Sessions</Typography>
                <p>
                    In the same session as the semi-structured interview, participants were also shown existing Figma
                    designs of the beta Troov app and asked to give feedback on 6 screens. Users guessed the
                    meaning of pages and terminology and ranked the importance of features.
                </p>
                <Typography variant={"h4"}>App Walkthrough</Typography>
                <p>
                    Each team member screen recorded themselves walking through the beta app for the first time,
                    taking note of impressions and confusions. 
                </p>
            </>
    },
    {
        shortTitle: "Analysis",
        title: "Analysis",
        summary: "We analyzed our research",
        contents:
            <>
                <p>
                    We did analysis on the research.
                </p>
            </>
    },
    {
        shortTitle: "Ideation",
        title: "Ideation",
        summary: "We did iterative ideation and design",
        contents:
            <>
                <p>
                    We came up with ideas and iterated on them.
                </p>
            </>
    },
    {
        shortTitle: "Design",
        title: "Design",
        summary: "Hifi time",
        contents:
            <>
                <p>
                    We prototyped a thing.
                </p>
            </>
    },
    {
        shortTitle: "Evaluation",
        title: "Evaluation",
        summary: "We evaluated our system",
        contents:
            <>
                <p>
                    People liked it.
                </p>
            </>
    }
]

const Troov: Project = {
    title: title,
    dateRange: dateRange,
    subtitles: subtitles,
    summary: summary,
    links: links,
    media: media,
    sections: sections
}

export default Troov;

