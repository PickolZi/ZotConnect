import { firebaseConfig } from "./firebase";
import { initializeApp } from "firebase/app";
import { 
    getFirestore, 
    collection, 
    getDocs, 
    getDoc, 
    addDoc
} from "firebase/firestore";

import { app } from "./firebase";
// const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const eventsCollection = collection(db, "Events");

export const getAllEventsFirestore = async () => {
    return await getDocs(eventsCollection).then((res) => {
        let docs = res.docs.map((doc) => {
            return {...doc.data(), event_id: doc.id, start_date: doc.data().start_date.toDate(), end_date: doc.data().end_date.toDate()}
        })
        // console.log(docs[0].start_date.valueOf())
        docs.sort((a,b) => a['start_date'].valueOf() - b['start_date'].valueOf())
        return docs;    
    });
}

export const addEventFirestore = async ({title, description, start_date, end_date, host_uid, geopoint, tags}) => {
    const doc = {
        title: title,
        description: description,
        start_date: start_date,
        end_date: end_date,
        host_uid: host_uid,
        geopoint: geopoint,
        tags: tags
    };
    const docRef = await addDoc(eventsCollection, doc);
    return docRef;
}

// Testing data to add a new event into firestore.
const AVAILABLE_TAGS = ['hackathon', 'study', 'social', 'networking']
const EXAMPLE_DOC = {
    title: "Random event #" + Math.floor(Math.random() * 100),
    description: "Random UCI event",
    start_date: new Date(),
    end_date: new Date(),
    host_uid: "fdj483290rufdsfhji32y489",
    geopoint: [33.6424 + (Math.random() * 0.03), -117.8417 + (Math.random() * 0.03)],
    tags: AVAILABLE_TAGS[Math.floor(Math.random() * AVAILABLE_TAGS.length)]
}

// Calling Methods below.

// addEventFirestore(EXAMPLE_DOC).then((res) => {
//     console.log("Adding document to firestore: ", res)
// })

// console.log(await getAllEventsFirestore())