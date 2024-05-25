import { useState, useEffect } from 'react';

import { getAllEventsFirestore } from './utils/firestore';

import AddEventModal from './components/addEventModal.component';
import Map from './components/map.component';
import Sidebar from './components/sidebar.component';
import AddEventButton from './components/addEventButton.component';

import './App.css';


function App() {
  const [events, setEvents] = useState([]);
  const [openModal, setOpenModal] = useState(false);

    // Gets events from firebase api.
    useEffect(() => {
        const getAllEvents = async () => {
            getAllEventsFirestore().then((res) => {
                setEvents(res);
            })
        }
        getAllEvents();
    }, []);

  return (
    <div className="App flex flex-row h-screen">
      <Sidebar events={events} />
      <AddEventModal openModal={openModal} setOpenModal={setOpenModal} />
      <AddEventButton setOpenModal={setOpenModal} />
      <Map events={events} />
    </div>
  );
}

export default App;
