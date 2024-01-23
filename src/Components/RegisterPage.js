import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './HomePage.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RegisterPage() {
    const [showInput, setShowInput] = useState(false);
    const [showRgBtn, setshowRgBtn] = useState(false);
    const [showotpBtn, setshowotpBtn] = useState(true);
    const [inputValue, setInputValue] = useState('');
    const [otpinputValue, setOtpinputValue] = useState('');
    const isButtonDisabled = inputValue.length !== 12;
    const isRgButtonDisabled = otpinputValue.length !== 4;
    const [otp, setOtp] = useState('');
    const [storedValues, setStoredValues] = useState([]);

    const handleOtpInputChange = (event) => {
        setOtpinputValue(event.target.value);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSaveClick = () => {
        if (otpinputValue === otp) {
            toast('Registed successfully', {
                position: "top-center",
                autoClose: 1000,
            });
            setOtpinputValue("");
            setshowRgBtn(false);
            setShowInput(false);
            setshowotpBtn(true);
            if (inputValue.trim() !== '') {
                // Save the new value to local storage
                const newLocalStorageValues = [...storedValues, inputValue];
                localStorage.setItem('storedValues', JSON.stringify(newLocalStorageValues));

                // Update the list of stored values in the state
                setStoredValues(newLocalStorageValues);
                setInputValue('');
            }
        } else {
            alert('OTP is incorrect!');
        }


    };

    useEffect(() => {
        // Use localStorage.setItem to store the value under a specific key
        localStorage.setItem('Aadhar', inputValue);
    }, [inputValue]); // Run the effect whenever inputValue changes

    const handleClick = () => {
        const newOTP = Math.floor(1000 + Math.random() * 9000);
        setOtp(newOTP.toString());
        window.alert(`Your OTP is: ${newOTP}`);
        console.log("Otp", otp);
        setShowInput(true);
        toast('OTP successfully created!', {
            position: "top-center",
            autoClose: 1000,
        });
        setshowotpBtn(false);
        setshowRgBtn(true);
    };
    return (
        <>
            <div className='container mx-auto'>
                <div className='Home'>
                    <div className='PrntbtndvRG'>
                        <div><TextField id="outlined-basic" value={inputValue} type='number'
                            onChange={handleInputChange} label="Adhar No." variant="outlined" /></div>
                        <div>{showInput && <TextField onChange={handleOtpInputChange} value={otpinputValue} id="filled-basic" type='number' label="OTP" variant="filled" />}</div>
                        <div>{showotpBtn && <Button onClick={handleClick} disabled={isButtonDisabled} value={otpinputValue} variant="outlined">Get OTP</Button>}</div>
                        <div>{showRgBtn && <Button onClick={handleSaveClick} disabled={isRgButtonDisabled} variant="contained">Register</Button>}</div>
                        {/* <div><ul>
                            {storedValues.map((value, index) => (
                                <li key={index}>{value}</li>
                            ))}
                        </ul></div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterPage;