import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import store from './stores'
import { Provider } from 'react-redux'
import Intro from './components/Intro'

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	This is the entry point of the React app with Redux
	already implemented. The Intro component is the 
	visual content and most likely, you will want 
	to remove it and replace with your own visual content.
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/


const app = (
	<Provider store={store.configure(null)}>
		<div className="wrapper">
		    <div className="sidebar" data-background-color="white" data-active-color="danger">

		    	<div className="sidebar-wrapper">
		            <div className="logo">
		                <a href="http://www.creative-tim.com" className="simple-text">
		                    Creative Tim
		                </a>
		            </div>

		            <ul className="nav">
		                <li className="active">
		                    <a href="dashboard.html">
		                        <i className="ti-panel"></i>
		                        <p>Dashboard</p>
		                    </a>
		                </li>
		                <li>
		                    <a href="user.html">
		                        <i className="ti-user"></i>
		                        <p>User Profile</p>
		                    </a>
		                </li>
		                <li>
		                    <a href="table.html">
		                        <i className="ti-view-list-alt"></i>
		                        <p>Table List</p>
		                    </a>
		                </li>
		                <li>
		                    <a href="typography.html">
		                        <i className="ti-text"></i>
		                        <p>Typography</p>
		                    </a>
		                </li>
		                <li>
		                    <a href="icons.html">
		                        <i className="ti-pencil-alt2"></i>
		                        <p>Icons</p>
		                    </a>
		                </li>
		                <li>
		                    <a href="maps.html">
		                        <i className="ti-map"></i>
		                        <p>Maps</p>
		                    </a>
		                </li>
		                <li>
		                    <a href="notifications.html">
		                        <i className="ti-bell"></i>
		                        <p>Notifications</p>
		                    </a>
		                </li>
						<li className="active-pro">
		                    <a href="upgrade.html">
		                        <i className="ti-export"></i>
		                        <p>Upgrade to PRO</p>
		                    </a>
		                </li>
		            </ul>
		    	</div>
		    </div>

		    <div className="main-panel">
		        <nav className="navbar navbar-default">
		            <div className="container-fluid">
		                <div className="navbar-header">
		                    <button type="button" className="navbar-toggle">
		                        <span className="sr-only">Toggle navigation</span>
		                        <span className="icon-bar bar1"></span>
		                        <span className="icon-bar bar2"></span>
		                        <span className="icon-bar bar3"></span>
		                    </button>
		                    <a className="navbar-brand" href="#">Dashboard</a>
		                </div>
		                <div className="collapse navbar-collapse">
		                    <ul className="nav navbar-nav navbar-right">
		                        <li>
		                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
		                                <i className="ti-panel"></i>
										<p>Stats</p>
		                            </a>
		                        </li>
		                        <li className="dropdown">
		                              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
		                                    <i className="ti-bell"></i>
		                                    <p className="notification">5</p>
											<p>Notifications</p>
											<b className="caret"></b>
		                              </a>
		                              <ul className="dropdown-menu">
		                                <li><a href="#">Notification 1</a></li>
		                                <li><a href="#">Notification 2</a></li>
		                                <li><a href="#">Notification 3</a></li>
		                                <li><a href="#">Notification 4</a></li>
		                                <li><a href="#">Another notification</a></li>
		                              </ul>
		                        </li>
								<li>
		                            <a href="#">
										<i className="ti-settings"></i>
										<p>Settings</p>
		                            </a>
		                        </li>
		                    </ul>

		                </div>
		            </div>
		        </nav>


		        <div className="content">
		            <div className="container-fluid">
		                <div className="row">
		                    <div className="col-lg-3 col-sm-6">
		                        <div className="card">
		                            <div className="content">
		                                <div className="row">
		                                    <div className="col-xs-5">
		                                        <div className="icon-big icon-warning text-center">
		                                            <i className="ti-server"></i>
		                                        </div>
		                                    </div>
		                                    <div className="col-xs-7">
		                                        <div className="numbers">
		                                            <p>Capacity</p>
		                                            105GB
		                                        </div>
		                                    </div>
		                                </div>
		                                <div className="footer">
		                                    <hr />
		                                    <div className="stats">
		                                        <i className="ti-reload"></i> Updated now
		                                    </div>
		                                </div>
		                            </div>
		                        </div>
		                    </div>
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
		                                            <p>Revenue</p>
		                                            $1,345
		                                        </div>
		                                    </div>
		                                </div>
		                                <div className="footer">
		                                    <hr />
		                                    <div className="stats">
		                                        <i className="ti-calendar"></i> Last day
		                                    </div>
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                    <div className="col-lg-3 col-sm-6">
		                        <div className="card">
		                            <div className="content">
		                                <div className="row">
		                                    <div className="col-xs-5">
		                                        <div className="icon-big icon-danger text-center">
		                                            <i className="ti-pulse"></i>
		                                        </div>
		                                    </div>
		                                    <div className="col-xs-7">
		                                        <div className="numbers">
		                                            <p>Errors</p>
		                                            23
		                                        </div>
		                                    </div>
		                                </div>
		                                <div className="footer">
		                                    <hr />
		                                    <div className="stats">
		                                        <i className="ti-timer"></i> In the last hour
		                                    </div>
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                    <div className="col-lg-3 col-sm-6">
		                        <div className="card">
		                            <div className="content">
		                                <div className="row">
		                                    <div className="col-xs-5">
		                                        <div className="icon-big icon-info text-center">
		                                            <i className="ti-twitter-alt"></i>
		                                        </div>
		                                    </div>
		                                    <div className="col-xs-7">
		                                        <div className="numbers">
		                                            <p>Followers</p>
		                                            +45
		                                        </div>
		                                    </div>
		                                </div>
		                                <div className="footer">
		                                    <hr />
		                                    <div className="stats">
		                                        <i className="ti-reload"></i> Updated now
		                                    </div>
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		                <div className="row">

		                    <div className="col-md-12">
		                        <div className="card">
		                            <div className="header">
		                                <h4 className="title">Users Behavior</h4>
		                                <p className="category">24 Hours performance</p>
		                            </div>
		                            <div className="content">
		                                <div id="chartHours" className="ct-chart"></div>
		                                <div className="footer">
		                                    <div className="chart-legend">
		                                        <i className="fa fa-circle text-info"></i> Open
		                                        <i className="fa fa-circle text-danger"></i> Click
		                                        <i className="fa fa-circle text-warning"></i> Click Second Time
		                                    </div>
		                                    <hr />
		                                    <div className="stats">
		                                        <i className="ti-reload"></i> Updated 3 minutes ago
		                                    </div>
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		                <div className="row">
		                    <div className="col-md-6">
		                        <div className="card">
		                            <div className="header">
		                                <h4 className="title">Email Statistics</h4>
		                                <p className="category">Last Campaign Performance</p>
		                            </div>
		                            <div className="content">
		                                <div id="chartPreferences" className="ct-chart ct-perfect-fourth"></div>

		                                <div className="footer">
		                                    <div className="chart-legend">
		                                        <i className="fa fa-circle text-info"></i> Open
		                                        <i className="fa fa-circle text-danger"></i> Bounce
		                                        <i className="fa fa-circle text-warning"></i> Unsubscribe
		                                    </div>
		                                    <hr />
		                                    <div className="stats">
		                                        <i className="ti-timer"></i> Campaign sent 2 days ago
		                                    </div>
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                    <div className="col-md-6">
		                        <div className="card ">
		                            <div className="header">
		                                <h4 className="title">2015 Sales</h4>
		                                <p className="category">All products including Taxes</p>
		                            </div>
		                            <div className="content">
		                                <div id="chartActivity" className="ct-chart"></div>

		                                <div className="footer">
		                                    <div className="chart-legend">
		                                        <i className="fa fa-circle text-info"></i> Tesla Model S
		                                        <i className="fa fa-circle text-warning"></i> BMW 5 Series
		                                    </div>
		                                    <hr />
		                                    <div className="stats">
		                                        <i className="ti-check"></i> Data information certified
		                                    </div>
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </div>


		        <footer className="footer">
		            <div className="container-fluid">
		                <nav className="pull-left">
		                    <ul>

		                        <li>
		                            <a href="http://www.creative-tim.com">
		                                Creative Tim
		                            </a>
		                        </li>
		                        <li>
		                            <a href="http://blog.creative-tim.com">
		                               Blog
		                            </a>
		                        </li>
		                        <li>
		                            <a href="http://www.creative-tim.com/license">
		                                Licenses
		                            </a>
		                        </li>
		                    </ul>
		                </nav>
		                <div className="copyright pull-right">
		                    &copy; 2017, made with <i className="fa fa-heart heart"></i> by <a href="http://www.creative-tim.com">Creative Tim</a>
		                </div>
		            </div>
		        </footer>

		    </div>
		</div>
	</Provider>
)


ReactDOM.render(app, document.getElementById('root'))