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
import { BackHand, Biotech, Dashboard, Directions, Diversity2, Diversity3, EmojiPeople, FormatListNumbered, GridGoldenratio, Handshake, Info, Keyboard, MenuBook, Newspaper, RecordVoiceOver, Rule, SentimentVeryDissatisfied, Traffic, TurnLeft, Warning } from "@mui/icons-material";

const title: string = "EcoJustice Dashboard";
const dateRange: string = "Aug – Dec 2024";
const subtitles = [
    { title: "Team", text: "Jason Gao, Shareen Chang, Madison Steinau, Xinxuyang Zhao" },
    // { title: "My Role", text: "User Research, Design" }
]
const summary: string = "How might we empower leaders of fenceline communities to keep their residents engaged and informed in the fight for environmental justice?";
const links: Array<{ text: string, url: string }> = [
    { text: "Figma", url: "https://www.figma.com/design/HWV9yvvhLUYO5whGoxNYwF/D3---Design?node-id=833-8289&t=Y4G1ywa0NmW0tgEi-1" },
    { text: "research slides", url: researchSlides }
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
                    We pursued a 16-week end-to-end UX project involving the research and design of a new system to integrate with Facebook, a tool many of these
                    communities already rely on. These features aim to help community leaders more effectively mobilize and monitor their residents.
                </p>
            </>
    },
    {
        shortTitle: "Research",
        title: "Primary research identifies user needs",
        summary: "Initial Research included literature review, semi-structured interviews, social media mining, and participatory observation",
        contents:
            <>
                <p>
                    To build an initial understanding of the domain, we conducted a <b>literature review</b> of over 40 articles, websites, and books
                    covering case studies of existing sacrifice zones, government regulations, and existing technologies.
                </p>
                <p>
                    We also set about conducting primary research through three methods to generate specific user needs.
                </p>
                <Heading level={4}>Social Media Mining</Heading>
                <p>
                    In order to assess how communities organized themselves online, we investigated two "Stop Sterigenics" Facebook groups, centered in Willowbrook, IL
                    and Atlanta, GA. Both of these groups represent communities located near Sterigenics facilities,
                    a company that performs medical sterilization using a carcinogenic gas, Ethylene Oxide (EtO).
                    We analyzed how residents posted updates, discussed changes, and kept each other engaged.
                </p>
                <Image src={smMining} caption={"Posts were classified into broad categories based on content, looking at their engagement and the discussions in the comments sections."} />
                <Heading level={4}>Semi-structured Interviews</Heading>
                <p>
                    We developed interview guides for 1 environmental scientist and 2 community leaders, with questions based around their general needs and experiences,
                    as well as their requirements when working with one another.
                </p>
                <GridList items={[
                    {
                        icon: <Biotech fontSize="large" />,
                        header: "U1: Researcher",
                        text: `Environmental scientist at Emory University specializing in air and soil pollution.
                        Worked with the Atlanta Westside community to investigate lead contamination in the soil, leading to the area being classified as an EPA Superfund Site.`
                    },
                    {
                        icon: <EmojiPeople fontSize="large" />,
                        header: "U2: Community Leader",
                        text: `Lead the classification of the Buckhead Superfund Site, another local area contaminated with lead that U1's team had been investigating. 
                        Worked with federal officials to oversee remediation and cleanup.`
                    },
                    {
                        icon: <EmojiPeople fontSize="large" />,
                        header: "U3: Community Leader",
                        text: `Leader of the Stop Sterigenics Georgia Facebook group. Coordinates with sympathetic government representatives and media to raise awareness and advocate change.`
                    }
                ]} />
                <p>
                    We interviewed the researcher regarding her experience doing community outreach,
                    including unforeseen obstacles to collecting data and working with community members,
                    as well as the methods and practices she found most useful in raising awareness and promoting engagement.
                </p>
                <p>
                    We interviewed the community leaders about how they became aware of their respective issues, their efforts in communicating to other residents,
                    their outreach to other stakeholders including scientists, and their confusions and problems with current systems.
                </p>
                {/* <Image src={interview} caption={"Zoom interview with U1, an environmental researcher from Emory University."} /> */}
                <Heading level={4}>Participant Observation</Heading>
                <p>
                    Finally, we attended an in-person environmental meeting at a local church where community members discussed a local landfill that was being remediated and
                    built upon, with the construction process throwing up large amounts of particulate matter into the air. We sat in on the meeting, taking notes and
                    observing as a community member headed off with a status update of the current situation and as residents asked questions
                    about progress, concerns, and possible health risks.
                </p>
                <p>
                    After the meeting, we also individually spoke to a few of the residents,
                    as well as with the organizer who had led event.
                </p>
                <Image src={landfillMeeting} caption={"Community organizer setting up agenda and notes for the meeting to discuss the landfill."} />
            </>
    },
    {
        shortTitle: "Analysis",
        title: "Thematic analysis reveals key user insights",
        summary: "We conducted an inductive thematic analysis through affinity mapping, as well as 2 hierarchical task analyses, in order to identify needs and areas of intervention",
        contents:
            <>
                <p>
                    As a team, we synthesized the notes from our interviews and observations using <b>inductive thematic analysis</b> through affinity mapping.
                    Notes were generated based on habits, current strategies, confusions, and desires, and organized into different levels of groups by similarity,
                    revealing both more surface level commonalities, as well as higher level overarching goals.
                </p>
                <p>
                    In our map, each sticky note was colored based on the user it was taken from, allowing us to quickly see if a finding was supported by multiple users.
                    Pink notes summarize an entire column, and grey notes group multiple columns.
                    Orange notes were initial design solutions/ideas that we came up with as we organized the map.
                </p>
                <Image src={affinityMap} caption={"Affinity map and design recommendations from our primary research."} />
                <p>
                    From our thematic analysis, we derived <b>7 key findings</b>:
                </p>
                <GridList items={[
                    {
                        icon: <Diversity3 fontSize="large" />,
                        header: "F1: Organization",
                        text: `Internal community organization is key for effective external outreach.`
                    },
                    {
                        icon: <Info fontSize="large" />,
                        header: "F2: Transparency",
                        text: `Transparent information increases community engagement and empowerment.`
                    },
                    {
                        icon: <RecordVoiceOver fontSize="large" />,
                        header: "F3: Representation",
                        text: `Affected communities value representation throughout relevant decision-making processes.`
                    },
                    {
                        icon: <BackHand fontSize="large" />,
                        header: "F4: Engagement",
                        text: `Direct engagement is essential to successfully collect data and gain a deeper understanding of the issues.`
                    },
                    {
                        icon: <Newspaper fontSize="large" />,
                        header: "F5: Media",
                        text: `Collaborating thoughtfully with media raises awareness.`
                    },
                    {
                        icon: <SentimentVeryDissatisfied fontSize="large" />,
                        header: "F6: Powerlessness",
                        text: `Communities feel hopeless and experience enormous barriers to address environmental risks.`
                    },
                    {
                        icon: <MenuBook fontSize="large" />,
                        header: "F7: Literacy",
                        text: `Residents struggle to understand scientific, industry, or governmental reports on environmental issues.`
                    }
                ]} />
                <p>
                    Our research made it evident that fenceline community members must form a broad coalition of diverse stakeholders including
                    researchers, government officials, legal experts, and the media in order to stand a chance against industry giants.
                    Addressing all of these concerns and connections would be impossible for a single project; thus we initially decided to narrow our
                    focus to specifically <b>the relationship between communities and researchers</b>, as we felt this was an area that could best benefit from
                    technological intervention.
                </p>
                <p>
                    To pinpoint an area to focus our ideation on, we developed <b>2 hierarchical task analyses (HTAs)</b> to identify the current processes that residents and researchers engage in to
                    collaborate with one another, from both the community and the researchers' point of views.
                </p>
                <Image src={hta} caption={"Hierarchical task analysis of how community members connect with researchers."} />
            </>
    },
    {
        shortTitle: "Requirements",
        title: "System design requirements based on findings",
        summary: "We developed 3 non-functional and 4 functional requirements for possible designs based on our insights",
        contents:
            <>
                <p>
                    Based on our findings (F1–7), we developed <b>3 non-functional design requirements</b> and <b>4 functional design requirements</b>:
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
        shortTitle: "Ideation",
        title: "Iterative ideation narrows problem scope",
        summary: `We generated 11 sketches and voted upon the 2 best ideas, which were further developed as storyboards. 
        Through this process, we narrowed our problem statement to focus on community organizers and residents instead of researchers and communities`,
        contents:
            <>
                <p>
                    Using the initial ideas from our affinity map, the SCAMPER (Substitute, Combine, Adjust, Modify, Put to other uses, Eliminate, Reverse)
                    method of iterating upon or altering existing systems, and the steps outlined in our HTAs, every member of our team individually developed three different idea sketches to address our
                    design requirements. Then, we got together to discuss and merge similar ideas, resulting in 11 alternate possibilities.
                </p>
                <Image src={ideation} caption={"11 design ideas and voting to determine top two choices."} />
                <p>
                    We each voted for our top three choices, discussing our rationale, to determine the designs to pursue in further detail.
                    This resulted in two top ideas:
                </p>
                <GridList items={[
                    {
                        icon: <Biotech fontSize="large" />,
                        header: "Data Collection",
                        text: `A data collection system for allowing residents to log samples and reports ranging from photos of unknown contaminants or sensor readouts to
                        diary entries about adverse health effects or observed factory incidents.
                        The system would organize and aggregate this information based on geography to allow scientists
                        to analyze and identify areas of greatest danger and to issue proper guidance.`
                    },
                    {
                        icon: <Diversity3 fontSize="large" />,
                        header: "Project Management",
                        text: `A project management system for allowing residents and researchers to communicate and keep track of ongoing tasks and action items,
                        including workshops, testing initiatives, and community events. The system would keep both sides informed about what the other is doing,
                        and what each side needs from the other to complete their tasks. It would also explain how each task affects the overall effort in the
                        fight for the community's environmental justice.`
                    }
                ]} />
                <p>
                    We further developed each of these ideas into a storyboard to get a better sense of how they would fit into users' existing practices.
                </p>
                <Image src={storyboard} caption={"Storyboard of the data collection system, idea 1."} />
                <p>
                    As we iterated on our designs, we kept in contact with our users, and it became more and more evident that every sacrifice zone's
                    situation and needs were wholly unique,
                    heavily dependent on the type of pollution they were facing.
                </p>
                <p>
                    In the case of Sterigenics, Ethylene Oxide is colorless gas that is difficult to detect without
                    proper instrumentation, unavailable to average consumers. In addition to this, because EtO is used heavily in the medical fields,
                    many researchers were unwilling to partner with the group or help monitor.
                </p>
                <p>
                    Based on the difficulties of data collection and conflicts of interest with scientists,
                    we decided to focus on the project management idea and to scope down even further to center around intra-community
                    communication, specifically <b>between community organizers and regular residents</b>, leading to our current problem statement.
                </p>
                <Image src={stakeholders} caption={"Community leaders serve as the critical bridge between all other stakeholders and the residents."} />
                <p>
                    With our focus narrowed down to organization and hierarchy within an already existent fenceline community,
                    we eliminated <b>FR 1: Communicate Danger</b> to focus on getting people involved through action items rather than raising initial awareness.
                    We also reoriented <b>FR 3: Facilitate Understanding</b> towards community leaders instead of researchers, leading to our updated functional design requirements:
                </p>
                <ol className="fr">
                    <li>
                        <span><b>Suggest Actions: </b>Design should suggest concrete and actionable items to community members.</span>
                    </li>
                    <li>
                        <span><b>Facilitate Understanding: </b>Design should enable community organizers to develop an intimate and empathetic understanding of constituent residents.</span>
                    </li>
                    <li>
                        <span><b>Encourage Discussion: </b>Design should facilitate creating a safe and open online environment to gather feedback from all community members.</span>
                    </li>
                </ol>
                <p>
                    Our non-functional design requirements remained unchanged.
                </p>
                <p>
                    With these new design requirements, our final idea was to integrate with an existing system many communities
                    already use for a similar purpose—Facebook groups.
                </p>
            </>
    },
    {
        shortTitle: "Prototype",
        title: "Prototype Dashboard empowers users through actions",
        summary: "We designed a dashboard to integrate with Facebook, allowing community organizers to easily keep track of processes and issue tasks to residents",
        contents:
            <>
                <p>
                    Our prototype was developed in Figma, representing a new page/tab on a Facebook group called the "Dashboard".
                    The prototype walks through a community organizer's point of view.
                </p>
                <Heading level={4}>Timelines</Heading>
                <p>
                    Organizers have the ability to create <b>Timelines</b>, which represent a chronological sequence of Facebook posts
                    related to a specific topic, for instance EPA Regulations. This allows residents to easily track the progress of specific processes
                    (<b>NFR 2: Transparent Processes</b>) without having to scroll down the usual Facebook feed (<b>NFR 1: Organization and Hierarchy</b>).
                    Clicking on a node in the timeline reveals a popup of the original post along with comments, allowing for residents to discuss
                    the event and see what others are thinking (<b>FR 3: Encourage Discussion</b>).
                </p>
                <p>
                    Each Timeline event can have specific <b>Action Items</b> related to it that residents should complete, for instance if the node represents
                    data collection then action items might be going to a workshop or sending in samples (<b>FR 1: Suggest Actions</b>).
                </p>
                <Image src={viewTimeline} caption={"Viewing the Urgent Action Items, Timelines, and a post within a Timeline."} gif />
                <Heading level={4}>Action Item Resident Insights</Heading>
                <p>
                    For each Action Item, community organizers can set a deadline and a minimum target number of residents they want to complete it.
                    Organizers can then track the progress of these items, seeing how many residents have completed the task so far.
                </p>
                <p>
                    Organizers can also view insights for each Action Item, which brings out a more detailed view of who has completed the item and reported
                    reasons why those who have yet to complete the item have not done so, which is taken from a popup that residents see on their end.
                    This allows organizers to understand exactly why residents are having trouble completing tasks (<b>FR 2: Facilitate Understanding</b>),
                    while also being able to respond to residents individually in a private space; residents may also leave these comments anonymously,
                    allowing them to feel safer and more open to discussion (<b>FR 3: Encourage Discussion</b>). Community organizers may also send
                    group messages to all residents who reported a specific blocker.
                </p>
                <Image src={viewInsights} caption={"An organizer responds privately through direct message to an individual blocked resident."} gif />
                <Heading level={4}>Urgent Action Items</Heading>
                <p>
                    The most critical Action Items for each Timeline can be pinned to the <b>Urgent Action Items</b> bar at the top of the page for maximum visibility.
                    This lets users see what tasks are the most important to get done, either due to their impact or impending deadline <b>(FR 1: Suggest Actions)</b>.
                    Urgent Action items are tagged and color-coded to make it easier to associate with the corresponding Timeline.
                </p>
                <Image src={setUrgent} caption={"Setting an Action Item as urgent makes it highly visible at the top bar."} gif />
                <Heading level={4}>Marking a Task Complete</Heading>
                <p>
                    After an Action Item is completed, community organizers can mark it complete, sending out
                    a congratulatory post in the feed. Organizers can also choose to have tasks that surpass their target threshold automatically marked for completion.
                    Finally, organizers also have the option to add follow-up posts referencing the results of the completed task in either the Timeline or in the feed,
                    making it clear what effect users have on the process (<b>NFR 2: Transparent Processes</b>).
                </p>
                <Image src={markComplete} caption={"Marking an Urgent Action Item as complete and sending out a status update post."} gif />
                <p>
                    Throughout our design in the Action Items, Timeline events, and Posts, community organizers can add descriptions explaining the effects of events
                    and resident actions, allowing users to understand what has already been done, what they are currently doing, and how it affects them
                    (<b>NFR 3: Non-expert Accessibility</b>).
                </p>
            </>
    },
    {
        shortTitle: "Evaluation",
        title: "Evaluation with users assesses design requirements",
        summary: "We evaluated our design on two design requirements using Heuristic Evaluations with other HCI students and usability testing with fenceline community members.",
        contents:
            <>
                <p>
                    To evaluate the effectiveness of our high-fidelity prototype and investigate any usability issues, we performed two types of evaluations.
                    Due to scope, we specifically focused on two design requirements:
                </p>
                <ol className="nfr">
                    <li>
                        <span><b>Organization and Hierarchy: </b>Design should facilitate organization and hierarchy within a community.</span>
                    </li>
                </ol>
                <ol className="fr">
                    <li>
                        <span><b>Suggest Actions: </b>Design should suggest concrete and actionable items to community members.</span>
                    </li>
                </ol>
                <Heading level={4}>Heuristic Evaluation</Heading>
                <p>
                    In accordance with <Link url={"https://www.nngroup.com/articles/ten-usability-heuristics/"}>Nielsen's 10 Usability Heuristics</Link>,
                    a set of guidelines broadly used within the Design community to assess usability, we had UX designers with
                    no prior knowledge of our system evaluate our design on the 5 most relevant heuristics we chose based on prototyped functionality:
                </p>
                <GridList items={[
                    {
                        icon: <Traffic fontSize="large" />,
                        header: "Visibility of System Status",
                        text: `Does the system always keep users informed about what is going on and what effects user actions have,
                        through appropriate feedback within reasonable time?`
                    },
                    {
                        icon: <Rule fontSize="large" />,
                        header: "Consistency & Standards",
                        text: `Does the system follow platform conventions?
                        Do the same words, actions, and situations mean the same things at all times? Are the same functions always found in the same place?`
                    },
                    {
                        icon: <Directions fontSize="large" />,
                        header: "Recognition > Recall",
                        text: `Does the system minimize memory load by making instructions, data, actions, and options visible
                        whenever they are needed or referenced?`
                    },
                    {
                        icon: <Keyboard fontSize="large" />,
                        header: "Flexibility & Efficiency of Use",
                        text: `Does the system support both beginner and expert users through gradually revealing additional information?
                        Does the system allow experienced users to customize or quickly perform frequent actions (e.g. key bindings, gestures, shortcuts)?`
                    },
                    {
                        icon: <Dashboard fontSize="large" />,
                        header: "Aesthetic & Minimalistic Design",
                        text: `Is every word, color, font, button, or other unit of information necessary to the system?
                        Does everything serve a unique, important purpose?`
                    }
                ]} />
                <Heading level={5}>Participants</Heading>
                <p>
                    4 HCI Master's Students.
                </p>
                <Heading level={5}>Procedure</Heading>
                <p>
                    Participants were given the clickable prototype and a worksheet with each of these heuristics broken down into criteria evaluating
                    very specific parts of the system, for instance button feedback or typography.
                    Each of these criteria was rated on a scale from 0, a complete usability failure with no positive experiences, to 5,
                    an elegant and intuitive design that wastes zero time and creates no confusion.
                </p>
                <p>
                    Each participant was paired with one researcher from our team. The researcher explained the system briefly, and then asked the participant to
                    walk through 3 tasks broadly corresponding to the functions of the prototype (viewing a timeline, responding to a blocked resident,
                    and marking a task complete), <b>thinking aloud</b> as they used the system. Researches took note of any voiced or observed confusions
                    when using the system.
                </p>
                <p>
                    After finishing all three tasks, participants were given the worksheet to complete, reflecting on the entire system, while also having the opportunity
                    to add more detailed notes about specific areas of confusion or features for each heuristic.
                </p>
                <p>
                    Finally, participants openly discussed their experience with researchers, highlighting what they liked and what they found confusing,
                    as well as the reasons behind it and suggested improvements.
                </p>
                <Heading level={4}>Usability Testing</Heading>
                <p>
                    Users from the target demographic with no prior knowledge of the design evaluated the system through set tasks and compared it to their existing experiences.
                </p>
                <Heading level={5}>Participants</Heading>
                <p>
                    1 community leader, an administrator from the Stop Sterigenics Facebook group.
                    <br />
                    1 community resident, a regular user of the Stop Sterigenics Facebook group.
                </p>
                <Heading level={5}>Procedure</Heading>
                <p>
                    Participants were interviewed by a pair of researchers. After a brief overview of the system,
                    participants were asked to go through tasks corresponding to the prototype functions, <b>thinking aloud</b> as they used the system.
                    Researchers took notes of actions, confusions, and interactions.
                </p>
                <p>
                    After finishing all the tasks, participants were given 2 worksheets to complete. One was a System Usability Scale (SUS) measuring the overall
                    efficacy of the system in achieving their goals, and the other was a list of adjectives in which users circled the words that best described
                    their experience.
                </p>
                <Heading level={4}>Analysis</Heading>
                <p>
                    The scores of the heuristic evaluations and the SUS forms were averaged to assess general usability of the system as a whole.
                    Notes from all evaluation sessions were organized into likes, dislikes, confusions, and wants, which were then coded by feature
                    and heuristic.
                </p>
                <Heading level={4}>Findings</Heading>
                <p>
                    After finishing all the tasks, participants were given 2 worksheets to complete. One was a System Usability Scale measuring the overall
                    efficacy of the system in achieving their goals, and the other was a list of adjectives in which users circled the words that best described
                    their experience.
                </p>
            </>
    },
    {
        shortTitle: "Future",
        title: "Evaluation with users assesses design requirements",
        summary: "We evaluated our design on two design requirements using Heuristic Evaluations with other HCI students and usability testing with fenceline community members.",
        contents:
            <>
                <p>
                    To evaluate the effectiveness of our high-fidelity prototype and investigate any usability issues, we performed two types of evaluations.
                    Due to scope, we specifically focused on two design requirements:
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

