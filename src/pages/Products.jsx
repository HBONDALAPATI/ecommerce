import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as f2 from '../store/actions';
import Item from './Item';

class Products extends Component {
	render() 
	{
		let {products, search} = this.props
		products = products.filter(item => Object.values(item).join('').includes(search))

		 return <div className="products">
					{
					products.map(x => <Item x={x} key={x.id} />)
					}
				</div>
    }
}
const f1 = state => state
export default connect(f1, f2) (Products);