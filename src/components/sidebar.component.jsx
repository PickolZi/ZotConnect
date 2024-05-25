import {useEffect, useState} from 'react';

import Filter from './filterbar.component'
import SearchBar from './searchBar.component'
import EventsList from './eventsList.component'
import SideScroll from './sideScroll.component'

import { getAllEventsFirestore } from '../utils/firestore';


const SideBar = () => {
    const [eventSearchInput, setEventSearchInput] = useState("asdf");
    const [filterInput, setFilterInput] = useState("Filter ...");
    const [toggle, setToggle] = useState(false);

    const [events, setEvents] = useState([]);

    // Gets events from firebase api.
    useEffect(() => {
        const getAllEvents = async () => {
            getAllEventsFirestore().then((res) => {
                setEvents(res);
            })
        }
        getAllEvents();
    }, []);

    useEffect(() => {
        console.log('events: ', events)
    }, [events])

    return (
    <div className=" flex-wrap h-[100%] w-[200px] md:w-[500px] bg-[#EDF7F6]">
        <SearchBar eventSearchInput={eventSearchInput} setEventSearchInput={setEventSearchInput}/>
        <div className="flex justify-left bg-slate-300">
            <Filter filterInput={filterInput} setFilterInput={setFilterInput} toggle={toggle} setToggle={setToggle} />
            <SideScroll filterInput={filterInput} setFilterInput={setFilterInput} toggle={toggle} setToggle={setToggle}/>
        </div>
        <EventsList events={events} />
    </div>
    )
}

export default SideBar;