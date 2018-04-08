import React, { Component } from 'react'
import { Nav, Footer, Item, Map } from './presentation'

class Home extends Component {

    constructor(){
		super()
		this.state = {
			map: null
		}
	}

	render(){
		return(
		  <div className="wrapper">
		    <div className="sidebar" data-background-color="white" data-active-color="danger">

		    	<div className="sidebar-wrapper">

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

						    zoom={14}
						    center={{lat:40.7224017, lng:-73.9896719}}
						    containerElement={<div style={{height:100+'%'}} />} 
						    mapElement={<div style={{height:100+'%'}} />} />

			            
			    	</div>

		    	</div>
		    </div>

		    <div className="main-panel">
		        <Nav />


		        <div className="content">
		            <div className="container-fluid">
		                <div className="row">
		                    <Item />
		                    <Item />
		                    <Item />
		                    <Item />
		                </div>
		                
		              
		            </div>
		        </div>

                <Footer />
 

		    </div>
		  </div>

		)
    }
}

export default Home        

        