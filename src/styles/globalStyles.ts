import { createGlobalStyle } from 'styled-components'

import AverageTtf from "../assets/fonts/Average/Average-Regular.ttf";
import AverageEot from "../assets/fonts/Average/Average-Regular.eot";
import AverageSvg from "../assets/fonts/Average/Average-Regular.svg";
import AverageWoff from "../assets/fonts/Average/Average-Regular.woff";
import AverageWoff2 from "../assets/fonts/Average/Average-Regular.woff2";

import FreeSansTtf from "../assets/fonts/FreeSans/FreeSans.ttf";
import FreeSansOtf from "../assets/fonts/FreeSans/FreeSans.otf";
import FreeSansEot from "../assets/fonts/FreeSans/FreeSans.eot";
import FreeSansSvg from "../assets/fonts/FreeSans/FreeSans.svg";
import FreeSansWoff from "../assets/fonts/FreeSans/FreeSans.woff";
import FreeSansWoff2 from "../assets/fonts/FreeSans/FreeSans.woff2";
import breakpoints from './breakpoints';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Average";
        src: url(${AverageTtf}) format("truetype"),
             url(${AverageSvg}) format("svg"),
             url(${AverageEot}) format("embedded-opentype"),
             url(${AverageWoff}) format("woff"),
             url(${AverageWoff2}) format("woff2");
    }

    @font-face {
        font-family: "Free Sans";
        src: url(${FreeSansTtf}) format("truetype"),
             url(${FreeSansOtf}) format("otf"),
             url(${FreeSansSvg}) format("svg"),
             url(${FreeSansEot}) format("embedded-opentype"),
             url(${FreeSansWoff}) format("woff"),
             url(${FreeSansWoff2}) format("woff2");
    }

    body {
        font-family: ${props => props.theme.bodyFont};
        color: ${props => props.theme.main};
        font-size: 16pt;
        @media ${breakpoints.mobile} {
            font-size: 12pt;
        }

        margin: 0px;
        padding: 0px;

        -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
        -moz-box-sizing: border-box;    /* Firefox, other Gecko */
        box-sizing: border-box;

        height: 100%;
    }

    html {
        height: 100%;
        margin: 0px;
    }

    #root, .App {
        height: 100%;
    }

    a {
        text-decoration: inherit;
        color: inherit;
    }

    p {
        margin: 0px 0px;
        line-height: 24pt;
    }
`

export default GlobalStyle