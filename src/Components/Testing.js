import React from 'react';


// map functon start >>

// const people = [
//     'Creola Katherine Johnson: mathematician',
//     'Mario José Molina-Pasquel Henríquez: chemist',
//     'Mohammad Abdus Salam: physicist',
//     'Percy Lavon Julian: chemist',
//     'Subrahmanyan Chandrasekhar: astrophysicist'
// ];
// const listItems = people.map(person => <li>{person}</li>);

// end <<

// filter method >>>

const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
}, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
}, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
}, {
    name: 'Percy Lavon Julian',
    profession: 'chemist',
}, {
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
}];

const chemists = people.filter(person =>
    person.profession === 'mathematician'
);
const listItems = chemists.map(person =>
    <li>
       <img
         src={("")}
         alt={person.name}
       />
       <p>
         <b>{person.name}:</b>
         {' ' + person.profession + ' '}
         known for {person.accomplishment}
       </p>
    </li>
  );

function Testing() {
    return (
        <>
            <ul>{listItems}</ul>
        </>
    )
}

export default Testing