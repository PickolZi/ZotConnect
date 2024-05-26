import { useState, useEffect } from 'react';

import { addEventFirestore, getAllEventsFirestore } from './utils/firestore';

import AddEventModal from './components/addEventModal.component';
import Map from './components/map.component';
import Sidebar from './components/sidebar.component';
import AddEventButton from './components/addEventButton.component';

import './App.css';
import dayjs from 'dayjs';


const EVENT_TEMPLATE = {
  title: undefined,
  description: undefined,
  start_date: dayjs().toDate(),
  end_date: dayjs().toDate(),
  // geopoint: undefined,
  geopoint: [33.6424 + (Math.random() * 0.03), -117.8417 + (Math.random() * 0.03)],
  tags: "social",
  // host_uid: undefined
  host_uid: "TestUIDNeedToAdd"
}

function App() {
  const [events, setEvents] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [eventForm, setEventForm] = useState(EVENT_TEMPLATE);
  const [map, setMap] = useState(null);

    // Gets events from firebase api.
    useEffect(() => {
      const getAllEvents = async () => {
        getAllEventsFirestore().then((res) => {
            setEvents(res);
        })
      }
      getAllEvents();
    }, []);

    const handleEventFormSubmit = async (newEventForm) => {
      await addEventFirestore(newEventForm).then((res) => {
        let tempEvents = [...events, newEventForm]
        tempEvents.sort((a,b) => a['start_date'].valueOf() - b['start_date'].valueOf())
        setEvents(tempEvents)
        setEventForm(EVENT_TEMPLATE);
        setOpenModal(false);
      }).catch((err) => {
        console.error("Something went wrong. Err: ", err)
      });
    }

  return (
    <div className="App flex flex-row h-screen">
      <Sidebar events={events} map={map}/>
      <AddEventModal eventForm={eventForm} handleEventFormSubmit={handleEventFormSubmit} setEventForm={setEventForm} openModal={openModal} setOpenModal={setOpenModal} />
      <AddEventButton setOpenModal={setOpenModal} />
      <Map events={events} map={map} setMap={setMap}/>
    </div>
  );
}

export default App;
