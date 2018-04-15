import React, { Component } from 'react'
import { Map } from './../presentation'
import { connect } from 'react-redux'
import actions from '../../actions'

class Search extends Component {

	constructor(){
		super()
		this.state = {
			map: null,
			center: null
		}
	}

	centerChanged(center){
		console.log('centerChanged' + JSON.stringify(center))
		// let updated = Object.assign({}, this.state.center)
  //       updated = center
		// this.setState({
  //           center: updated
		// })
		
		this.props.locationChanged(center)
	}

    render(){

        // const markers = [
        //     {id:1, key:'1', defaultAnimation:2, label:'Nike Jordans', position:{lat:40.7224017, lng:-73.9896719}},
        //     {id:2, key:'2', defaultAnimation:2, label:'Sofa', position:{lat:40.7124017, lng:-73.9896719}}
        // ]

        const items = this.props.item.all || []

        let markers = []
        items.forEach((item, i) => {
        	// {id:'1', key:'1', price:10, name:'Nike Jordans', position:{lat:40.7224017, lng:-73.9896719}}
        	const marker = {
        		key: item.id,
        		label: item.name,
        		position: item.position,
        		defaultAnimation: 2
        	}

        	markers.push(marker)
        })

    	return(

          <div className="sidebar-wrapper">


			<Map 
			    onMapReady={ (map) => {
			        if (this.state.map != null)
			            return

			        console.log('OnMapReady: '+JSON.stringify(map.getCenter()))
			        this.setState({
			            map: map
			        })
			    }}

                locationChanged={this.centerChanged.bind(this)}
                markers={markers}
			    zoom={12}
			    // center={{lat:40.7224017, lng:-73.9896719}}
			    center={this.props.map.currentLocation}
			    containerElement={<div style={{height:100+'%'}} />} 
			    mapElement={<div style={{height:100+'vh'}} />} />

            
    	  </div>

    	)
    }

}

const stateToProps = (state) => {
    return {
        item: state.item,
        map: state.map
    }
}

const dispatchToProps = (dispatch) => {
	return {
        locationChanged: (location) => dispatch(actions.locationChanged(location))
	}
}

export default connect(stateToProps, dispatchToProps)(Search)