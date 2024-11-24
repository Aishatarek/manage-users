import React, { useState } from 'react';
import { FaBars, FaTimes, FaUserCircle, FaUsers } from 'react-icons/fa'; // React icons for the menu toggle
import { NavLink } from 'react-router-dom';
import { IoPersonAddSharp } from "react-icons/io5";
import { RiUserHeartLine } from "react-icons/ri";

function Navbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            <header className="topbar" data-bbg="skin6">
                <nav className="navbar top-navbar navbar-expand-lg">

                    <div className="navbar-header" data-logobg="skin6">
                        <button
                            className="nav-toggler waves-effect waves-light d-block d-lg-none"
                            onClick={toggleSidebar}
                        >
                            {sidebarOpen ? <FaTimes /> : <FaBars />}
                        </button>

                    </div>

          
                </nav>
            </header>

            {/* Sidebar */}
            <aside className={`left-sidebar ${sidebarOpen ? 'active' : ''}`} data-sidebarbg="skin6">
                <div className="scroll-sidebar" data-sidebarbg="skin6">
           
                    <nav className="sidebar-nav">

                        <ul id="sidebarnav">
                        <li className="sidebar-item">

                        <div
                        className="nav-link hello-user"
                    >
                        <FaUserCircle className="icon-user" />
                        <span className="ms-2 d-lg-inline-block">
                            <span>Hello,</span> <span className="text-dark">StoreUS</span>
                        </span>
                    </div>
                    </li>
                            <li className="sidebar-item">
                                <NavLink className="sidebar-link " to="/" aria-expanded="false">
                                    <FaUsers data-feather="users" className="feather-icon" />

                                    <span>Users</span>
                                </NavLink>
                            </li>
                            <li className="list-divider"></li>

                            <li className="sidebar-item">
                                <NavLink className="sidebar-link " to="/favorite-users" aria-expanded="false">
                                    <RiUserHeartLine data-feather="favorite-user" className="feather-icon" />

                                    <span>Favorite Users</span>
                                </NavLink>
                            </li>
                            <li className="list-divider"></li>

                            <li className="sidebar-item">
                                <NavLink className="sidebar-link " to="/add-user" aria-expanded="false">
                                    <IoPersonAddSharp data-feather="add-user" className="feather-icon" />

                                    <span>Add User</span>
                                </NavLink>
                            </li>

                        </ul>
                    </nav>
                </div>
            </aside>
        </>
    );
}

export default Navbar;
