import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from '../components/Header';
import Meta from '../components/Meta';
const theme = {
  red: '#FF0000', 
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offwhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  progressBarColor: '#FF0000',
  progressBarHeight: 3,
};

const StylePage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;
const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;
const GlobalStyle = createGlobalStyle `
  @font-face {
    font-family: 'radnika_next';
    src: url('/radnikanext-medium-webfont.woff2')
    format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  html {
    box-sizing:border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body{
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'radnika_next';
  }
  
  a {
    text-decoration: none;
    color: ${theme.black};

  }
  
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
class Page extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <GlobalStyle></GlobalStyle>
                <StylePage>
                    <Meta/>
                    <Header/>
                    <Inner>{this.props.children}</Inner>
                </StylePage>
            </ThemeProvider>
        );
    }
}

export default Page;
