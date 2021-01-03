import styled from 'styled-components';

const ProgressStyle = styled.div`

#nprogress {
    pointer-events: none;
}

#nprogress .bar {
    background: ${ props => props.theme.progressBarColor};
    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;
    width: 100%;
    height: ${props => props.theme.progressBarHeight}px;
}

#nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px ${props => props.theme.progressBarColor}, 0 0 5px ${ props => props.theme.progressBarColor};
    opacity: 1;
    -webkit-transform: rotate(3deg) translate(0px, -4px);
    -ms-transform: rotate(3deg) translate(0px, -4px);
    transform: rotate(3deg) translate(0px, -4px);
}

#nprogress .spinner {
    display: "block";
    position: fixed;
    z-index: 1031;
    top: 15px;
    right: 15px;
}

#nprogress .spinner-icon {
    width: 18px;
    height: 18px;
    box-sizing: border-box;
    border: solid 2px transparent;
    border-top-color: ${props => props.theme.progressBarColor};
    border-left-color: ${props => props.theme.progressBarColor};
    border-radius: 50%;
    -webkit-animation: nprogresss-spinner 400ms linear infinite;
    animation: nprogress-spinner 400ms linear infinite;
}

.nprogress-custom-parent {
    overflow: hidden;
    position: relative;
}
.nprogress-custom-parent #nprogress .spinner,
.nprogress-custom-parent #nprogress .bar {
    position: absolute;
}
@-webkit-keyframes nprogress-spinner {
    0% {
        -webkit-transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
    }
}
@keyframes nprogress-spinner {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
`;

export default ProgressStyle;
