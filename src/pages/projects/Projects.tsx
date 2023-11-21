import Grid from "../../components/Grid/Grid";
import { projects } from "../../common";
import { Outlet } from "react-router-dom";

function Projects() {
    return (
        <div>
            <Grid tiles={projects} />
        </div>
    );
}

export default Projects;