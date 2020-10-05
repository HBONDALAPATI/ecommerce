import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as f2 from '../store/actions'
import Rating from './Rating';

class Item extends Component {
    render() {
        
        let {x, tagname}=this.props
		let p=<div className="item">
							<img src={require("./"+x.image)} alt="product photo" />
							<div>{x.title}</div>
							<div>{x.description}</div>
							<div>{x.old}</div>
							<div>{x.new}</div>
							<Rating x={x.rating} />
							<div className="discount">{x.discount}</div>
							<div className="tags">{x.tags}</div>
							<div className="cart-btn">
								<i className="fa fa-shopping-cart"></i>
							</div>
                            
				</div>
        return tagname?(tagname===x.tags?p:null):p
    
    }
}

const f1 = state => state
export default connect(f1, f2)(Item);