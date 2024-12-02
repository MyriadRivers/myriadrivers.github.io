import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react"
import NavOption from "./NavOption";
import breakpoints from "../../styles/breakpoints";
import useMedia from "../../hooks/useMedia";

import riverImage from "../../assets/images/river.png";
import menuIcon from "../../assets/icons/menu.png";

const StyledNavbar = styled.div<{ $open: boolean }>` 
    width: 100%;
    background: ${props => props.theme.main};
    /* justify-content: space-between; */
    justify-content: end;
    gap: 40px;
    display: flex;
    align-items: center;
    position: relative;
    mix-blend-mode: multiply;

    @media ${breakpoints.mobile} {
        align-items: start;
        background: none;
        mix-blend-mode: normal;
    }

    .mobileNavbar {
        width: 100%;
        /* background: lavender; */
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: start;
        /* align-items: center; */
    }

    .dropdown {
        position: absolute;
        display: ${props => props.$open ? "" : "none"};
        text-align: right;
        z-index: 1;
    }

    .homeLink {
        /* background: pink; */
        font-family: ${props => props.theme.headerFont};
        font-size: 2rem;
        letter-spacing: 0.25rem;
        line-height: 1.65em;

        margin-top: -.4em;

        height: 1.175em;
        display: flex;
        flex-direction: row;
        gap: 0.3em;
        overflow: hidden;
    }

    .riverLogo {
        height: 90%;
        margin-right: 20px;
    }

    .menuIcon {
        height: 1em;
        padding-right: 5pt;
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
        {mobile ?
            // TODO: Mobile navbar should probably just be just a separate component compared to navbar
            <div className={"mobileNavbar"}>
                <NavOption active={true} onClick={() => setOpen(true)} >{<img src={menuIcon} className={"menuIcon"} alt={"Menu"} />}</NavOption>
                {open &&
                    <div className={"dropdown"} ref={dropdownRef}>
                        <Link to={links[active]} onClick={() => setOpen(false)}>
                            {<NavOption active={true} >{links[active]}</NavOption>}
                        </Link>
                        {(() => {
                            const otherLinks = links.filter((_, index) => index !== active);

                            return (
                                otherLinks.map((link, index) => (
                                    <Link to={otherLinks[index]} key={index} onClick={() => {
                                        setOpen(false);
                                        setActive(links.indexOf(otherLinks[index]));
                                    }}>{<NavOption active={false} >{link}</NavOption>}</Link>
                                ))
                            )
                        })()}
                    </div>}
                <div className={"homeLink"}>
                    <Link to={links[0]} onClick={() => {
                        setOpen(false);
                        setActive(0);
                    }}>
                        <img src={riverImage} alt={"Jason Gao"} className={"riverLogo"} />
                        JASON GAO
                    </Link>
                </div>
            </div>
            :
            links.map((link, index) => (
                <Link to={links[index]} onClick={() => setActive(index)} key={index}>{<NavOption active={active === index} >{link}</NavOption>}</Link>
            ))}
    </StyledNavbar>);
}

export default Navbar;