import styled from "styled-components";
import { Link } from "react-router-dom";
import Heading from "./Heading";

const StyledNavbar = styled.div`
    display: flex;
    gap: 20px;
`

function Navbar({ options, links }: { options: Array<string>, links: Array<string> }) {
    return (<StyledNavbar>
        {options.map((option, index) => (
            <Link to={links[index]} >{<Heading level={3}>{option}</Heading>}</Link>
        ))}
    </StyledNavbar>);
}

export default Navbar;