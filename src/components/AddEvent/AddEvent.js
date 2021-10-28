import React, { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import logo from '../../images/logo.png';
import registerIcon from '../../images/register-icon.png';
import addIcon from '../../images/plus 1.png'
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AddEvent.css';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';
const Dashboard = () => {
    const titleRef = useRef();
    const dateRef = useRef();
    const photoRef = useRef();
    const { allFirebase } = useAuth();
    const { user } = allFirebase;

    const handleAddEvent = (e) => {
        const title = titleRef.current.value;
        const date = dateRef.current.value;
        const photo = photoRef.current.value;
        const newEvent = { title: title, date: date, photo: photo };

        fetch('https://radiant-earth-66783.herokuapp.com/events', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newEvent)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    e.target.reset();
                    swal("Good job!", "Event add Successfully!", "success");
                }
            })
        e.preventDefault();
    }
    useEffect(() => {
        AOS.init();
    }, []);
    console.log(user.email);
    return (
        <Container>
            {user?.email === 'palashtalukder.developer78@gmail.com' ?
                <div className="row bg-light my-5">
                    <div className="col-md-9" data-aos="fade-left" data-aos-delay="300">
                        <div className="add-event-form">
                            <h3 className="text-center mb-3">Add Event</h3>
                            <form onSubmit={handleAddEvent}>
                                <div className="row">
                                    <div className="col-md-6 mb-2">
                                        <input ref={titleRef} className="form-control" type="text" placeholder="Enter Title" />
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <input ref={dateRef} className="form-control" type="date" name="" id="" />
                                    </div>
                                    <div className="col-md-12 mb-2">
                                        <input ref={photoRef} className="form-control" type="text" placeholder="Banner URL" />
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
                :
                <div className="validate">
                    <div className="text-center">
                        <h3><b>Sorry !!</b></h3>
                        <h4>You can't add Events</h4>
                        <h1 className="display-3"> Only Admin are able to Add events... </h1>
                    </div>
                </div>
            }
        </Container>
    );
};

export default Dashboard;