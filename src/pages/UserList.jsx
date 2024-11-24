import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Modal, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { FaEye, FaUserCircle } from "react-icons/fa";
import { TfiNewWindow } from "react-icons/tfi";
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../reducer/actions';
import { FaHeart } from "react-icons/fa";
import { fetchUsers } from '../reducer/actions';
import Navbar from "../common/Navbar"
import { CiHeart } from 'react-icons/ci';


function ListHistory() {
    const [showModal, setShowModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const favorites = useSelector(state => state.favorites);
    const [error, setError] = useState(null);
    const users = useSelector((state) => state.users.users);
    const dispatch = useDispatch();

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem('users'));
        if (storedUsers) {
            dispatch(fetchUsers(storedUsers));
        } else {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then((response) => response.json())
                .then((data) => {
                    dispatch(fetchUsers(data));
                    localStorage.setItem('users', JSON.stringify(data));
                })
                .catch((error) => {
                    console.error('Error fetching users:', error)
                    setError(error?.msg)
                });
        }
    }, [dispatch]);

    const isFavorite = (userId) => {
        return favorites.some(user => user.id === userId);
    };

    const handleToggleFavorite = (user) => {
        if (isFavorite(user.id)) {
            dispatch(removeFavorite(user.id));
        } else {
            dispatch(addFavorite(user));
        }
    };


    const handleShowModal = (user) => {
        setSelectedUser(user);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedUser(null);
    };
    return (
        <>
            <Helmet>
                <title>All Users
                </title>
            </Helmet>
            <div id="main-wrapper" data-theme="light" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
                data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full">
                {/* <!-- Side Navbar --> */}

                <Navbar />
                {/* <!--  Users Table --> */}

                <div className="page-wrapper">

                    <div className="container-fluid">
                        <Row>
                            <Col md={12}>
                                <Card>
                                    <Card.Body>
                                        <div className="d-flex align-items-center justify-content-center mb-4">
                                            <h4 className="card-title">All Users</h4>

                                        </div>
                                        {error ?
                                            <p style={{ color: 'red' }} className='no-user'>{error}</p>
                                            :
                                            users.length === 0 ?
                                                <p className='no-user'>
                                                    No Users
                                                </p> :
                                                <div className="table-responsive">
                                                    <table className="table no-wrap v-middle mb-0">
                                                        <thead>
                                                            <tr className="border-0">
                                                                <th className="border-0 font-14 font-weight-medium text-muted">User
                                                                </th>
                                                                <th className="border-0 font-14 font-weight-medium text-muted"> Name
                                                                </th>
                                                                <th className="border-0 font-14 font-weight-medium text-muted">
                                                                    Phone
                                                                </th>
                                                                <th className="border-0 font-14 font-weight-medium text-muted text-center">
                                                                    Actions
                                                                </th>

                                                                <th className="border-0 font-14 font-weight-medium text-muted">Address</th>

                                                                <th className="border-0 font-14 font-weight-medium text-muted">
                                                                    Website
                                                                </th>
                                                                <th className="border-0 font-14 font-weight-medium text-muted">Company</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {users?.map((user) => (

                                                                <tr key={user.id} >
                                                                    <td className="border-top-0">
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
                                                                    <td className="border-top-0 text-muted font-14">{user.name}</td>
                                                                    <td className="border-top-0 text-muted font-14">{user.phone}</td>

                                                                    <td className="border-top-0 text-muted font-14 d-flex">
                                                                        <button onClick={() => handleToggleFavorite(user)} className='action-fav btn'>
                                                                            {isFavorite(user.id) ?
                                                                                <div>
                                                                                    <FaHeart className='favorite-icon' />
                                                                                    <span>
                                                                                        Remove
                                                                                    </span>
                                                                                </div>
                                                                                :
                                                                                <div>
                                                                                    <CiHeart className='favorite-icon' />
                                                                                    <span>
                                                                                        Add
                                                                                    </span>
                                                                                </div>}
                                                                        </button>
                                                                        <button onClick={() => handleShowModal(user)} className='action-detail btn'>
                                                                            <FaEye />
                                                                            <span>
                                                                                details
                                                                            </span>
                                                                        </button>

                                                                    </td>
                                                                    <td className='border-top-0 text-muted font-14'>
                                                                        {`${user.address.street}, ${user.address.suite}, ${user.address.city}`}
                                                                    </td>
                                                                    <td
                                                                        className="border-top-0 text-muted font-14">
                                                                        <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">
                                                                            Click Here    <TfiNewWindow />


                                                                        </a>
                                                                    </td>
                                                                    <td className="border-top-0 text-muted font-14">{user.company.name}
                                                                    </td>

                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                        }
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                    </div>

                </div>

            </div>

                {/* <!--  User Details --> */}


            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedUser ? selectedUser.name : "User Details"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedUser && (
                        <div>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td><strong>Username:</strong></td>
                                        <td>{selectedUser.username}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Email:</strong></td>
                                        <td>{selectedUser.email}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Address:</strong></td>
                                        <td>{`${selectedUser.address.street}, ${selectedUser.address.suite}, ${selectedUser.address.city}, ${selectedUser.address.zipcode}`}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Phone:</strong></td>
                                        <td>{selectedUser.phone}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Website:</strong></td>
                                        <td>
                                            <a href={`https://${selectedUser.website}`} target="_blank" rel="noopener noreferrer">
                                                {selectedUser.website}
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><strong>Company:</strong></td>
                                        <td>{selectedUser.company.name}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Company Catchphrase:</strong></td>
                                        <td>{selectedUser.company.catchPhrase}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Company BS:</strong></td>
                                        <td>{selectedUser.company.bs}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Geo Coordinates:</strong></td>
                                        <td>Latitude: {selectedUser.address.geo.lat}, Longitude: {selectedUser.address.geo.lng}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className='confirm-button' onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>



        </>
    );
}

export default ListHistory;
