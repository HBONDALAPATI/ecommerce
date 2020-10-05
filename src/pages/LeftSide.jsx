import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as f2 from '../store/actions'

class LeftSide extends Component {
    setTagname(str)
	{
		this.props.setTagname(str)
	}
    render() {
        let {tags, tagname} = this.props
        return (
            <div className="left">
                {
                    tags.map(item => 
                        <div className={tagname ===item.t?'active':''} onClick={this.setTagname.bind(this, item.t)}>
                         {item.t}
                         <span>{item.c}</span>
                        </div>)}
            </div>
        );
    }
}
const f1 = state => state
export default connect(f1, f2) (LeftSide);