import React, { Component } from 'react'
import { Item } from '../presentation'
import { connect } from 'react-redux'
import actions from '../../actions'
import Dropzone from 'react-dropzone'
import turbo from 'turbo360'

class Results extends Component {
    constructor(){
    	super()
    	this.state = {
            item: {
                // position:{lat:40.70224017, lng:-73.9796719}
            }
    	}
    }

    updateItem(attr, event){
        event.preventDefault()
        console.log(attr + '  == ' + event.target.value)

        let updated = Object.assign({}, this.state.item)
        updated[attr] = event.target.value
        this.setState({
            item: updated
        })
    }

    addItem(){
        if (this.props.account.currentUser == null){
            alert('Please log in or register to sell items')
            return
        }

        const currentUser = this.props.account.currentUser
        let updated = Object.assign({}, this.state.item)
        updated['seller'] = {
            id: currentUser.id,
            username: currentUser.username,
            image: currentUser.image || ''
        }

        console.log('ADD ITEM: ' + JSON.stringify(updated))

        // console.log('ADD ITEM: ' + JSON.stringify(this.state.item))

        // let newItem = Object.assign({}, this.state.item)
        // const len = this.props.item.all.length+1
        // newItem['id'] = len.toString()
        // // newItem['key'] = '100'
        // // newItem['defaultAnimation'] = 2
        // newItem['position'] = this.props.map.currentLocation
        // //CALL ACTION
        // this.props.addItem(newItem)
    }

    uploadImage(files){
        const image = files[0]
        console.log('uploadImage: ' + image.name)
        const turboClient = turbo({
            site_id: '5a104f65eaac0e0014b0f822'
        })

        turboClient.uploadFile(image)
        .then(data => {
            // console.log('FILE UPLOADED: ' + JSON.stringify(data))
            // console.log('FILE UPLOADED: ' + data.result.url)
            let updated = Object.assign({}, this.state.item)
            updated['image'] = data.result.url
            this.setState({
                item: updated
            })
        })
        .catch(err => {
            console.log('UPLOAD ERROR: ' + err.message)
        })
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
            

                <div className="row">
                    <div className="col-md-5">

                        <div className="card">
                            <div className="content">
                                
                                <div className="footer">

                                    <h3>Add Item</h3>

                                    <input onChange={this.updateItem.bind(this, 'label')} type="text" style={localStyle.input} className="form-control" placeholder="Name" />
                                    <input onChange={this.updateItem.bind(this, 'price')} type="text" style={localStyle.input} className="form-control" placeholder="Price" />
                                    { (this.state.item.image == null) ? null: <img src={this.state.item.image+'=s120-c'} />


                                    }

                                    <hr />
                                    <div className="stats">
                                        <Dropzone onDrop={this.uploadImage.bind(this)} className="btn btn-info btn-fill" style={{marginRight:16}}>Add Image</Dropzone>
                                        <button onClick={this.addItem.bind(this)} className="btn btn-success">Add Item</button> 
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>    
    	)
    }
}

const localStyle = {
    input: {
        border: '1px solid #ddd',
        marginBottom: 12
    }
}

const stateToProps = (state) => {
    return {
        item: state.item,
        map: state.map,
        account: state.account   
    }
}

const dispatchToProps = (dispatch) => {
    return {
        addItem: (item) => dispatch(actions.addItem(item))
    }
}

export default connect(stateToProps, dispatchToProps)(Results)
