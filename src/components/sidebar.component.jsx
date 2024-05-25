import {useState} from 'react';

import Filter from './filterbar.component'
import SearchBar from './searchBar.component'
import EventsList from './eventsList.component'
import SideScroll from './sideScroll.component'


const SideBar = ({events}) => {
    const [eventSearchInput, setEventSearchInput] = useState("asdf");
    const [filterInput, setFilterInput] = useState("Filter ...");
    const [toggle, setToggle] = useState(false);
    

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