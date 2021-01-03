// source: https://medium.com/@apalshah/next-js-how-to-make-your-own-progress-bar-indicator-component-easily-445e58777473
import { Component } from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';
import PropTypes from 'prop-types';

class ProgressBar extends Component {
    timer = null;
    componentDidMount() {
        const { options } = this.props;
        if (options) {
          NProgress.configure(options);
        }
    
        Router.events.on('routeChangeStart', () => {
            NProgress.set(0.3);
            NProgress.start(); 
            console.log('Entro aca')
        });
        Router.events.on('routeChangeComplete', () => {
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                console.log('Entro aca')
              NProgress.done(true);
            }, 50000);
        });
        Router.events.on('routeChangeError', () => {
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
              NProgress.done(true);
            }, 5000);
        });
    }

    render () {
        return (<div></div>)
    }

} 
ProgressBar.propTypes = {
    color: PropTypes.string,
    startPosition: PropTypes.number,
    stopDelayMs: PropTypes.number,
    options: PropTypes.object,
};

export default ProgressBar;