import {useState} from 'react';

import Filter from './filterbar.component'
import SearchBar from './searchBar.component'
import EventsList from './eventsList.component'
import SideScroll from './sideScroll.component'
import Title from './title.component'

const SideBar = ({events, map}) => {
    const [eventSearchInput, setEventSearchInput] = useState("");
    const [filterInput, setFilterInput] = useState("Filters ...");
    const [toggle, setToggle] = useState(false);
    return (
        <div className="flex flex-col pl-2 h-[100%] w-[200px] md:w-[500px] bg-[#EDF7F6]">
            <Title />
            <SearchBar eventSearchInput={eventSearchInput} setEventSearchInput={setEventSearchInput} setFilterInput={setFilterInput}/>
            <div className="flex justify-left bg-slate-300 p-1 my-1.5 gap-3 mr-4 rounded-xl">
                <Filter filterInput={filterInput} setFilterInput={setFilterInput} toggle={toggle} setToggle={setToggle} />
                <SideScroll filterInput={filterInput} setFilterInput={setFilterInput} toggle={toggle} setToggle={setToggle}/>
            </div>
            <EventsList events={events} filterInput={filterInput} eventSearchInput={eventSearchInput} map={map}/>
        </div>  
    )
}

export default SideBar;