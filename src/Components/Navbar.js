import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className='main'>
                <div className="navbar">
                    <div className="left">
                        <div><NavLink to="/">Home</NavLink></div>
                        <div><NavLink to="/checkPage">Check</NavLink></div>
                        <div><NavLink to="/registerPage">Register</NavLink></div>
                        <div><NavLink to="/about">About</NavLink></div>
                        <div><NavLink to="/search">Search</NavLink></div>
                        <div><NavLink to="/login">Login</NavLink></div>
                        <div><NavLink to="/Croper">Croper</NavLink></div>
                        <div><NavLink to="/imagegallery">Gallery</NavLink></div>
                        <div><NavLink to="/testing">Other</NavLink></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar