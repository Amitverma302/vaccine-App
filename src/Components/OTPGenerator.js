// OTPGenerator.js
import React, { useState } from 'react';

const OTPGenerator = () => {
  const [otp, setOtp] = useState('');

  const generateOTP = () => {
    // Generate a random 4-digit OTP
    const newOTP = Math.floor(1000 + Math.random() * 9000);
    setOtp(newOTP.toString());
  };

  return (
    <div>
      <h2>Your OTP: {otp}</h2>
      <button onClick={generateOTP}>Generate OTP</button>
    </div>
  );
};

export default OTPGenerator;
