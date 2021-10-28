import React from 'react';
import './SingleEvent.css';
import { NavLink } from 'react-router-dom';
const SingleEvents = ({ event }) => {
    const { _id, title, photo } = event;

    return (
        <div className="col-md-3 mb-4">
            <NavLink style={{ color: "#fff", textDecoration: "none" }} to={`/events/${_id}`}>
                <div className="singleEvent">
                    <div className="event-photo">
                        <img style={{ width: "100%", height: "220px" }} src={photo} alt="" />
                    </div>
                    <div className="event-title">
                        <p className="text-center text-light p-0 m-0">{title}</p>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};

export default SingleEvents;