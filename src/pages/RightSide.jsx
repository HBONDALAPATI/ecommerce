import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as f2 from '../store/actions'
import Filters from './Filters';
import Products from './Products';

class RightSide extends Component {
    render() {
        return (
            <div className="right">
                 <Filters />
                 <Products />
            </div>
        );
    }
}
const f1 = state => state
export default connect(f1, f2) (RightSide);