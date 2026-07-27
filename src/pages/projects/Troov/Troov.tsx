import { Project, Section } from "../../../types";

import Image from "../../../components/Image";

import mainImage from "./troov_main.png"
import competitiveAnalysis from "./competitive_analysis.png";
import conceptualMap from "./conceptual_map.png";
import affinityMap from "./affinity_map.png";
import sketches from "./sketches.png";
import wireframes from "./wireframes.png";
import heuristicEvaluation from "./heuristic_evaluation.png";
import systemUsabilityScale from "./system_usability_scale.png";
import heAnalysis from "./he_analysis.png";
import teamPic from "./team_picture.png";

import matchingPhase from "./matching_phase.gif";
import beforeTroov from "./before_troov.gif";
import duringTroov from "./during_troov.gif";
import afterTroov from "./after_troov.gif";
import troovHistory from "./troov_history.gif";
import photoRequest from "./photo_requests.gif";

import { ReactNode } from "react";
import Link from "../../../components/Link";

import researchSlides from "../../../assets/files/troov_ux_research.pdf";
import overallSlides from "../../../assets/files/troov_final_presentation.pdf";
import Timeline from "../../../components/Timeline/Timeline";
import { Typography } from "@mui/material";
import GridList from "../../../components/GridList/GridList";
import MediaContainer from "../../../components/MediaContainer";
import { AxisConfig, BarChart, ChartsYAxisProps } from "@mui/x-charts";
import { AccountBox, AccountTree, AdminPanelSettings, Analytics, Apps, ContactEmergency, Dangerous, Dashboard, Directions, Diversity3, EmojiPeople, Fingerprint, Handshake, Hearing, HowToReg, InterpreterMode, JoinFull, Keyboard, LockPerson, PersonOff, PsychologyAlt, Quiz, RememberMe, Rule, SafetyDivider, SensorOccupied, TouchApp, Traffic, Undo, VerifiedUser, Warning } from "@mui/icons-material";

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
    { text: "prototype", url: "https://www.figma.com/design/wu8l6Bjnnj8L1RE30EgdGf/R4-Troov---High-Fidelity-Design?node-id=907-20386&t=znfoRD1Qq9CvSgno-1" },
    // { text: "research", url: researchSlides },
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
                    We partnered with <Link url={"https://troov.app/"}>Troov</Link>, a startup developing a DFA focusing on creating deep,
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
                        name: "DESIGN",
                        weeks: 3,
                        events: [
                            "Sketching",
                            "SWOT Analysis",
                            "Feedback Sessions",
                            "Wireframing",
                        ]
                    },
                    {
                        name: "PROTOTYPE",
                        weeks: 2,
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
        title: "Primary research identifies Troov's opportunities",
        summary: "Initial Research compared Troov to competitors, identified new opportunities, and briefly assessed the beta app",
        contents:
            <>
                <p>
                    Research involved a literature review, competitive analysis, surveys, semi-structured interviews,
                    and a walkthrough of the beta app.
                </p>
                <GridList items={[
                    {
                        icon: <Apps fontSize="large"/>,
                        header: "Competitive Analysis",
                        text: `Safety feature comparison of 7 dating and friendship apps.`
                    },
                    {
                        icon: <Quiz fontSize="large"/>,
                        header: "Surveys",
                        text: `Demographic and habit tracking for 54 users.`
                    },
                    {
                        icon: <InterpreterMode fontSize="large" />,
                        header: "Semi-structured Interviews",
                        text: `90 minute interview on contextual experiences with 8 participants.`
                    },
                    {
                        icon: <AccountTree fontSize="large" />,
                        header: "App Walkthrough",
                        text: `4 think-aloud walkthroughs by designers through beta app flow.`
                    }
                ]} />
                <p>
                    From the research, we isolated where current dating apps were failing to serve users, 
                    isolating Troov's niche for potential safety features. 
                </p>
            </>
    },
    {
        shortTitle: "Findings",
        title: "Thematic analysis generates design requirements",
        summary: "Through thematic and quantitative analysis of our research, we generated key user findings that informed 6 system design requirements regarding safety",
        contents:
            <>
                <p>
                    Through affinity mapping and thematic analysis of our data, we developed <b>7 key findings</b> pertaining to safety on DFAs.
                </p>
                <GridList items={[
                    {
                        icon: <PersonOff fontSize="large" />,
                        header: "F1: Filtering",
                        text: `Users grow distrustful of a platform when repeatedly exposed to unsolicited or inauthentic content.`
                    },
                    {
                        icon: <RememberMe fontSize="large" />,
                        header: "F2: Online Personas",
                        text: `Users carefully curate their personal information online to protect their identities.`
                    },
                    {
                        icon: <VerifiedUser fontSize="large" />,
                        header: "F3: Physical Safety",
                        text: `Users will only meet up in-person if they have multiple guarantees of their physical safety at every stage of the meetup.`
                    },
                    {
                        icon: <Diversity3 fontSize="large" />,
                        header: "F4: Outside Opinions",
                        text: `Users highly value information about a potential match from trusted circles or external parties.`
                    },
                    {
                        icon: <JoinFull fontSize="large" />,
                        header: "F5: Similarity",
                        text: `Users feel safer when a match is similar to them in identity, interests, or goals.`
                    },
                    {
                        icon: <Hearing fontSize="large" />,
                        header: "F6: Intentionality",
                        text: `Users appreciate intentionality and genuine empathy in their matches.`
                    },
                    {
                        icon: <EmojiPeople fontSize="large" />,
                        header: "F7: Offline Behaviors",
                        text: `Users want to know how people behave in real life, outside of apps.`
                    }
                ]} />
            </>
    },
    {
        shortTitle: "Design",
        title: "Iterative design ensures system matches users' expectations",
        summary: `We designed our system through 3 iterations, getting feedback from users after each phase to make sure our system was responding to user needs.
        The iterations included lo-fi sketches, mid-fi wireframes, and finally a hi-fi prototype`,
        contents:
            <>
                <p>
                    To make sure our designs were always in sync with users, our process underwent <b>3 iterations</b> of ideation and user feedback.
                </p>
                <p>
                    Each of our team members initially created rapid low fidelity sketches, exploring 2 concepts in 5 minutes. 
                    We discussed these and organized them by strengths, weaknesses, and opportunities, to come up with 
                    4 key feature flows.
                </p>
                <p>
                    We evaluated these lo-fi features with 4 new participants, and then iterated upon them to generate mid fidelity 
                    wireframes to explore information architecture and flow., which were then evaluated with 5 new participants to come up 
                    with our final iteration, the high fidelity prototype.
                </p>
                <Image src={sketches} caption={"Initial sketches split into 4 flows with key features labeled."} />
            </>
    },
    {
        shortTitle: "Prototype",
        title: "Prototype promotes safety through the entire process",
        summary: `The prototype spans 4 broad phases, with features from before a match is made to after users go on an activity, 
        ensuring safety is always a priority on the app`,
        contents:
            <>
                <p>
                    The third iteration of our design was a high-fidelity prototype, developed in Figma.
                    On the app, users can create one-on-one activity suggestions with a set time and location, known as Troovs.
                    Our system promotes safety in four broad phases centered around these activities.
                </p>
                <ol>
                    <li><b>Matching Phase: </b>Browsing Troovs and other users' profiles to find an interesting activity.</li>
                    <li><b>Before Troov: </b>Chatting with the other user after confirming a Troov and preparing for the activity.</li>
                    <li><b>During Troov: </b>Meeting up with the other user and going on the actual in-person activity.</li>
                    <li><b>After Troov: </b>Finishing the Troov and reviewing the experience.</li>
                </ol>
                <p>
                    Below demonstrates one of the flows for the <b>During Troov</b> phase, which uses 
                    NFC communication to verify identity and intentionality through physical meetups. 
                    This meetup incentivizes people to commit and not flake, and 
                    also allows for rapid emergency events during the date such as calling a saved contact. 
                </p>
                <Image src={duringTroov} caption={"After beginning a Troov through NFC confirmation, users have emergency buttons if they need them."} gif />
            </>
    },
    {
        shortTitle: "Evaluation",
        title: "Evaluation identifies opportunities to improve",
        summary: `We evaluated our system using both heuristic evaluations and usability testing, 
        finding our design was generally effective at addressing requirements while also identifying 10 points for improvement`,
        contents:
            <>
                <p>
                    Evaluation involved feedback on established usability metrics, namely Nielsen's 10 Usability Heuristics, 
                    as well as general concept validity through qualitative feedback from regular users. Evaluations put the user 
                    through 6 common tasks walking through all 4 flows. 
                </p>
                <GridList items={[
                    {
                        icon: <Analytics fontSize="large" />,
                        header: "Heuristic Evaluation",
                        text: `3 UX professionals evaluate 6 tasks through standard usability heuristics.`
                    },
                    {
                        icon: <PsychologyAlt fontSize="large" />,
                        header: "Usability Testing",
                        text: `4 DFA users walk through 6 tasks and provide SUS usability ratings and qualitative feedback.`
                    }
                ]} />
                <p>
                    From our evaluations, we pinpointed areas in each flow that were the cause of the most confusion, 
                    and recommendations to adjust them for future iterations.
                </p>
            </>
    },
    {
        shortTitle: "Results",
        title: "Features accelerated engineering time on future deployments.",
        summary: `Prototypes laid the roadmap for future deployments and predicted features later unveiled in existing dating apps.`,
        contents:
            <>
                <p>
                    Our research and design directly laid the roadmap for future Troov features, 
                    allowing the engineering team to focus on deployment.
                </p>
                <p>
                    In addition to this, our feature recommendations closely predicted new features that have since 
                    been rolled out to existing dating apps such as Bumble and Hinge (friend recommendations, 
                    tiered verification, suggested activities), showing strong alignment
                    with emergent market trends. 
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

