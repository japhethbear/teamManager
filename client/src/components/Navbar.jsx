import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <p className='mx-auto'><Link to="/api/players">Home</Link></p>
        <p className='mx-auto'><Link to="/api/players/create">Create Player</Link></p>
    </div>
  )
}

export default Navbar