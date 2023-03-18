import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import PlayerForm from './components/PlayerForm';


function App() {

  useEffect(() => {
    axios.get("http://localhost:8000/api/players")
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }, [])


  
  return (
    <div className="App">
      <PlayerForm/>
    </div>
  );
}

export default App;
