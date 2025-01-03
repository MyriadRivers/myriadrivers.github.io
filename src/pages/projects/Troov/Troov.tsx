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
import { AccountBox, AdminPanelSettings, ContactEmergency, Dangerous, Dashboard, Directions, Diversity3, EmojiPeople, Fingerprint, Handshake, Hearing, HowToReg, JoinFull, Keyboard, LockPerson, PersonOff, RememberMe, Rule, SafetyDivider, SensorOccupied, TouchApp, Traffic, Undo, VerifiedUser, Warning } from "@mui/icons-material";

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
                    We first conducted a <b>literature review</b> of over 30 articles, websites, and books
                    covering existing DFAs, the differences of online versus in-person mediums,
                    safety on apps, and the importance of connection to provide context for our primary research.
                </p>
                <Typography variant={"h4"}>Competitive Analysis</Typography>
                <p>
                    We analyzed <b>7 existing DFAs</b> already on the market to evaluate opportunities and gaps in
                    Troov's existing beta app design.
                </p>
                <Image src={competitiveAnalysis} caption={"Feature comparison between Troov and 7 other apps."} />
                <Typography variant={"h4"}>Surveys</Typography>
                <p>
                    Through flyers posted around campus, Midtown Atlanta, and online,
                    we distributed a Qualtrics survey to <b>54 users</b>, asking about experiences with DFAs,
                    interest in Troov, and availability for interviews.
                </p>
                <Typography variant={"h4"}>Semi-structured Interviews</Typography>
                <p>
                    From our pool of survey respondents, we selected <b>8 participants</b> to participate in a 1-1.5 hour
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
                    and were asked questions regarding their previous experiences and frustrations with DFAs and
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
                    for the existing design. We also isolated Troov's niche among existing DFAs through a conceptual map.
                </p>
                <Image src={conceptualMap} caption={"Conceptual Map positioning Troov uniquely amid competitors."} />
                <p>
                    Finally, we performed <b>inductive thematic analysis</b> via affinity mapping on our semi-structured interview notes to generate in-depth qualitative
                    insights. In the map, every user was represented by a different color sticky note, allowing us to quickly see if a finding was supported by multiple users.
                    Purple sticky notes summarized the entire column, while green and blue sticky notes organized higher level findings.
                </p>
                <Image src={affinityMap} caption={"Affinity map with high level findings based on the semi-structured interviews."} />
                <Typography variant={"h4"}>Findings</Typography>
                <p>
                    Through these analyses, we developed <b>7 key findings</b> pertaining to safety on DFAs.
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
                        text: `Allow profile to reflect someone’s personality across various social contexts, providing a holistic representation of their character (F5: Similarity, F4: Outside Opinions, F7: Offline Behaviors).`
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
                <Typography variant={"h4"}>Lo-fi Sketches</Typography>
                <p>
                    Each of our 4 team members brainstormed and sketched 2 concepts within 5 minutes. We then discussed our ideas as a team,
                    developing a SWOT (strengths, weaknesses, opportunities, threats) analysis for each design while labeling key features.
                    These features were sorted in a prioritization matrix of impact versus implementation feasibility to come up
                    with <b>4 distinct flows</b> that encapsulated our design requirements.
                </p>
                <Image src={sketches} caption={"Initial sketches split into 4 flows with key features labeled."} />
                <p>
                    We evaluated these sketches with <b>4 users</b> (3 male, 1 genderfluid), 3 new participants and the founder of Troov, to get feedback on our initial designs.
                    We walked users through our ideas and asked them about their impressions, confusions, and perceived benefits and concerns for each design.
                </p>
                <Typography variant={"h4"}>Mid-fi Wireframes</Typography>
                <p>
                    We developed our second iteration of ideas by incorporating the feedback from the sketches to generate more detailed wireframes.
                    These were adjusted to account for confusions and desires expressed by users in the sketch evaluation phase,
                    while focusing more on information architecture and layout.
                </p>
                <Image src={wireframes} caption={"Mid-fidelity wireframes incorporating feedback from the sketch evaluations."} />
                <p>
                    We evaluated the wireframes with <b>5 new users</b> (2 male, 3 female). We focused on presenting
                    the designs without explanation to users and asking them to guess the functionality of features in order to
                    evaluate the usability and intuitiveness of our system.
                </p>
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
                <Typography variant={"h4"}>Matching Phase</Typography>
                <p>
                    On the <b>Discover</b> Page, certain users have a blue <b>verification checkmark</b> next to their name, representing a verified profile.
                </p>
                <p>
                    In the <b>About Creator</b> tab, verified profiles have multiple possible levels of authentication, including physical appearance,
                    student status, and current company. Each of these checks is separate and optional, letting users provide additional
                    levels of reassurance if they want to (<b>DR2: Validate Identity</b>). Having at least one of these makes the profile verified.
                </p>
                <p>
                    Profiles also display two <b>intentionality metrics.</b>.
                    Reliability measures how often a user actually attends a Troov they have confirmed (as opposed to flaking)
                    while response rate reflects how quickly a user usually responds to a new message.
                    Having these metrics visible encourages users to be proactive and commit to activities (<b>DR1: Promote Intentionality</b>).
                </p>
                <p>
                    The <b>People Say</b> section of the profile shows aggregated words other users who have previously gone on Troovs with this user
                    have selected to describe them. This lets others see valuable outside opinions on how the user behaves in real life (<b>DR6: Represent Character</b>).
                </p>
                <p>
                    Finally, the <b>Past Troovs</b> section shows images from past activites the user has attended,
                    letting them showcase what they are like in-person (<b>DR6: Represent Character</b>).
                </p>
                <Image src={matchingPhase} caption={"In the matching phase, users can browse Troovs and view profiles."} gif />
                <Typography variant={"h4"}>Before Troov</Typography>
                <p>
                    After confirming a Troov at a particular time, users may chat before the date of the activity to discuss details and get to know each other more.
                    24 hours before the activity begins, a <b>Meetup Guide</b> appears sticked to the bottom of the chat.
                    Users can view the guide, which includes helpful safety tips and reminders (<b>DR4: Suggest Caution</b>),
                    and issue a notification confirming they have read and understood.
                </p>
                <p>
                    A banner also appears at the top of the chat showing who has already read and accepted the guide,
                    allowing users to signal a more thoughtful approach to the upcoming activity (<b>DR1: Promote Intentionality</b>). Users may also
                    issue a reminder or request to reschedule the Troov if the other person has not read the guide, which makes sure
                    both people are on the same page and still willing to meet up before the activity (<b>DR3: Prioritize Consent</b>).
                </p>
                <Image src={beforeTroov} caption={"The Meetup Guide provides reminders and tips before an in-person meeting."} gif />
                <Typography variant={"h4"}>During Troov</Typography>
                <p>
                    An hour before the Troov begins, a new banner appears in the chat with a countdown to the activity start time.
                    Clicking on this banner allows the users to begin the Troov.
                </p>
                <p>
                    After both users have clicked the banner, they are brought to the <b>Meetup Confirmation</b> page.
                    Using NFC technology, users must hold their phones together for the Troov to officially begin.
                </p>
                <p>
                    This physical action requires users to have physically seen each other, verified their identities match their profiles,
                    and then agreed to touch phones (<b>DR2: Validate Identity, DR3: Prioritize Consent</b>).
                    Confirming the Troov in this way also contributes to the <b>reliability score</b> on both users' profiles,
                    signifying they have actually shown up (<b>DR1: Promote Intentionality</b>).
                </p>
                <p>
                    After starting the Troov, the app enters <b>Troov In Progress</b> mode, which offers easy-access buttons for calling or
                    sharing live location with saved emergency contacts, giving an additional guarantee of safety during the meetup (<b>DR5: Provide Contingencies</b>).
                </p>
                <Image src={duringTroov} caption={"After beginning a Troov through NFC confirmation, users have emergency buttons if they need them."} gif />
                <Typography variant={"h4"}>After Troov</Typography>
                <p>
                    The active Troov can be ended using a slider (preventing accidental triggers over a button). Afterwards,
                    users are given the opportunity to reflect upon and review the activity.
                </p>
                <p>
                    They can first select an emoji representing their overall experience. Afterwards, optional categories appear allowing for more detail.
                    Users can select any of the categories to suggest broadly what went well or what could be improved,
                    and can then optionally go into even more detail by selecting specific <b>one-word tags</b> or adding their own.
                </p>
                <p>
                    These word tags are aggregated and then shown on the <b>People Say</b> section of the other user's profile (<b>DR6: Represent Character</b>).
                    The different optional levels of feedback detail for both good and bad aspects encourage users to be more holistic in their review,
                    only saying what they are comfortable with (<b>DR1: Promote Intentionality, DR3: Prioritize Consent</b>).
                </p>
                <Image src={afterTroov} caption={"Users can leave a review for a Troov after it ends and optionally specify more detail."} gif />
                <p>
                    On the user's profile, they may also optionally add photos of Troovs they went on through the <b>Troov History</b> page.
                </p>
                <Image src={troovHistory} caption={"Users can add photos of previous Troovs to their profile on the Troov History page."} gif />
                <p>
                    These photos must be approved by the other user who went on the Troov (<b>DR3: Prioritize Consent</b>) before they can be added
                    to the profile's <b>Past Troovs</b> section (<b>DR6: Represent Character</b>).
                </p>
                <Image src={photoRequest} caption={"Both users must approve images before they can be uploaded."} gif />
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
                    Our final feedback session on our hi-fi prototype involved 2 distinct evaluation methods going through <b>6 tasks</b> that lined up broadly with the 4 phases:
                </p>
                <ol>
                    <li>Browse and view a Troov from a verified user.</li>
                    <li>Ensure both you and the other user have read the Meetup Guide before the Troov.</li>
                    <li>Confirm you have met the other user in-person and begin the Troov.</li>
                    <li>Leave a rating for the Troov you just went on.</li>
                    <li>Add the photos of the Troov you just went on with Michael to your profile.</li>
                    <li>Confirm Jennifer's requested photos and display them on your profile.</li>
                </ol>
                <Typography variant={"h4"}>Heuristic Evaluation</Typography>
                <p>
                    In accordance with <Link url={"https://www.nngroup.com/articles/ten-usability-heuristics/"}>Nielsen's 10 Usability Heuristics</Link>,
                    a set of guidelines broadly used within the Design community to assess usability,
                    we had <b>3 UX experts</b> (2 HCI Master's Students and 1 professional UX designer/engineer) with no prior knowledge of our system evaluate our design
                    on the <b>7 most relevant heuristics</b>:
                </p>
                <GridList items={[
                    {
                        icon: <Traffic fontSize="large" />,
                        header: "Visibility of System Status",
                        text: `Does the system always keep users informed about what is going on and what effects user actions have,
                        through appropriate feedback within reasonable time?`
                    },
                    {
                        icon: <TouchApp fontSize="large" />,
                        header: "Match Between System & the Real World",
                        text: `Does the system speak the user's language? Does it follow real-world conventions, making information appear in a natural order?`
                    },
                    {
                        icon: <Undo fontSize="large" />,
                        header: "User Control & Freedom",
                        text: `Does the system support easy to access "emergency exits" when the user gets into a state by mistake (e.g. undo, redo, cancel, etc.)?`
                    },
                    {
                        icon: <Rule fontSize="large" />,
                        header: "Consistency & Standards",
                        text: `Does the system follow platform conventions? Do the same words, actions, and situations mean the same things at all times?`
                    },
                    {
                        icon: <Dangerous fontSize="large" />,
                        header: "Error Prevention",
                        text: `Does the system either eliminate error-prone conditions or adequately warn users and ask for confirmation?`
                    },
                    {
                        icon: <Directions fontSize="large" />,
                        header: "Recognition > Recall",
                        text: `Does the system minimize memory load by making instructions, objects, actions, and options visible whenever they are needed?`
                    },
                    {
                        icon: <Dashboard fontSize="large" />,
                        header: "Aesthetic & Minimalistic Design",
                        text: `Is every word, color, font, button, or other unit of information necessary to the system? Does everything serve a purpose?`
                    }
                ]} />
                <p>
                    Participants were given the clickable prototype and a worksheet outlining the 6 tasks.
                    Each task was further subdivided into steps, and for each steps the relevant heuristics were listed.
                    Participants followed the worksheet without guidance to complete the tasks, rating the heuristic for each step using a severity scale:
                </p>
                <ol className="severity">
                    <li>I disagree that this is a usability problem at all.</li>
                    <li>Cosmetic problem only: need not be fixed unless extra time is available on the project.</li>
                    <li>Minor usability problem: fixing this should be given low priority.</li>
                    <li>Major usability problem: important to fix, so should be given high priority.</li>
                    <li>Usability catastrophe: imperative to fix this before the product can be released.</li>
                </ol>
                <p>
                    Participants were also prompted to <b>think aloud</b> as they evaluated the system.
                    Researchers took note of any voiced or observed confusions, and discussed general thoughts with the participant at the end of the session.
                </p>
                <Image src={heuristicEvaluation} caption={"Example task from the Heuristic Evaluation worksheet."} />
                <Typography variant={"h4"}>Usability Testing</Typography>
                <p>
                    <b>4 users</b> with previous experience using DFAs (2 male, 2 female)
                    having them walked through the six tasks, <b>thinking aloud</b> as they used the system, while researchers took notes. After each task,
                    researchers asked a set of questions designed to probe specific elements or features of the task.
                    At the end, participants discussed their overall impressions, suggestions, and confusions with the system
                    and additionally completed a <b>System Usability Scale</b> (SUS).
                </p>
                <Image src={systemUsabilityScale} caption={"Example questions from the System Usability Scale."} />
                <Typography variant={"h4"}>Analysis</Typography>
                <p>
                    With the notes generated from both the heuristic evaluations and usability tests, we conducted another round of affinity mapping
                    to find underlying points of confusion in our design. We combined this with a qualitative analysis of heuristic evaluation and
                    system usability scale scores to develop both general and specific feedback.
                </p>
                <Image src={heAnalysis} caption={"Heatmap showing aggregate severity scores across tasks and heuristics averaged from all 3 evaluators."} />
                <p>
                    With an overall severity score of <b>0.52</b> across all tasks and heuristics, no heuristic for any task exceeding 2,
                    and an average SUS score of <b>89.38%</b>, we found that our design was broadly usable and effective at meeting our requirements,
                    with certain tasks (Meetup Guide, In-Person Confirm, Adding Photos) having some specific minor issues and more common points of confusion.
                </p>
                <p>
                    More specifically, our thematic analysis revealed <b>10 findings:</b>
                </p>
                <GridList items={[
                    {
                        icon: "1",
                        text: `The impact and effect of specific actions and features are unclear; users are unsure of why they need to do them.`
                    },
                    {
                        icon: "2",
                        text: `The meanings and functions of buttons and features are not always evident from their names or icons.`
                    },
                    {
                        icon: "3",
                        text: `The Meetup Guide tips need more specific details and clarity.`
                    },
                    {
                        icon: "4",
                        text: `It is unclear how to remind someone to complete the Meetup Guide.`
                    },
                    {
                        icon: "5",
                        text: `Beginning or ending a Troov can be easily forgotten or overlooked.`
                    },
                    {
                        icon: "6",
                        text: `The current review categories and tags are too narrow and inflexible.`
                    },
                    {
                        icon: "7",
                        text: `It is difficult to find where to add photos to a past Troov.`
                    },
                    {
                        icon: "8",
                        text: `The Troov History page lacks important information about each activity.`
                    },
                    {
                        icon: "9",
                        text: `The process of having photo upload requests confirmed by another user is unclear.`
                    },
                    {
                        icon: "10",
                        text: `Features within the photo request approval page are not obviously interactable.`
                    }
                ]} />
                <p>
                    The more broad findings were split into the specific features they referred to.
                    As a team, we identified solutions to each of these issues (adding more descriptions, increasing feedback, reorganizing layouts, etc.)
                    to be implemented in future iterations.
                </p>
            </>
    },
    {
        shortTitle: "Reflection",
        title: "A productive and rewarding collaboration",
        summary: "Working with Troov as a startup was a great opportunity to balance UX recommendations with business needs",
        contents:
            <>
                <p>
                    After our final evaluations, we handed off our project and design files back to our sponsor to begin
                    incorporating into the actual app. Future work would involve implementing the specific design recommendations addressing
                    the findings of the evaluation sessions into new iterations for further user testing.
                </p>
                <p>
                    As a whole, it was a very rewarding and productive collaboration between our team and Troov;
                    our sponsor, the founder of the company, has said the same, as our work represented the first in-depth and rigorous
                    UX research and design project the app has undertaken.
                </p>
                <p>
                    Working with a startup was a unique opportunity to discuss and advocate for UX work
                    in the scope of business needs, as we discussed feasability, return of investment,
                    and priorities for features that the development team could actually implement with the founder,
                    things we may not have had to consider as in-depth if we worked with a larger company.
                </p>
                <p>
                    Overall, working with Troov was a fantastic experience.
                </p>
                <Image src={teamPic} caption={"Our team on call with our industry sponsor!"} />
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

