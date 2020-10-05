import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as f2 from '../store/actions';

class Rating extends Component
{
	render()
	{
		let {x}=this.props
		return <div className="rating">
					<i style={{color:1<=x?'orange':'silver'}} className="fa fa-star"></i>	
					<i style={{color:2<=x?'orange':'silver'}} className="fa fa-star"></i>	
					<i style={{color:3<=x?'orange':'silver'}} className="fa fa-star"></i>	
					<i style={{color:4<=x?'orange':'silver'}} className="fa fa-star"></i>	
					<i style={{color:5<=x?'orange':'silver'}} className="fa fa-star"></i>	
			</div>
	}
}

const f1=state=>state
export default connect(f1,f2)(Rating);