import { Grid2 } from "@mui/material";
import MediaContainer from "../MediaContainer";
import TimelineSection from "./TimelineSection";

const Timeline = ({sections}: {sections: Array<{
    name: string,
    weeks: number,
    events?: Array<string>
}>}) => {
    return (
        <MediaContainer>
            <Grid2 container spacing={"10px"} marginTop={"20px"}>
                {sections.map((section, i) => (
                    <TimelineSection name={section.name} weeks={section.weeks} events={section.events} key={i}/>
                ))}
            </Grid2>
        </MediaContainer>
    )
}

export default Timeline;