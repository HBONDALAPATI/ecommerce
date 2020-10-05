import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as f2 from '../store/actions'

class Signup extends Component {
    render() {
        return (
            <div className="signup">
                <h1>Register to Shop</h1>
                <p>username</p>
                <input placeholder="your username or email address" />
                <p>password</p>
                <input placeholder="your password" />
                <br/>
                <br/>
                <button>Login</button>
            </div>
        );
    }
}
const f1 = state => state
export default connect(f1, f2) (Signup);