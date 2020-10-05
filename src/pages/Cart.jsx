import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as f2 from '../store/actions'

class Cart extends Component {
    render() {
        return (
            <div className="cart">
                Cart
            </div>
        );
    }
}
const f1 = state => state
export default connect(f1, f2) (Cart);