import './App.css';

import Map from './components/map.component';
import Sidebar from './components/sidebar.component';

import db from './utils/firestore';


function App() {
  return (
    <div className="App flex flex-row h-screen">
      <Sidebar />
      <Map />
    </div>
  );
}

export default App;
