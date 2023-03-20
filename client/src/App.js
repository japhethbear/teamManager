import './App.css';
import axios from 'axios';
import PlayerForm from './components/PlayerForm';
import PlayerDashboard from './components/PlayerDashboard';
import OnePlayer from './components/OnePlayer';
import EditPlayer from './components/EditPlayer';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route element={<PlayerForm/>} path="api/players/create"/>
        <Route element={<PlayerDashboard/>} path="api/players"/>
        <Route element={<OnePlayer/>} path="api/players/:id"/>
        <Route element={<EditPlayer/>} path="api/players/:id/edit"/>
      </Routes>

    </div>
  );
}

export default App;
