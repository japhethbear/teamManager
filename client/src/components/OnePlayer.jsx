import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';

const OnePlayer = (props) => {

    const {id} = useParams();
    
    const navigate = useNavigate();

    const [onePlayer, setOnePlayer] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/players/${id}`)
            .then(res => setOnePlayer(res.data.player))
            .catch(err => console.log(err))
    }, [])

    const deletePlayer = (e) => {
        axios.delete(`http://localhost:8000/api/players/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        navigate('/api/players')
    }

    const editPlayer = (id) => {
        navigate(`/api/players/${id}/edit`)
    }

  return (
    <div>
        <h1>Name: {onePlayer.name}</h1>
        <p>Preferred Position: {onePlayer.preferredPosition}</p>
        <p>Game One Status: {onePlayer.gameOneStatus}</p>
        <p>Game Two Status: {onePlayer.gameTwoStatus}</p>
        <p>Game Three Status: {onePlayer.gameThreeStatus}</p>

        <button className="btn btn-info m-2" onClick={() => editPlayer(onePlayer._id)}>Edit Player</button>
        <button className="btn btn-danger" onClick={deletePlayer}>Delete Player</button>
    </div>
  )
}

export default OnePlayer