import React from 'react'
import './HomePage.css';
import { useSearchParams } from 'react-router-dom';

function Search() {
    const [searchParams, setSearchParams] = useSearchParams("");
    const age = searchParams.get("age");


    return (
        <>
            <div className='homeMain'>
                <div className="homesec">
                    <div className='hbtn'>
                        <h1> My age is : {age}</h1>
                        <button onClick={() => setSearchParams({ age: 24 })}><h2>Set age</h2></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search