import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import logo from '../../images/logo.png';
import addIcon from '../../images/plus 1.png'
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Dashboard.css';
import swal from 'sweetalert'
import useAuth from '../../hooks/useAuth';
const Dashboard = () => {
    const [registeredUsers, setRegisteredUsers] = useState([]);
    const { allFirebase } = useAuth();
    const { user } = allFirebase;
    useEffect(() => {
        fetch('https://radiant-earth-66783.herokuapp.com/registered')
            .then(res => res.json())
            .then(data => setRegisteredUsers(data))
    }, [registeredUsers]);
    const handleDeleteRegisteredUser = (id) => {
        if (user?.email === 'palashtalukder.developer78@gmail.com') {
            swal("Do you want delete the User ?")
                .then((value) => {
                    if (value) {
                        const url = `https://radiant-earth-66783.herokuapp.com/registered/${id}`;
                        fetch(url, {
                            method: 'DELETE'
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.deletedCount > 0) {
                                    const remainingRegisteredUser = registeredUsers.filter(registeredUser => registeredUser._id !== id);
                                    setRegisteredUsers(remainingRegisteredUser);
                                    swal("Good job!", "User deleted successfully!", "success");
                                }
                                else {
                                    swal("OOPS!", "Something went wrong!", "warning");
                                }
                            })
                    }
                });
        } else {
            swal("You can not delete it!", "Only admin are able to Delete!", "warning");
        }

    }
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <Container>
            <div className="row bg-light my-5">
                <div className="col-md-9" data-aos="fade-left" data-aos-delay="300">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Date</th>
                                <th>Volunteer List</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                registeredUsers.map(registeredUser => (
                                    <tr>
                                        <td>{registeredUser.name}</td>
                                        <td>{registeredUser.email}</td>
                                        <td>{registeredUser.date}</td>
                                        <td>{registeredUser.title}</td>
                                        <td onClick={() => handleDeleteRegisteredUser(registeredUser._id)} className="text-center delete-register-user">
                                            <i className="fas fa-trash-alt"></i>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </div>
                <div className="col-md-3 py-3 bg-white" data-aos="fade-right" data-aos-delay="300">
                    <div className="text-center">
                        <img style={{ width: "150px" }} className="img-fluid" src={logo} alt="" />
                    </div>
                    <NavLink style={{ textDecoration: "none" }} to="/dashboard">
                        <div className="mt-4" style={{ display: "flex", alignItems: "center", justifyContent: 'center' }}>
                            <div>
                                <i style={{ fontSize: "20px", color: "blue" }} class="fas fa-users-cog"></i>
                            </div>
                            <div>
                                <p style={{ color: "blue" }} className="p-0 m-0">Volunteer Register List</p>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink style={{ textDecoration: "none", color: "black" }} to="/add-event">
                        <div className="my-2" style={{ display: "flex", alignItems: "center", justifyContent: 'center' }}>
                            <div>
                                <img style={{ width: "25px" }} src={addIcon} alt="" />
                            </div>
                            <div>
                                <p className="p-0 m-0">Add Event</p>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
        </Container>
    );
};

export default Dashboard;