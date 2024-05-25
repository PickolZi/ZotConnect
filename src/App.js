import { useState, useEffect } from 'react';

import { getAllEventsFirestore } from './utils/firestore';

import Map from './components/map.component';
import Sidebar from './components/sidebar.component';

import './App.css';


function App() {
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

  return (
    <div className="App flex flex-row h-screen">
      <Sidebar events={events} />
      <Map events={events} />
    </div>
  );
}

export default App;
