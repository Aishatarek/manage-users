
import React from 'react';

import { Helmet } from 'react-helmet';
import { FaUserCircle } from "react-icons/fa";
import { TfiNewWindow } from "react-icons/tfi";
import { useDispatch, useSelector } from 'react-redux';
import { removeFavorite } from '../reducer/actions';
import Navbar from "../common/Navbar"
import { Button } from 'react-bootstrap';

function FavoriteUser() {
    const favorites = useSelector(state => state.favorites);
    const dispatch = useDispatch();

    const handleRemove = (userId) => {

        dispatch(removeFavorite(userId));
    };
    return (
        <>
            <Helmet>
                <title>Favorite Users
                </title>
            </Helmet>
            <div id="main-wrapper" data-theme="light" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
                data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full">

                {/* <!-- Left Sidebar  --> */}
                <Navbar />

                {/* <!-- Favorite Users Table --> */}


                <div className="page-wrapper">

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center justify-content-center mb-4">
                                            <h4 className="card-title">Favorite Users</h4>

                                        </div>
                                        {favorites.length === 0 ?
                                            <p className='no-user'>
                                                No Users
                                            </p> :
                                            <div className="table-responsive">
                                                <table className="table no-wrap v-middle mb-0">
                                                    <thead>
                                                        <tr className="border-0">
                                                            <th className="border-0 font-14 font-weight-medium text-muted">User
                                                            </th>
                                                            <th className="border-0 font-14 font-weight-medium text-muted px-2"> Name
                                                            </th>
                                                            <th className="border-0 font-14 font-weight-medium text-muted">Address</th>
                                                            <th className="border-0 font-14 font-weight-medium text-muted">
                                                                Phone
                                                            </th>
                                                            <th className="border-0 font-14 font-weight-medium text-muted">
                                                                Website
                                                            </th>
                                                            <th className="border-0 font-14 font-weight-medium text-muted">Company</th>
                                                            <th className="border-0 font-14 font-weight-medium text-muted">Action</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {favorites?.map((user) => (

                                                            <tr key={user.id}>
                                                                <td className="border-top-0 px-2">
                                                                    <div className="d-flex no-block align-items-center">
                                                                        <div className="me-3">
                                                                            <FaUserCircle className="icon-user" />
                                                                        </div>
                                                                        <div className="">
                                                                            <h5 className="text-dark mb-0 font-16 font-weight-medium">{user.username}</h5>
                                                                            <span className="text-muted font-14">{user.email}</span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="border-top-0 text-muted px-2 font-14">{user.name}</td>

                                                                <td className='border-top-0 text-muted px-2 font-14'>
                                                                    {`${user.address.street}, ${user.address.suite}, ${user.address.city}`}
                                                                </td>
                                                                <td className="border-top-0 text-muted px-2 font-14">{user.phone}</td>
                                                                <td
                                                                    className="border-top-0 text-muted px-2 font-14">
                                                                    <a href={`https://${user.website}`} target='_blank'>
                                                                        Click Here    <TfiNewWindow />


                                                                    </a>
                                                                </td>
                                                                <td className="border-top-0 text-muted px-2 font-14">{user.company.name}
                                                                </td>
                                                                <td>
                                                                    <Button danger onClick={() => handleRemove(user.id)}  variant="outline-danger">
                                                                        Remove
                                                                    </Button>

                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>




        </>
    );
}

export default FavoriteUser;
