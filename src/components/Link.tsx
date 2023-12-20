import styled from "styled-components";

const StyledLink = styled.a`
    color: ${props => props.theme.accent};    
`

const Link = ({text, url}: {text: string, url: string}) => {
    return (
        <StyledLink href={url} target="_blank">
            {text}
        </StyledLink>
    )
}

export default Link;