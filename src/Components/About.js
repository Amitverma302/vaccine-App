import React from 'react'
import './HomePage.css';
import { Link, Outlet } from 'react-router-dom'

function About() {
    return (
        <>
            <div className='homeMain'>
                <div className="homesec">
                    <div><Link to="aboutChkPage"><span className='lnk'>About check Page</span></Link></div>
                    <div><Link to="aboutregPage"><span className='lnk'>About Register Page</span></Link></div>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default About