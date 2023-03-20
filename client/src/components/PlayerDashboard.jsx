import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const PlayerDashboard = () => {
    const [players, setPlayers] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(res => setPlayers(res.data.allPlayers))
            .catch(err => console.log(err))
    }, [])

    const navigateToPlayerForm = () => {
        navigate('/api/players/create')
    }

    const deletePlayer = (id) => {
        axios.delete(`http://localhost:8000/api/players/${id}`)
            .then(res => {
                const filteredPlayers = players.filter(player => player._id !== id)
                setPlayers(filteredPlayers)
            })
            .catch(err => console.log(err))
    }

    const editPlayer = (id) => {
        navigate(`/api/players/${id}/edit`)
    }

  return (
    <div>
        <h1 className='mx-auto'>Team Roster</h1>
        <table className='col-md-6 mx-auto mt-4'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Preferred Position</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {players.map((player, i) => {
                    return (
                        <tr key={player._id}>
                            <td><Link to={`${player._id}`}>{player.name}</Link></td>
                            <td>{player.preferredPosition}</td>
                            <td>
                                <button className='btn btn-danger m-2' onClick={() => deletePlayer(player._id)}>Delete</button>
                                <button className='btn btn-secondary' onClick={() => editPlayer(player._id)}>Edit</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        <button className="btn btn-info offset-5 mt-2" onClick={navigateToPlayerForm}>Create Player</button>
    </div>
  )
}

export default PlayerDashboard