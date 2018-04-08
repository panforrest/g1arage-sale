import React, { Component } from 'react'
import { Nav, Footer, Item, Map } from './presentation'
import { Search } from './containers'

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

		    	<Search />

                

		    	
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

        