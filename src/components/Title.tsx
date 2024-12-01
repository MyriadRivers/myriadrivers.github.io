import styled from "styled-components";
import riverImage from "../assets/images/river.png"
import breakpoints from "../styles/breakpoints";

import waves from "../assets/sounds/waves.wav";
import bubbles from "../assets/sounds/bubbles.wav";
import meltwater from "../assets/sounds/meltwater.wav";
import fountain from "../assets/sounds/fountain.wav";
import meltwater2 from "../assets/sounds/meltwater2.wav";
import stream from "../assets/sounds/stream.wav";
import stream2 from "../assets/sounds/stream2.wav";
import umbrella from "../assets/sounds/umbrella.wav";
import drain from "../assets/sounds/drain.wav";
import storm from "../assets/sounds/storm.wav";
import { useState } from "react";
import { Link } from "react-router-dom";

const StyledTitle = styled.div`
    font-family: ${props => props.theme.headerFont};
    font-size: calc(15pt + 1vw);
    letter-spacing: 0.25em;

    @media ${breakpoints.mobile} {
        display: none;
    }

    justify-content: center;

    .river {
        height: 1.05em;
        margin-right: 0.25em;

        &:hover {
            cursor: pointer;
        }
    }

    .homeLink {
        display: flex;
    }
    
    text-transform: uppercase;
    
    display: flex;
`

function Title() {
    const [playing, setPlaying] = useState<boolean>(false);

    const playWater = () => {
        const wavesAudio = new Audio(waves);
        const bubblesAudio = new Audio(bubbles);
        const meltAudio = new Audio(meltwater);
        const fountainAudio = new Audio(fountain);
        const melt2Audio = new Audio(meltwater2);
        const streamAudio = new Audio(stream);
        const stream2Audio = new Audio(stream2);
        const umbrellaAudio = new Audio(umbrella);
        const drainAudio = new Audio(drain);
        const stormAudio = new Audio(storm);

        const waterAudio = [wavesAudio, bubblesAudio, meltAudio, fountainAudio, melt2Audio, streamAudio, stream2Audio, umbrellaAudio, drainAudio, stormAudio];

        const randomIndex = Math.floor(Math.random() * waterAudio.length);

        waterAudio.forEach(sample => {
            sample.addEventListener("ended", () => {
                setPlaying(false);
            })
        });

        if (!playing) {
            waterAudio[randomIndex].play();
            setPlaying(true);
        }
    }

    return (
        <StyledTitle>
            <Link to={"/home"} className="homeLink">
                Jason
                <img src={riverImage} className={"river"} alt={"川"} onClick={playWater} style={{ filter: playing ? "brightness(120%)" : "brightness(100%)" }} />
                Gao
            </Link>
        </StyledTitle>);
}

export default Title;