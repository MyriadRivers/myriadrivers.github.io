import Sidebar from "../../../components/Sidebar";
import { useEffect, useRef, useState } from "react";
import Expandable from "../../../components/Expandable";
import ProjectTitle from "../../../components/ProjectTitle";
import Image from "../../../components/Image";
import StyledPage from "../../../components/StyledPage";

import mainImg from "./sewsustainable.png";
import { main } from "../../../styles/themes";

function SewSustainable() {
    const headings = ["Description", "Problem", "Research", "Design", "References"];
    const headingRefs = useRef<Array<HTMLDivElement | null>>([]);
    const contentsRef = useRef<HTMLDivElement | null>(null);

    const [scrollRef, setScrollRef] = useState<HTMLDivElement | null>(null);

    useEffect(() => {
        setScrollRef(contentsRef.current);
    }, [contentsRef.current])

    return (<StyledPage>
        <Sidebar headings={headings} scrollRef={scrollRef} headingRefs={headingRefs.current} />
        <div className={"projectContents"} ref={contentsRef}>
            <ProjectTitle 
                text={"SewSustainable"} 
                subtitle={"Mar–Apr 2023"} 
                links={[
                    {text: "figma", url: "https://www.figma.com/file/SyeAAZQ1fwMlubLZ7tzdog/Ed-Tech-Project-Prototype?type=design&node-id=0-1&mode=design"}
                ]} 
                ref={el => headingRefs.current[0] = el} 
            >
                <Image src={mainImg} />
                <p>
                    SewSustainable is a hypothetical educational app meant to help people practice more sustainable fashion.
                    <br/>
                    <br/>
                    Team: Jason Gao, Marissa Gardner, Naz Ozturk, Spencer Kim
                </p>
            </ProjectTitle>
            <Expandable 
                heading={"Problem"} 
                summary={"The fashion industry is a major polluter. Sustainable fashion is about responsibility on both consumer and manufacturing sides"} 
                ref={el => headingRefs.current[1] = el} 
            >
                <p>
                    The fashion industry is a major contributor to global climate change, as measured in tons of Carbon Dioxide Equivalents (CO2eq) [1].
                    Besides ecological effects such as massive water consumption and production of harmful microplastics, the industry also employs
                    hundreds of millions of people worldwide [2], many of whom work in sweatshop conditions. 
                </p>
                <p>
                    Sustainable fashion, as measured by certifications such as the EU Ecolabel and OEKO-TEX Made in Green label [3], should broadly be:
                    <ol>
                        <li><b>Environmentally friendly:</b> How are garments sourced and manufactured, and how is waste managed?</li>   
                        <li><b>Long lasting:</b> Does the garment maintain dimensions and color? Does the garment resist damage from prolonged wear?</li>   
                        <li><b>Socially responsible:</b> How are workers treated throughout the garment's supply chain?</li>    
                    </ol> 
                </p>
            </Expandable>
            <Expandable 
                heading={"Research"} 
                summary={"The app is separated into three main components: the front end, the API, and the back end"} 
                ref={el => headingRefs.current[2] = el} 
            >
                <p>
                The app is separated into three main components: the front end, the API, and the back end.
                </p>
            </Expandable>
            <Expandable 
                heading={"Design"} 
                summary={"The app is separated into three main components: the front end, the API, and the back end"} 
                ref={el => headingRefs.current[3] = el} 
            >
                <p>
                The app is separated into three main components: the front end, the API, and the back end.
                </p>
            </Expandable>
            <Expandable 
                heading={"References"} 
                summary={"The app is separated into three main components: the front end, the API, and the back end"} 
                ref={el => headingRefs.current[4] = el} 
            >
                <p>
                The app is separated into three main components: the front end, the API, and the back end.
                </p>
            </Expandable>
            <div className={"bottomSpace"}></div>
        </div>
    </StyledPage>);
}

export default SewSustainable;