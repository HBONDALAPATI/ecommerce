const inint={
	products:require("./p.js"),
	tags:require("./t.js"),
	cart:[],
	orders:[],
	users:[],
	
	search:"",
	sort:"id",
	order:false,
	tagname:""
}

const reducer=function(state=inint, action){
	switch(action.type)
	{
		case "setTagname":
			return {
				...state,
				tagname:action.payload
			}
			case "setSearch":
			return {
				...state,
				setSearch:action.payload
			}
			case "setSort":
			return {
				...state,
				order:!state.order,
				sort:action.payload,
				products: state.products.sort((x,y) => state.order ? (x[action.payload] - y[action.payload]): (y[action.payload] - x[action.payload]))
			}

		default :
			return state
	}	
}

export default reducer;