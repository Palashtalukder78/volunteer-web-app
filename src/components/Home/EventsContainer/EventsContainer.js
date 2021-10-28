import React, { useEffect, useState } from 'react';
import SingleEvents from '../SingleEvents/SingleEvents';
import './EventsContainer.css'
const Events = () => {
    const [events, setEvents] = useState([]);
    const [searchedEvent, setSearchEvent] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => {
                setEvents(data)
                setSearchEvent(data)
            })
    }, [])

    const handleSearch = (e) => {
        const searchValue = e.target.value;
        console.log(searchValue);
        const searchResult = events.filter(event => event.title.toLowerCase().includes(searchValue.toLowerCase()));
        setSearchEvent(searchResult)
    }



    return (
        <div className="container events-container pt-5">
            <div className="row">
                <div className="col-md-5 mx-auto">
                    <div className="text-center">
                        <input onChange={handleSearch} className="search shadow" style={{ width: "100%" }} type="text" placeholder="Search Event" />
                    </div>
                </div>
            </div>
            <h2 className="text-center my-4">Events</h2>
            <div className="row my-3">
                {
                    searchedEvent.map(event => <SingleEvents
                        key={event._id}
                        event={event}
                    ></SingleEvents>)
                }
            </div>
        </div>
    );
};

export default Events;