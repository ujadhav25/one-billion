
import React, { useState, useEffect } from 'react';
import './Result.scss';
import List from './List';

const Result = React.memo(function MyComponent(props) {
    const [events, setEvents] = useState([]);
    const [births, setBirth] = useState([]);
    const [deaths, setDeath] = useState([]);

    useEffect(() => {
        fetch(`https://byabbe.se/on-this-day/10/19/events.json`, { method: "GET" })
            .then(res => res.json())
            .then(response => {
                const events = response.events.filter(event => event.year === "1988");
                setEvents(events);
                // setIsLoading(false);
            })
            .catch(error => console.log(error));

        fetch(`https://byabbe.se/on-this-day/10/19/births.json`, { method: "GET" })
            .then(res => res.json())
            .then(response => {
                const births = response.births.filter(birth => birth.year === "1988");
                setBirth(births);
                // setIsLoading(false);
            })
            .catch(error => console.log(error));

        fetch(`https://byabbe.se/on-this-day/10/19/deaths.json`, { method: "GET" })
            .then(res => res.json())
            .then(response => {
                const deaths = response.deaths.filter(death => death.year === "1988");
                setDeath(deaths);
                // setIsLoading(false);
            })
            .catch(error => console.log(error));
    }, []);

    console.log('events ===>', events);
    return (
        <div className="tabs">
            <input type="radio" id="tab1" name="tab-control" defaultChecked />
            <input type="radio" id="tab2" name="tab-control" />
            <input type="radio" id="tab3" name="tab-control" />
            <input type="radio" id="tab4" name="tab-control" />
            <ul>
                <li title="Events"><label htmlFor="tab1" role="button"><span>Events</span></label></li>
                <li title="Birth"><label htmlFor="tab2" role="button"><span>Birth</span></label></li>
                <li title="Death"><label htmlFor="tab3" role="button"><span>Death</span></label></li>
            </ul>
            <div className="slider"><div className="indicator" /></div>
            <div className="content">
                <section>
                    <List data={events} />
                </section>
                <section>
                    <List data={births} /> 
                </section>
                <section>
                    <List data={deaths} />
                </section>
            </div>
        </div>
    );
});

export default Result;

// https://codepen.io/woranov/pen/NRqLWK