import React, { Component } from 'react'
import Index from './index';

export async function getServerSideProps({ query }) {
    return {
      props: {
        ...query
      },
    }
} 
export default class items extends Component {
    render() {
        return (
            <div>
                <Index page={this.props.page || 1}/>
            </div>
        )
    }
}
