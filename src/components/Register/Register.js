import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Register.css';
import swal from 'sweetalert';
const Register = () => {
    const { id } = useParams();
    const [event, setEvent] = useState([]);
    const history = useHistory();
    const url = `https://radiant-earth-66783.herokuapp.com/events/${id}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setEvent(data))
    }, []);

    const { allFirebase } = useAuth();
    const { user } = allFirebase;

    const nameRef = useRef();
    const emailRef = useRef();
    const titleRef = useRef();
    const dateRef = useRef();

    const handleRegister = (e) => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const title = titleRef.current.value;
        const date = dateRef.current.value;
        const registeredUser = { name: name, email: email, title: title, date: date };
        console.log(registeredUser);
        fetch('https://radiant-earth-66783.herokuapp.com/registered', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(registeredUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    e.target.reset();
                    history.push('/my-event')
                    swal("Good job!", "Register Successfully!", "success");
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-5 register mx-auto text-center">
                        <h2>Register</h2>
                        <div>
                            <form onSubmit={handleRegister}>
                                <input ref={nameRef} type="text" defaultValue={user.displayName} disabled />
                                <input ref={emailRef} defaultValue={user?.email} type="email" placeholder="Enter Your email" required />
                                <input ref={titleRef} type="text" defaultValue={event.title} disabled />
                                <input ref={dateRef} type="text" defaultValue={event.date} disabled />
                                <div>
                                    <input className="btn-primary" type="submit" value="Register" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;