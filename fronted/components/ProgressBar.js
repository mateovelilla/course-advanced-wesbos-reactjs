// source: https://medium.com/@apalshah/next-js-how-to-make-your-own-progress-bar-indicator-component-easily-445e58777473
import { Component } from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';
import PropTypes from 'prop-types';

class ProgressBar extends Component {
    componentDidMount() {
        const { options } = this.props;
        if (options) {
          NProgress.configure(options);
        }
    
        Router.events.on('routeChangeStart', () => {
            NProgress.set(0.3);
            NProgress.start(); 
        });
        Router.events.on('routeChangeComplete', () => {
            NProgress.done(true);
        });
        Router.events.on('routeChangeError', () => {
            NProgress.done(true);
        });
    }

    render () {
        return (<template/>)
    }

} 
ProgressBar.propTypes = {
    color: PropTypes.string,
    startPosition: PropTypes.number,
    stopDelayMs: PropTypes.number,
    options: PropTypes.object,
};

export default ProgressBar;