import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import logo from '../../images/logo.png';
import registerIcon from '../../images/register-icon.png';
import addIcon from '../../images/plus 1.png'
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AddEvent.css';
const Dashboard = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    const handleAddEvent = (e) => {

        e.preventDefault();
    }
    return (
        <Container>
            <div className="row bg-light my-5">
                <div className="col-md-9" data-aos="fade-left" data-aos-delay="300">
                    <div className="add-event-form">
                        <h3 className="text-center mb-3">Add Event</h3>
                        <form onSubmit={handleAddEvent}>
                            <div className="row">
                                <div className="col-md-6 mb-2">
                                    <input className="form-control" type="text" placeholder="Enter Title" />
                                </div>
                                <div className="col-md-6 mb-2">
                                    <input className="form-control" type="date" name="" id="" />
                                </div>
                                <div className="col-md-6 mb-2">
                                    <textarea className="form-control" name="" id="" cols="30" rows="2" placeholder="Event Details"></textarea>
                                </div>
                                <div className="col-md-6 mb-2">
                                    <input className="form-control" type="text" placeholder="Banner URL" />
                                </div>
                            </div>
                            <div className="text-end">
                                <button type="submit" className="btn btn-primary">Add event</button>
                            </div>
                        </form>
                    </div>
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