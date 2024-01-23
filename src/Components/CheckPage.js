import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify';

function CheckPage() {
  const [inputValue, setInputValue] = useState('');
  const isButtonDisabled = inputValue.length !== 12
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleCheckLocalStorage = () => {
    if (inputValue.trim() !== '') {
      // Retrieve stored values from local storage
      const localStorageValues = JSON.parse(localStorage.getItem('storedValues')) || [];

      // Check if the input value matches any of the stored values
      const isMatch = localStorageValues.includes(inputValue);
      if(isMatch){
        toast('You have already registered👍', {
          position: "top-center",
          autoClose: 1000,
      });
      }else{
        toast('No record found.❌', {
          position: "top-center",
          autoClose: 1000,
      });
      }
    }
  };

  return (
    <>
      <div className='container mx-auto'>
        <div className='Home'>
          <div className='PrntbtndvRG'>
            <div><TextField id="filled-basic" onChange={handleInputChange} value={inputValue} type='number' label="Aadhar no." variant="outlined" /></div>
            <div><Button disabled={isButtonDisabled} onClick={handleCheckLocalStorage} variant="outlined">Check</Button></div>
            {/* <div><NavLink to="/">Home Page</NavLink></div>
            <div><NavLink to="/registerPage">Register Page</NavLink></div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckPage