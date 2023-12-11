import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react"
import NavOption from "./NavOption";
import breakpoints from "../../styles/breakpoints";
import useMedia from "../../hooks/useMedia";
import riverLogo from "../../assets/images/river_logo.png";

const StyledNavbar = styled.div<{$open: boolean}>` 
    background: ${props => props.theme.main};
    justify-content: space-between;
    display: flex;
    position: relative;

    @media ${breakpoints.mobile} {
        background: none;
        flex-direction: row-reverse;
    }

    .dropdown {
        position: absolute;
        display: ${props => props.$open ? "" : "none"};
        text-align: right;
    }

    .homeLink {
        height: calc((10pt + 1vw) * 2);
    }

    .riverLogo {
        height: 100%;
    }

`

function Navbar({ links }: { links: Array<string> }) {
    const [active, setActive] = useState<number>(0);
    // Only for mobile, if drop down is open or not
    const [open, setOpen] = useState<boolean>(false);
    const mobile = useMedia(`${breakpoints.mobile}`);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Close the dropdown when you click out of it
        document.addEventListener("click", (e) => {
            if (dropdownRef.current && e.target) {
                if (open && dropdownRef.current.contains(e.target as Node)) {
                    setOpen(false);
                }
            }
        })
    }, [open])

    return (<StyledNavbar $open={open}>
        { mobile ? 
        <>
            <NavOption text={links[active]} active={true} onClick={() => setOpen(true)}/> 
            {open && 
            <div className={"dropdown"} ref={dropdownRef}>
                <Link to={links[active]} onClick={() => setOpen(false)}>{<NavOption text={links[active]} active={true} />}</Link>
                {(() => {
                    const otherLinks = links.filter((_, index) => index !== active);

                    return (
                        otherLinks.map((link, index) => (
                            <Link to={otherLinks[index]} onClick={() => {
                                setOpen(false);
                                setActive(links.indexOf(otherLinks[index]));
                            }}>{<NavOption text={link} active={false} />}</Link>
                        ))
                    )
                })()}
            </div>}
            <Link to={links[0]} className={"homeLink"}><img src={riverLogo} alt={"Jason Gao"} className={"riverLogo"} /></Link>
        </>
        :
        links.map((link, index) => (
            <Link to={links[index]} onClick={() => setActive(index)}>{<NavOption text={link} active={active === index} />}</Link>
        ))}
    </StyledNavbar>);
}

export default Navbar;