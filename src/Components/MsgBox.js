import React, { useState } from 'react';
import './Msgbox.css';

function MsgBox() {
    let [textareaValue, setTextareaValue] = useState('');
    const [textArray, setTextArray] = useState([]);

    // Event handler to update the state when the textarea value changes
    const handleTextareaChange = (event) => {
        setTextareaValue(event.target.value);
    };

    const handleButtonClick = () => {
        if (textareaValue?.length) {
            // Push the current textarea value into the array
            setTextArray((prevTextArray) => [...prevTextArray, {
                senderid: '1',
                recieverid: "0",
                messege: textareaValue
            }]);
            // Clear the textarea after pushing the value
            setTextareaValue('');
            // console.log("textArray", textArray);
            // setTextArray((prevTextArray) => [...prevTextArray, {
            //     senderid: '1',
            //     recieverid: "0",
            //     messege: 'Hello'
            // }]);
        };
    };

    return (
        <>
            <div className="chat">
                <div className="messages">
                    <div className="messages-content">
                        {textArray.length > 0 ? (
                            <ul>
                                {textArray.map((el, index) => (
                                    <>
                                        {el.senderid == 0 ? (
                                            <div className="message message-personal" key={index}>{el.messege}</div>
                                        ) : (
                                            <div className="message new" key={index}><figure className="avatar">
                                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/156381/profile/profile-80.jpg" /></figure>{el.messege}</div>
                                        )}
                                    </>
                                ))}
                            </ul>
                        ) : (
                            <p>No elements in the array.</p>
                        )}
                    </div>
                </div>
                <div className="message-box">
                    <textarea type="text" onChange={handleTextareaChange} value={textareaValue} className="message-input" placeholder="Type message..."></textarea>
                    <button onClick={handleButtonClick} type="submit" className="message-submit">Send</button>
                </div>
            </div>
        </>
    )
}

export default MsgBox;