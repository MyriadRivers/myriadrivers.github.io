import Grid from "../../components/Grid/Grid";
import { projects } from "../../common";
import styled from "styled-components";

const StyledProjects = styled.div`
    height: 100%;
    overflow: auto;
`

function Projects() {
    return (
        <StyledProjects>
            <Grid tiles={projects} />
        </StyledProjects>
    );
}

export default Projects;