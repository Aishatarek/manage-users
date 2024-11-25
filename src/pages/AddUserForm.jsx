import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addUser } from '../reducer/actions';
import Swal from 'sweetalert2';
import Navbar from "../common/Navbar";
import { Helmet } from 'react-helmet';
import _ from 'lodash';

function AddUserForm() {
    const [formData, setFormData] = useState({
        id: Date.now(),
        name: '',
        username: '',
        email: '',
        phone: '',
        website: '',
        address: {
            street: '',
            suite: '',
            city: '',
            zipcode: '',
            geo: {
                lat: '',
                lng: ''
            }
        },
        company: {
            name: '',
            catchPhrase: '',
            bs: ''
        }
    });

    const dispatch = useDispatch();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => _.set({ ...prevData }, name, value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            ...formData,
            id: Date.now(),
        };

        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        })
            .then((response) => response.json())
            .then((data) => {
                dispatch(addUser(data));
                Swal.fire({
                    icon: 'success',
                    title: 'User Added Successfully',
                    customClass: {
                        confirmButton: 'confirm-button',
                    },
                });
            })
            .catch((error) => {
                console.error(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Something Went Wrong',
                    customClass: {
                        confirmButton: 'confirm-button',
                    },
                });
            });

        setFormData({
            id: Date.now(),
            name: '',
            username: '',
            email: '',
            phone: '',
            website: '',
            address: {
                street: '',
                suite: '',
                city: '',
                zipcode: '',
                geo: {
                    lat: '',
                    lng: ''
                }
            },
            company: {
                name: '',
                catchPhrase: '',
                bs: ''
            }
        });
    };

    return (
        <>
            <Helmet>
                <title>Add User</title>
            </Helmet>
            <div id="main-wrapper" data-theme="light" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
                data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full">
                                {/* <!-- Side Navbar --> */}

                <Navbar />
                                {/* <!-- Add Users  --> */}

                <div className="page-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center justify-content-center mb-4">
                                            <h4 className="card-title">Add User</h4>
                                        </div>
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group controlId="formName">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="Enter name"
                                                    required
                                                />
                                            </Form.Group>

                                            <Form.Group controlId="formUsername">
                                                <Form.Label>Username</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="username"
                                                    value={formData.username}
                                                    onChange={handleChange}
                                                    placeholder="Enter username"
                                                    required
                                                />
                                            </Form.Group>

                                            <Form.Group controlId="formEmail">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="Enter email"
                                                    required
                                                />
                                            </Form.Group>

                                            <Form.Group controlId="formPhone">
                                                <Form.Label>Phone</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="Enter phone"
                                                    required
                                                />
                                            </Form.Group>

                                            <Form.Group controlId="formWebsite">
                                                <Form.Label>Website</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="website"
                                                    value={formData.website}
                                                    onChange={handleChange}
                                                    placeholder="Enter website"
                                                    required
                                                />
                                            </Form.Group>

                                            {/* Address Fields */}
                                            <h5 className='mt-5'>Address</h5>
                                            <Form.Group controlId="formStreet">
                                                <Form.Label>Street</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="address.street"
                                                    value={formData.address.street}
                                                    onChange={handleChange}
                                                    placeholder="Enter street"
                                                    required
                                                />
                                            </Form.Group>

                                            <Form.Group controlId="formSuite">
                                                <Form.Label>Suite</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="address.suite"
                                                    value={formData.address.suite}
                                                    onChange={handleChange}
                                                    placeholder="Enter suite"
                                                />
                                            </Form.Group>

                                            <Form.Group controlId="formCity">
                                                <Form.Label>City</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="address.city"
                                                    value={formData.address.city}
                                                    onChange={handleChange}
                                                    placeholder="Enter city"
                                                    required
                                                />
                                            </Form.Group>

                                            <Form.Group controlId="formZipcode">
                                                <Form.Label>Zipcode</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="address.zipcode"
                                                    value={formData.address.zipcode}
                                                    onChange={handleChange}
                                                    placeholder="Enter zipcode"
                                                    required
                                                />
                                            </Form.Group>

                                            {/* Company Fields */}
                                            <h5 className='mt-5'>Company</h5>
                                            <Form.Group controlId="formCompanyName">
                                                <Form.Label>Company Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="company.name"
                                                    value={formData.company.name}
                                                    onChange={handleChange}
                                                    placeholder="Enter company name"
                                                    required
                                                />
                                            </Form.Group>

                                            <Form.Group controlId="formCatchPhrase">
                                                <Form.Label>Catchphrase</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="company.catchPhrase"
                                                    value={formData.company.catchPhrase}
                                                    onChange={handleChange}
                                                    placeholder="Enter company catchphrase"
                                                />
                                            </Form.Group>

                                            <Form.Group controlId="formBS">
                                                <Form.Label>BS</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="company.bs"
                                                    value={formData.company.bs}
                                                    onChange={handleChange}
                                                    placeholder="Enter company BS"
                                                />
                                            </Form.Group>
                                            <div className='submit-div'>
                                                <Button variant="primary" type="submit" className='btn-submit'>
                                                    Add User
                                                </Button>
                                            </div>
                                        </Form>
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

export default AddUserForm;
