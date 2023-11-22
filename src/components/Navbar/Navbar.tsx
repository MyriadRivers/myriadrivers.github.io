import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react"
import NavOption from "./NavOption";

const StyledNavbar = styled.div`
    display: flex;
    gap: 40px;
`

function Navbar({ options, links }: { options: Array<string>, links: Array<string> }) {
    const [active, setActive] = useState<number>(0);

    return (<StyledNavbar>
        {options.map((option, index) => (
            <Link to={links[index]} onClick={() => setActive(index)}>{<NavOption text={option} active={active === index} />}</Link>
        ))}
    </StyledNavbar>);
}

export default Navbar;