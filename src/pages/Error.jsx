import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as f2 from '../store/actions'

class Error extends Component {
    render() {
        return (
            <div className="error">
                Error page
            </div>
        );
    }
}
const f1 = state => state
export default connect(f1, f2) (Error);