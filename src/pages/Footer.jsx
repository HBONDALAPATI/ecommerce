import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as f2 from '../store/actions'

class Footer extends Component {
    render() {
        return (
            <div className="footer">
            -----   React redux store mini eCommerce Project -----
            </div>
        );
    }
}
const f1 = state => state
export default connect(f1, f2) (Footer);