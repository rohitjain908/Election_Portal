import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { redirect } from "react-router-dom";

class Sidebar extends Component{


    constructor(props){
        super(props);

        //console.log("props ", props.path)

        this.state = {
            sideBarData: [
                {
                    redirectLink : '/admin-dashboard',
                    iconClass: "fas fa-tachometer-alt fa-fw me-3",
                    title: 'Dashboard',
                    active: props.path == 'Dashboard' ? 'active': ''
                },
                {
                    redirectLink : '/admin-dashboard/votes',
                    iconClass: "fas fa-lock fa-fw me-3",
                    title: 'Votes',
                    active: props.path == 'Votes' ? 'active': ''
                },
                {
                    redirectLink : '/admin-dashboard/voters',
                    iconClass: "fa-solid fa-users fa-fw me-3",
                    title: 'Voters',
                    active: props.path == 'Voters' ? 'active': ''
                },
                {
                    redirectLink : '/admin-dashboard/position',
                    iconClass: "fas fa-chart-pie fa-fw me-3",
                    title: 'Positions',
                    active: props.path == 'Positions' ? 'active': ''
                },
                {
                    redirectLink : '/admin-dashboard/candidates',
                    iconClass: "far fa-user fa-fw me-3",
                    title: 'Candidates',
                    active: props.path == 'Candidates' ? 'active': ''
                },
                {
                    redirectLink : '/admin-dashboard/ballotPosition',
                    iconClass: "fas fa-globe fa-fw me-3",
                    title: 'Ballot Positions',
                    active: props.path == 'Ballot Positions' ? 'active': ''
                }
                
            ]
        }
    }



    render(){

        return(
            <>
                <header>
                    {/* <!-- Sidebar --> */}
                    <nav
                        id="sidebarMenu"
                        class="collapse d-lg-block sidebar collapse bg-white"
                    >
                        <div class="position-sticky">
                            <div class="list-group list-group-flush mx-3 mt-4">
                                {this.state.sideBarData.map(item => {
                                    return(
                                        <a
                                            key = {item.title}
                                            href={item.redirectLink}
                                            class={`list-group-item list-group-item-action py-2 ripple ${item.active}`}
                                            aria-current="true" 
                                        >
                                            <i class={item.iconClass}></i>
                                            <span>{item.title}</span>
                                        </a>
                                    )
                                })} 
                            </div>
                        </div>
                    </nav>
                    {/* <!-- Sidebar --> */}

                {/* <!-- Navbar --> */}
                <nav
                    id="main-navbar"
                    class="navbar navbar-expand-lg navbar-light bg-white fixed-top"
                >
                    
                    {/* <!-- Container wrapper --> */}
                    <div class="container-fluid">
                    {/* <!-- Toggle button --> */}
                    <button
                            class="navbar-toggler"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#sidebarMenu"
                            aria-controls="sidebarMenu"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            >
                        <i class="fas fa-bars"></i>
                    </button>

                    {/* <!-- Brand --> */}
                    <a class="navbar-brand" href="/">
                        <h3>Election Portal</h3>
                    </a>

                    {/* <!-- Right links --> */}
                    <ul class="navbar-nav ms-auto d-flex flex-row">
                        {/* <!-- Notification dropdown --> */}
                        <li class="nav-item dropdown">
                        <a
                            class="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false"
                            >
                            <i class="fas fa-bell"></i>
                            <span class="badge rounded-pill badge-notification bg-danger"
                                >1</span
                            >
                        </a>
                        <ul
                            class="dropdown-menu dropdown-menu-end"
                            aria-labelledby="navbarDropdownMenuLink"
                            >
                            <li><a class="dropdown-item" href="#">Some news</a></li>
                            <li><a class="dropdown-item" href="#">Another news</a></li>
                            <li>
                            <a class="dropdown-item" href="#">Something else here</a>
                            </li>
                        </ul>
                        </li>

                        {/* <!-- Icon --> */}
                        <li class="nav-item">
                        <a class="nav-link me-3 me-lg-0" href="#">
                            <i class="fas fa-fill-drip"></i>
                        </a>
                        </li>
                        {/* <!-- Icon --> */}
                        <li class="nav-item me-3 me-lg-0">
                        <a class="nav-link" href="#">
                            <i class="fab fa-github"></i>
                        </a>
                        </li>

                        {/* <!-- Icon dropdown --> */}
                        <li class="nav-item dropdown">
                        <a
                            class="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false"
                            >
                            <i class="united kingdom flag m-0"></i>
                        </a>
                        </li>

                        {/* <!-- Avatar --> */}
                        <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false"
                            >
                            <img
                                src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                                class="rounded-circle"
                                height="22"
                                alt=""
                                loading="lazy"
                                />
                        </a>
                        <ul
                            class="dropdown-menu dropdown-menu-end"
                            aria-labelledby="navbarDropdownMenuLink"
                            >
                            <li><a class="dropdown-item" href="#">My profile</a></li>
                            <li><a class="dropdown-item" href="#">Settings</a></li>
                            <li><a class="dropdown-item" href="#">Logout</a></li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                    {/* <!-- Container wrapper --> */}
                </nav>
                {/* <!-- Navbar --> */}
            </header>
            </>
        )

    }
}

export default Sidebar;