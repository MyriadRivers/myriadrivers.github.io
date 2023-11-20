import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNavbar = styled.div`
    display: flex;
`

function Navbar({ options, links }: { options: Array<string>, links: Array<string> }) {
    return (<StyledNavbar>
        {options.map((option, index) => (
            <Link to={links[index]} >{option}</Link>
        ))}
    </StyledNavbar>);
}

export default Navbar;