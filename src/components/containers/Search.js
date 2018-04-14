import React, { Component } from 'react'
import { Map } from './../presentation'

class Search extends Component {

	constructor(){
		super()
		this.state = {
			map: null
		}
	}

    render(){

        const markers = [
            {id:1, key:'1', defaultAnimation:2, label:'Nike Jordans', position:{lat:40.7224017, lng:-73.9896719}},
            {id:2, key:'2', defaultAnimation:2, label:'Sofa', position:{lat:40.7124017, lng:-73.9896719}}
        ]

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


                markers={markers}
			    zoom={12}
			    center={{lat:40.7224017, lng:-73.9896719}}
			    containerElement={<div style={{height:100+'%'}} />} 
			    mapElement={<div style={{height:100+'%'}} />} />

            
    	  </div>

    	)
    }

}

export default Search