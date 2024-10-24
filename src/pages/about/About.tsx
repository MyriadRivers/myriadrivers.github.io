import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";
import LinkList from "../../components/LinkList";
import Image from "../../components/Image";

import gulfFritillary from "../../assets/images/gulf_fritillary.jpg";
import blueDasher from "../../assets/images/blue_dasher.jpg";
import arabesqueOrbweaver from "../../assets/images/arabesque_orbweaver.jpg";
import Link from "../../components/Link";

const StyledLinks = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;

    .aboutText {
        display: flex;
        flex-direction: column;
        gap: 1em;

        font-size: calc(5pt + 1vw);

        /* margin: auto; */
        overflow: none;

        @media ${breakpoints.mobile} {
            margin: 0;
        }
    }

    .imageContainer {
        /* background: pink; */
        display: flex;

        img {
            height: 25vh;
        } 
    }
`
const otherLinks = [
    { text: "bugs", url: "https://www.instagram.com/riveroptera/" },
    { text: "origami", url: "https://www.instagram.com/manifoldrivers/" },
    { text: "music", url: "https://www.youtube.com/@riiiver" }
]

function About() {
    return (<StyledLinks>
        <div className={"aboutText"}>
            <p>
                Hi, I'm Jason!
            </p>
            <p>
                I'm a current Master's of Human-Computer Interaction student at the Georgia Institute of Technology, where I did my undergraduate study in Computer Science.
            </p>
            <p>
                My undergrad degree, along with internships at companies such as PlayAGS and IBM, equipped me with deep respect and admiration for the engineering process.
                However, I wanted to work more directly on understanding and designing for problems that actual people are facing—leading me to the HCI degree.
            </p>
            <p>
                I apply the curiosity and meticulousness that served me in my full-stack engineering to user-centered research and design—I love meeting new people, asking questions,
                and truly understanding and empathizing with others. My industry computer science experience helps me design with an understanding of the engineering team as
                a key stakeholder—allowing me to design usable and feasible systems.
            </p>
            <p>
                In my free time, I enjoy photographing terrestrial arthropods, making music with my computer, crafts, and coding personal projects.
                You can check out some of those links below!
            </p>
            <p>
                This site was developed using TypeScript and React.js, bootstrapped with Create React App, and styled using styled-components.
            </p>
            <p>
                Contact:
                <br />
                <Link url={"mailto:jasongao678@gmail.com"}>jasongao678@gmail.com</Link>
            </p>
            <p>
                Other links:
            </p>
            <LinkList links={otherLinks}></LinkList>
            <div className={"imageContainer"}>
                {(() => {
                    switch (Math.floor(Math.random() * 3)) {
                        case 0:
                            return <Image src={blueDasher} caption={"Blue Dasher found on the GT campus"} />
                        case 1:
                            return <Image src={arabesqueOrbweaver} caption={"Arabesque Orbweaver found on a boardwalk"} />
                        default:
                            return <Image src={gulfFritillary} caption={"Gulf Fritillary found on the GT campus"} />
                    }
                })()}
            </div>
        </div>
    </StyledLinks>);
}

export default About;