import React, { Component } from 'react'
import { Item } from '../presentation'
import { connect } from 'react-redux'

class Results extends Component {
    constructor(){
    	super()
    	this.state = {

    	}
    }
    
    render(){

        // const items = [
        //     {id:1, key:'1', price:10, defaultAnimation:2, label:'Nike Jordans', position:{lat:40.7224017, lng:-73.9896719}},
        //     {id:2, key:'2', price:20, defaultAnimation:2, label:'Sofa', position:{lat:40.7124017, lng:-73.9896719}}
        // ]

        const items = this.props.item.all || []

    	return(
            <div className="container-fluid">
                <div className="row">

                    { items.map((item, i) => {
                    	return <Item key={item.id} item={item} />
                      })

                    }
			                    
                </div>			                
            </div>
    	)
    }
}

const stateToProps = (state) => {
    return {
        item: state.item
    }
}

export default connect(stateToProps)(Results)
