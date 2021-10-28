import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const MyEvent = () => {
    const [registeredUsers, setRegisteredUsers] = useState([]);
    const { allFirebase } = useAuth();
    const { user } = allFirebase;
    useEffect(() => {
        fetch('https://radiant-earth-66783.herokuapp.com/registered/')
            .then(res => res.json())
            .then(data => setRegisteredUsers(data))
    }, []);

    const currentUser = user.displayName;
    const myEvents = registeredUsers.filter(registeredUser => registeredUser.name === currentUser);
    console.log(myEvents.length);
    return (
        <>
            {myEvents.length > 1 ?
                <div className="container">
                    <h1 className="text-center">My Event</h1>
                    <div className="row my-4">
                        {
                            myEvents.map(myEvent => (
                                <div className="col-md-4 mb-3">
                                    <div className="bg-primary p-4 text-center text-light shadow">
                                        <div>
                                            <h3>{myEvent.title}</h3>
                                            <h5>{myEvent.date}</h5>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                :
                <div>
                    <div className="text-center">
                        <h1>You Didn't choose yet any Events</h1>
                        <Link style={{ textDecoration: "none", }} to="/home">
                            <button className="btn btn-primary">Back for choose Event</button>
                        </Link>
                    </div>
                </div>
            }
        </>
    );
};

export default MyEvent;