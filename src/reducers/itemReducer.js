import constants from '../constants'

var initialState = {
    all: [
            {id:'1', price:10, name:'Nike Jordans', image: 'https://hoodrhetoric.com/wp-content/uploads/2016/08/Air-Jordan-1-Retro-High-OG-Banned-Black-White-555088-001.jpg', position:{lat:40.7224017, lng:-73.9896719}, seller:{username:'lebron_james',image:'http://cdn.hoopshype.com/i/de/74/ac/lebron-james.png'}},
            {id:'2', price:20, name:'Sofa', image: 'https://smhttp-ssl-18667.nexcesscdn.net/media/catalog/product/cache/1/image/400x400/9df78eab33525d08d6e5fb8d27136e95/s/i/sig-7970018-sofa-chise-3.jpg', position:{lat:40.7124017, lng:-73.9896719}, seller:{username:'kevin_durant',image:'https://pbs.twimg.com/profile_images/749992876906536960/mf3yAOgW.jpg'}},
            {id:'3', price:30, name:'TV', image: 'https://d2uk7vc0yceq94.cloudfront.net/uploads/2017/08/25/s/0/1/12707801/PV2H-5.jpeg', position:{lat:40.7024017, lng:-73.9896719}, seller:{username:'kyrie_irving',image:'https://bookingagentinfo.com/wp-content/uploads/2016/12/Kyrie-Irving-Contact-Information.jpg'}}
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