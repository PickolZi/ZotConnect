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

    // useEffect(() => {
    //   console.log("events form: ", eventForm)
    // }, [eventForm])

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
      // let tempEvents = [...events]
      // tempEvents.sort((a,b) => {a['start_date'] - b['end_date']})
      // console.log(tempEvents)
      // setEvents(tempEvents)
      // console.log("events changed: ", events)
    },[events])

    const handleEventFormSubmit = async (newEventForm) => {
      await addEventFirestore(newEventForm).then((res) => {
        let tempEvents = [...events, newEventForm]
        // tempEvents.sort((a,b) => a['start_date'].seconds - b['start_date'].seconds)
        // console.log(tempEvents)
        setEvents(tempEvents)
        setEventForm(EVENT_TEMPLATE);
        setOpenModal(false);
      }).catch((err) => {
        console.error("Something went wrong. Err: ", err)
      });
    }

  return (
    <div className="App flex flex-row h-screen">
      <Sidebar events={events} />
      <AddEventModal eventForm={eventForm} handleEventFormSubmit={handleEventFormSubmit} setEventForm={setEventForm} openModal={openModal} setOpenModal={setOpenModal} />
      <AddEventButton setOpenModal={setOpenModal} />
      <Map events={events} />
    </div>
  );
}

export default App;
