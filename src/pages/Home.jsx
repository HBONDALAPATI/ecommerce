import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as f2 from '../store/actions'
import LeftSide from './LeftSide';
import RightSide from './RightSide';

class Home extends Component {
    render() {
        return (
            <div className="main">
               <LeftSide />
               <RightSide />
            </div>
        );
    }
}
const f1 = state => state
export default connect(f1, f2) (Home);