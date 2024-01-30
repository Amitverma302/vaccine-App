import React, { useState } from 'react'
import './HomePage.css';
import { toast } from 'react-toastify';
import { Button, TextField } from '@mui/material';


function LoginPage() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        const validPhoneNumber = '123123';
        const validPassword = 'Amit@123';

        if (phoneNumber === validPhoneNumber && password === validPassword) {
            setLoggedIn(true);
            setPassword("");
            toast('Successfully login', {
                position: "top-center",
                autoClose: 1000,
            });

        } else {
            toast('Invalid phone number or password. Please try again.', {
                position: "top-center",
                autoClose: 1000,
            });
            setPassword("");
            setPhoneNumber("");
        }
    };

    const handleLogout = () => {
        setLoggedIn(false);
        toast('Successfully Logout', {
            position: "top-center",
            autoClose: 1000,
        });
    };
    return (
        <>
            <div className="loginmain">
                {isLoggedIn ? (
                    
                    <div>
                        <h2>Welcome! You are logged in.</h2>
                        <Button onClick={handleLogout} variant="contained" color="error">Logout</Button>
                    </div>
                ) : (
                    <div>
                        <h1>Login Page</h1>
                        <div><TextField id="outlined-basic" value={phoneNumber} type='tel'
                            onChange={(e) => setPhoneNumber(e.target.value)} label="Phone Number" variant="outlined" /></div>
                        <br />
                        <div><TextField id="outlined-basic" value={password} type='password'
                            onChange={(e) => setPassword(e.target.value)} label="Password" variant="outlined" /></div>
                        <br />
                        <Button onClick={handleLogin}  variant="contained" color="success">Login</Button>
                    </div>
                )}
            </div>
        </>
    )
}

export default LoginPage;