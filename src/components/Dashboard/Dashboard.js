import React, { useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import logo from '../../images/logo.png';
import registerIcon from '../../images/register-icon.png';
import addIcon from '../../images/plus 1.png'
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Dashboard = () => {
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
                                <th>Registing Date</th>
                                <th>Volunteer List</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Palash Talukder</td>
                                <td>palash@gmail.com</td>
                                <td>12-2-3221</td>
                                <td>Lorem Ipsum</td>
                                <td className="text-center">
                                    <i className="fas fa-trash-alt"></i>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>


                <div className="col-md-3 py-3 bg-white" data-aos="fade-right" data-aos-delay="300">
                    <div className="text-center">
                        <img style={{ width: "150px" }} className="img-fluid" src={logo} alt="" />
                    </div>
                    <div className="mt-4" style={{ display: "flex", alignItems: "center", justifyContent: 'center' }}>
                        <div>
                            <img style={{ width: "25px" }} src={registerIcon} alt="" />
                        </div>
                        <div>
                            <p style={{ color: "blue" }} className="p-0 m-0">Volunteer Register List</p>
                        </div>
                    </div>
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