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

import ParkinsansEOT from "../assets/fonts/Parkinsans/eot.eot";
import ParkinsansSVG from "../assets/fonts/Parkinsans/svg.svg";
import ParkinsansTTF from "../assets/fonts/Parkinsans/ttf.ttf";
import ParkinsansWOFF from "../assets/fonts/Parkinsans/woff.woff";
import ParkinsansWOFF2 from "../assets/fonts/Parkinsans/woff2.woff2";

import FunnelSansEOT from "../assets/fonts/FunnelSans/regular.eot";
import FunnelSansSVG from "../assets/fonts/FunnelSans/regular.svg";
import FunnelSansTTF from "../assets/fonts/FunnelSans/regular.ttf";
import FunnelSansWOFF from "../assets/fonts/FunnelSans/regular.woff";
import FunnelSansWOFF2 from "../assets/fonts/FunnelSans/regular.woff2";

import FunnelSansLightEOT from "../assets/fonts/FunnelSans/light.eot";
import FunnelSansLightSVG from "../assets/fonts/FunnelSans/light.svg";
import FunnelSansLightTTF from "../assets/fonts/FunnelSans/light.ttf";
import FunnelSansLightWOFF from "../assets/fonts/FunnelSans/light.woff";
import FunnelSansLightWOFF2 from "../assets/fonts/FunnelSans/light.woff2";

import AfacadFluxEOT from "../assets/fonts/AfacadFlux/eot.eot";
import AfacadFluxSVG from "../assets/fonts/AfacadFlux/svg.svg";
import AfacadFluxTTF from "../assets/fonts/AfacadFlux/ttf.ttf";
import AfacadFluxWOFF from "../assets/fonts/AfacadFlux/woff.woff";
import AfacadFluxWOFF2 from "../assets/fonts/AfacadFlux/woff2.woff2";

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

    @font-face {
        font-family: "Parkinsans";
        src: url(${ParkinsansTTF}) format('truetype'),
            url(${ParkinsansSVG}) format('svg'),
            url(${ParkinsansEOT}) format('embedded-opentype'),
            url(${ParkinsansWOFF}) format('woff'),
            url(${ParkinsansWOFF2}) format('woff2');
    }
    @font-face {
        font-family: "Funnel Sans";
        src: url(${FunnelSansTTF}) format('truetype'),
            url(${FunnelSansSVG}) format('svg'),
            url(${FunnelSansEOT}) format('embedded-opentype'),
            url(${FunnelSansWOFF}) format('woff'),
            url(${FunnelSansWOFF2}) format('woff2');
    }
    @font-face {
        font-family: "Funnel Sans Light";
        src: url(${FunnelSansLightTTF}) format('truetype'),
            url(${FunnelSansLightSVG}) format('svg'),
            url(${FunnelSansLightEOT}) format('embedded-opentype'),
            url(${FunnelSansLightWOFF}) format('woff'),
            url(${FunnelSansLightWOFF2}) format('woff2');
    }
    @font-face {
        font-family: "Afacad Flux";
        src: url(${AfacadFluxTTF}) format('truetype'),
            url(${AfacadFluxSVG}) format('svg'),
            url(${AfacadFluxEOT}) format('embedded-opentype'),
            url(${AfacadFluxWOFF}) format('woff'),
            url(${AfacadFluxWOFF2}) format('woff2');
    }

    body {
        font-family: ${props => props.theme.bodyFont};
        color: ${props => props.theme.main};

        // TODO: Standardize font sizes, header sizes, margins and store them in Theme
        font-size: 16pt;

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