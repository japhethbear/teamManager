import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'

const EditPlayer = (props) => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [player, setPlayer] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/players/${id}`)
            .then(res => setPlayer(res.data.player))
            .catch(err => console.log(err))
    }, [])
    
      const [errors, setErrors] = useState({})
      
      const onChangeHandler = (e) => {
        setPlayer({
          ...player,
          [e.target.name]: e.target.value
        })
      }
    
      const formValidator = () => {
        let isValid = true
        if (player.name.length <2) {
          return false
        }
        if (player.preferredPosition.length < 2) {
          return false
        }
        return isValid
      }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formValidator()) {
          axios.put(`http://localhost:8000/api/players/${id}`, player)
            .then(res => console.log(res))
            .catch(err => console.log(err))
          navigate('/api/players')
        }
        else {
          setErrors({
            name: "Name must be at least 2 characters",
            preferredPosition: "Preferred Position must be at least 2 characters"
          })
        }
      }

    const navigateToDashboard = () => {
        navigate('/api/players')
      }

  return (
    <div>
        <h1 className='mx-auto'>Edit Player</h1>
        <form action="" className="col-md-6 mx-auto" onSubmit={handleSubmit}>
            {/* {errors.name ? <p className="text-danger">{errors.name}</p> : ""}
            {errors.preferredPosition ? <p className='text-danger'>{errors.preferredPosition}</p> : ""} */} 
            <div className='form-group'>
                <label htmlFor='name'>Player Name: </label>
                <input type="text" className='form-control' name="name" id="name" value={player.name} onChange={onChangeHandler}/>
            </div>
            <div className='form-group'>
                <label htmlFor='preferredPosition'>Preferred Position: </label>
                <input type="text" className='form-control' name="preferredPosition" id="preferredPosition" value={player.preferredPosition} onChange={onChangeHandler}/>
            </div>
            <button className='btn btn-info mt-2'>Update Player</button>
        </form>
            <button className="btn btn-secondary mt-2" onClick={navigateToDashboard}>Dashboard</button>
    </div>
  )
}

export default EditPlayer