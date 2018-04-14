var initialState = {
	center: null
}

export default (state=initialState, action) => {
	let updated = Object.assign({}, state)
    switch(action.type){

        case 'CENTER_CHANGED':
            console.log('CENTER_CHANGED: '+JSON.stringify(action.data))
            return updated

    	default:
    	    return state
    }
}