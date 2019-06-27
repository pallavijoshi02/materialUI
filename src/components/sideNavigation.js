import React, { Component } from 'react';
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar-fixed position-fixed">
                {/* <a href="user_dashboard">
                    <img alt="FAZRemit" src="/assets/site-logo.png" style={{ height: 24, marginTop: 14 }} />
                </a> */}
                <MDBListGroup className="list-group-flush" style={{ marginTop: 24}} >
                    <NavLink exact={true} to="/dashboard" activeClassName="activeClass" >
                        <MDBListGroupItem>
                            <MDBIcon icon="dashboard" className="mr-3" />
                            Dashboard
                        </MDBListGroupItem>
                    </NavLink>
                    <NavLink to="/user" activeClassName="activeClass">
                        <MDBListGroupItem>
                            <MDBIcon icon="user" className="mr-3" />
                            User
                        </MDBListGroupItem>
                    </NavLink>
                    <NavLink to="/beneficiary" activeClassName="activeClass">
                        <MDBListGroupItem>
                            {/* <MDBIcon icon="table" className="mr-3" /> */}
                            Beneficiary
                        </MDBListGroupItem>
                    </NavLink>
                    <NavLink to="/transaction" activeClassName="activeClass">
                        <MDBListGroupItem>
                            {/* <MDBIcon icon="transactions" className="mr-3" /> */}
                            Transaction
                        </MDBListGroupItem>
                    </NavLink>
                    <div className="left-nav-bottom">
                        <img alt="Powered by Small World" src="/assets/footer-logo.png" style={{ height: 75, marginTop: 280 }} />
                        <p>Fazremit. All Rights Reserved</p>
                    </div>
                </MDBListGroup>
            </div>
        );
    }
}

export default Sidebar;