import React, { Component } from 'react';
import Header from '../components/Header';
import Meta from '../components/Meta';
import styled from 'styled-components';
const MyButton = styled.button`
    background: red;
    font-size: ${props =>( props.huge ? '100px': '50px')};
    .fox {
        font: 100px;
    }
`;

class Page extends Component {
    render() {
        return (
            <div>
                <Meta/>
                <Header/>
                <MyButton huge>
                    Click Me
                    <span className="fox">🦊</span>
                </MyButton>
                { this.props.children}
                <MyButton>
                    Click Me
                    <span className="fox">🦊</span>
                </MyButton>
            </div>
        );
    }
}

export default Page;
