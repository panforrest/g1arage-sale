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
		let updated = Object.assign({}, this.state.center)
        updated = center
		this.setState({
            center: updated
		})
		
		this.props.changeCenter(center)
	}

    render(){

        // const markers = [
        //     {id:1, key:'1', defaultAnimation:2, label:'Nike Jordans', position:{lat:40.7224017, lng:-73.9896719}},
        //     {id:2, key:'2', defaultAnimation:2, label:'Sofa', position:{lat:40.7124017, lng:-73.9896719}}
        // ]

        const items = this.props.item.all || []

    	return(

          <div className="sidebar-wrapper" style={{height:960}}>


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
                markers={items}
			    zoom={12}
			    center={{lat:40.7224017, lng:-73.9896719}}
			    containerElement={<div style={{height:100+'%'}} />} 
			    mapElement={<div style={{height:100+'%'}} />} />

            
    	  </div>

    	)
    }

}

const stateToProps = (state) => {
    return {
        item: state.item,
       center: state.map.center
    }
}

const dispatchToProps = (dispatch) => {
	return {
        changeCenter: (center) => dispatch(actions.changeCenter(center))
	}
}

export default connect(stateToProps, dispatchToProps)(Search)