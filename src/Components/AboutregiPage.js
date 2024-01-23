import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function AboutregiPage() {
  return (
    <>
    <div className='chekpage'>
        <h2>All about Register Page:</h2>
        <p>In Register page you got a input box where you enter your 12 digit Aadhar no. and click on "GET OTP" button.Now you get 4 digit otp in alert. Enter this 4 digit otp in otp input and click on Register button. You get a message that "You have successfully registered👍".</p>
        <div className='thnks'>
          <Link to="thank">
            Click me
          </Link>
        </div>
        <Outlet />
      </div>
    </>
  )
}

export default AboutregiPage;