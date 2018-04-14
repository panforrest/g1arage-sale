import React, { Component } from 'react'

export default (props) => {  //THIS IS NEW

  const item = props.item

  return (

    <div className="col-lg-3 col-sm-6">
        <div className="card">
            <div className="content">
                <div className="row">
                    <div className="col-xs-5">
                        <div className="icon-big icon-success text-center">
                            <i className="ti-wallet"></i>
                        </div>
                    </div>
                    <div className="col-xs-7">
                        <div className="numbers">
                            <p>{item.label}</p>
                            ${item.price}
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <hr />
                    <div className="stats">
                        <i className="ti-calendar"></i> Updated now
                    </div>
                </div>
            </div>
        </div>
    </div>

  )

}