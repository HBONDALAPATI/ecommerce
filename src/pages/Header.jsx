import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as f2 from '../store/actions'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <Link to="/">home</Link>
                <Link to="/login">login</Link>
                <Link to="/signup">signup</Link>
                <Link to="/cart">cart</Link>
                <Link to="/orders">orders</Link>
                <Link to="/checkout">checkout</Link>
                <Link to="/">logout</Link>
            </div>
        );
    }
}
const f1 = state => state
export default connect(f1, f2) (Header);