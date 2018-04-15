import constants from '../constants'

var initialState = {
    all: [
        {id:'1', price:10, name:'Nike Jordans', position:{lat:40.7224017, lng:-73.9896719}, seller:{username:'lebron_james',image:'http://cdn.hoopshype.com/i/de/74/ac/lebron-james.png'}},
        {id:'2', price:20, name:'Sofa', position:{lat:40.7124017, lng:-73.9896719}, seller:{username:'eli_manning',image:'http://cdn.hoopshype.com/i/de/74/ac/lebron-james.png'}},
        {id:'3', price:30, name:'TV', position:{lat:40.7024017, lng:-73.9896719}, seller:{username:'tom_brady',image:'http://cdn.hoopshype.com/i/de/74/ac/lebron-james.png'}}
	]
}

export default (state=initialState, action) => {
	let updated = Object.assign({}, state)

	switch(action.type){

        case constants.ITEM_ADDED:
            console.log('ITEM_ADDED: '+JSON.stringify(action.data))
            let all = Object.assign([], updated.all)
            all.push(action.data)
            updated['all'] = all
            return updated

		default: 
		    return state
	}
}