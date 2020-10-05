import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as f2 from '../store/actions'

class Filters extends Component {
    setSort(col){
        this.props.setSort(col)
    }
    setSearch(e){
        let val = e.target.value;
        this.props.setSearch(val)
    }
    render() {
        let a = ["id", "old", "new", "rating", "discount"]
        return (
            <div className="filters">
            <input onChange={this.setSearch.bind(this)} placeholder="search...." />
           {
               a.map (x => <button onClick={this.setSort.bind(this, x)} key={x}> 
               sort by {x}
               
               <i className="fa fa-sort"></i>
               </button>)
           }
            </div>
        );
    }
}
const f1 = state => state
export default connect(f1, f2) (Filters);