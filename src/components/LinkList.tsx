import styled from "styled-components";

const StyledLinkList = styled.div`
    .linksList {
        color: ${props => props.theme.accent};
        display: flex;
        flex-wrap: wrap;
        gap: 0.5em;
    }

    .individualLink {
        border: solid;
        padding: 5px;
    }
`

const openFile = (path: string) => {
    window.open(path);
}

const LinkList = ({links}: {links: Array<{text: string, url: string}>}) => {
    return (
        <StyledLinkList>
            {links.length > 0 && <div className={"linksList"}>
                {links.map((link, index) => 
                    <a href={link.url} className={"individualLink"} target="_blank">{link.text}↗</a>
                )}
            </div>}
        </StyledLinkList>
    )
}

export default LinkList;