var initialState = {
	currentLocation: {lat:40.72,lng:-73.98}
}

export default (state=initialState, action) => {
	let updated = Object.assign({}, state)
    switch(action.type){

        case 'LOCATION_CHANGED':
            console.log('LOCATION_CHANGED: '+JSON.stringify(action.data))
            updated['currentLocation'] = action.data
            return updated

    	default:
    	    return updated
    }
}