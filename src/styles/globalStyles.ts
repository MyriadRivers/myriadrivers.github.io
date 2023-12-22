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

import SFProEOT from "../assets/fonts/SFPro/SFPro-Regular.eot";
import SFProSVG from "../assets/fonts/SFPro/SFPro-Regular.svg";
import SFProTTF from "../assets/fonts/SFPro/SFPro-Regular.ttf";
import SFProWOFF from "../assets/fonts/SFPro/SFPro-Regular.woff";
import SFProWOFF2 from "../assets/fonts/SFPro/SFPro-Regular.woff2";

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

    @font-face {
        font-family: "SF Pro";
        src: url(${SFProTTF}) format('truetype'),
            url(${SFProSVG}) format('svg'),
            url(${SFProEOT}) format('embedded-opentype'),
            url(${SFProWOFF}) format('woff'),
            url(${SFProWOFF2}) format('woff2');
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
        overflow: hidden;
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
        color: ${props => props.theme.accent};
    }

    p, ol, ul {
        margin: 0px 0px;
        line-height: 1.5em;
    }
`

export default GlobalStyle