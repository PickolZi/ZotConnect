import { useState, useEffect } from 'react';

import { addEventFirestore, getAllEventsFirestore } from './utils/firestore';
import { signInUserFirebase, signUpUserFirebase } from './utils/firebase_auth';

import AddEventModal from './components/addEventModal.component';
import Map from './components/map.component';
import Sidebar from './components/sidebar.component';
import AddEventButton from './components/addEventButton.component';

import './App.css';
import dayjs from 'dayjs';
import SignInModal from './components/auth/signin.component';
import SignUpModal from './components/auth/signup.component';
import AuthAvatar from './components/auth/authAvatar.component';


// signInUserFirebase("james2022.college@gmail.com", "jamessan")
// signInUserFirebase("pickol876@gmail.com", "jamessan0")
// signUpUserFirebase("pickol876@gmail.com", "jamessan0")

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
  const [openEventModal, setOpenEventModal] = useState(false);
  
  const [openSignInModal, setOpenSignInModal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);

  const [user, setUser] = useState(null);
  
  const [eventForm, setEventForm] = useState(EVENT_TEMPLATE);

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
      setOpenEventModal(false);
    }).catch((err) => {
      console.error("Something went wrong. Err: ", err)
    });
  }

  return (
    <div className="App flex flex-row h-screen">
      {/* Adding Events components */}
      <AddEventModal 
        eventForm={eventForm} 
        handleEventFormSubmit={handleEventFormSubmit} 
        setEventForm={setEventForm} 
        openEventModal={openEventModal} 
        setOpenEventModal={setOpenEventModal} 
      />
      <AddEventButton setOpenEventModal={setOpenEventModal} />

      {/* User authentication components */}
      <SignInModal 
        user={user} 
        setUser={setUser} 
        openSignInModal={openSignInModal} 
        setOpenSignInModal={setOpenSignInModal}
        setOpenSignUpModal={setOpenSignUpModal}
      />
      <SignUpModal 
        user={user} 
        setUser={setUser} 
        openSignUpModal={openSignUpModal} 
        setOpenSignUpModal={setOpenSignUpModal}
        setOpenSignInModal={setOpenSignInModal}
      />
      <AuthAvatar user={user} setOpenSignInModal={setOpenSignInModal} setOpenSignUpModal={setOpenSignUpModal}/>

      {/* Main page componenets */}
      <Sidebar events={events} />
      <Map events={events} />
    </div>
  );
}

export default App;
