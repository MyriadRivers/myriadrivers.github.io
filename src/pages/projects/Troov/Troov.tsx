import { Project, Section } from "../../../types";

import Image from "../../../components/Image";

import mainImage from "./troov_main.png"
import competitiveAnalysis from "./competitive_analysis.png";
import conceptualMap from "./conceptual_map.png";
import affinityMap from "./affinity_map.png";
import { ReactNode } from "react";
import Link from "../../../components/Link";

import researchSlides from "../../../assets/files/troov_ux_research.pdf";
import overallSlides from "../../../assets/files/troov_final_presentation.pdf";
import Timeline from "../../../components/Timeline/Timeline";
import { Typography } from "@mui/material";
import GridList from "../../../components/GridList/GridList";
import MediaContainer from "../../../components/MediaContainer";
import { AxisConfig, BarChart, ChartsYAxisProps } from "@mui/x-charts";
import { AccountBox, AdminPanelSettings, ContactEmergency, Diversity3, EmojiPeople, Fingerprint, Handshake, Hearing, HowToReg, JoinFull, LockPerson, PersonOff, RememberMe, SafetyDivider, SensorOccupied, VerifiedUser, Warning } from "@mui/icons-material";

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
        title: "Analysis generates design requirements",
        summary: "Through thematic and quantitative analysis of our research, we generated key user findings that informed 6 system design requirements regarding safety",
        contents:
            <>
                <p>
                    We used Qualtrics to visualize our quantitative data from our surveys to derive broad insights and correlations between demographics, DFA experiences,
                    and opinions on safety. For instance, women were more worried about harassment and physical safety, while men were relatively more worried about scams or
                    fake profiles.
                </p>
                <MediaContainer>
                    <Typography variant="h5" textAlign={"center"}>Which of the following concerns you most about using DFAs? (Select all that apply)</Typography>
                    <BarChart
                        height={360}
                        margin={{
                            top: 50,
                            bottom: 20,
                            left: 150
                        }}
                        xAxis={[
                            {
                                min: 0,
                                max: 21
                            }
                        ]}
                        yAxis={[
                            {
                                id: "heuristics",
                                data: [
                                    "Unsolicited Messages",
                                    "Catfishing/Fake Profiles",
                                    "In-Person Physical Safety",
                                    "Scams/Financial Fraud",
                                    "Privacy Breaches",
                                    "Other"
                                ],
                                categoryGapRatio: 0.5,
                                scaleType: "band"
                            } as AxisConfig<'band', any, ChartsYAxisProps>,
                        ]}
                        series={[
                            {
                                data: [2, 8, 2, 6, 7, 5],
                                stack: "gender",
                                label: "male",
                                color: "#5bcefa",
                            },
                            {
                                data: [18, 12, 17, 11, 7, 0],
                                stack: "gender",
                                label: "female",
                                color: "#f5a9b8",
                            },
                            {
                                data: [1, 0, 0, 0, 0, 0],
                                stack: "gender",
                                label: "non-binary",
                                color: "#9b59d0",
                            }
                        ]}
                        layout={"horizontal"}
                        sx={{
                            "::selection": {
                                color: "white",
                                background: "black"
                            },
                            "::-moz-selection": {
                                color: "white",
                                background: "black"
                            }
                        }}
                    />
                </MediaContainer>
                <p>
                    From our competitive analysis, beta app feedback sessions, and app walkthroughs, we listed the likes, dislikes/confusions, and desires of each screen
                    for the existing design. We also isolated Troov's niche among existing FDAs through a conceptual map.
                </p>
                <Image src={conceptualMap} caption={"Conceptual Map positioning troov uniquely amid competitors."} />
                <p>
                    Finally, we performed <b>inductive thematic analysis</b> via affinity mapping on our semi-structured interview notes to generate in-depth qualitative
                    insights. In the map, every user was represented by a different color sticky note, allowing us to quickly see if a finding was supported by multiple users.
                    Purple sticky notes summarized the entire column, while green and blue sticky notes organized higher level findings.
                </p>
                <Image src={affinityMap} caption={"Affinity map with high level findings based on the semi-structured interviews."} />
                <Typography variant={"h4"}>Findings</Typography>
                <p>
                    Through these analyses, we developed 7 key findings pertaining to safety on FDAs.
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
                <Typography variant={"h4"}>Design Requirements</Typography>
                <p>
                    From these findings, we derived <b>6 design requirements</b> regarding safety on Troov.
                </p>
                <GridList items={[
                    {
                        icon: <Hearing fontSize="large" />,
                        header: "DR1: Promote Intentionality",
                        text: `Prevent wasted effort by promoting sincere efforts to understand others (F1: Filtering, F6: Intentionality).`
                    },
                    {
                        icon: <HowToReg fontSize="large" />,
                        header: "DR2: Validate Identity",
                        text: `Verify physical appearance, occupation, or identity (F1: Filtering, F4: Outside Opinions).`
                    },
                    {
                        icon: <Handshake fontSize="large" />,
                        header: "DR3: Prioritize Consent",
                        text: `Always ask for consent before sharing identifiable information (F2: Online Personas).`
                    },
                    {
                        icon: <Warning fontSize="large" />,
                        header: "DR4: Suggest Caution",
                        text: ` Provide real-time safety recommendations and reminders to ensure the details of planning and engaging in the event prioritize safety (F3: Physical Safety).`
                    },
                    {
                        icon: <ContactEmergency fontSize="large" />,
                        header: "DR5: Provide Contingencies",
                        text: `Know when users are going on in-person events and offer features to discreetly notify external emergency contacts at any point (F3: Physical Safety).`
                    },
                    {
                        icon: <SensorOccupied fontSize="large" />,
                        header: "DR6: Represent Character",
                        text: `Allow profile to reflect someone’s personality across various social contexts, providing a holistic representation of their character (F5: Similarity, F7: Offline Behaviors).`
                    }
                ]} />
            </>
    },
    {
        shortTitle: "Design",
        title: "Design",
        summary: "We did iterative ideation and design",
        contents:
            <>
                <p>
                    To make sure our designs were always in sync with users, our process underwent <b>3 iterations</b> of ideation and user feedback.
                </p>
                <Typography variant={"h4"}>Lo-fi Sketches</Typography>
                <p>
                    Sketches were done.
                </p>
                <Typography variant={"h4"}>Mid-fi Wireframes</Typography>
                <p>
                    Sketches were done.
                </p>
            </>
    },
    {
        shortTitle: "Prototype",
        title: "Prototype",
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

