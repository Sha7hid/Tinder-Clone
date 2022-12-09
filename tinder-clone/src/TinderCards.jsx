import React, {useState, useEffect} from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'
import axios from './axios';
function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
// only runs one time
async function fetchData(){
    // function to fetch data and below is request to get data from that url the base url is already given in axios.js
    const req = await axios.get('/tinder/cards');
// set the data into the state setPeople
    setPeople(req.data);
}
fetchData();
    }, []);
    console.log(people);
    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        // setLastDirection(direction);
    };
    const outOfFrame = (name) => {
        console.log(name + "leftthe screen!");
    };
  return (
    <div className='tinderCards'>
        <div className="tinderCards__cardContainer">
        {people.map((person) => (
<TinderCard
className='swipe'
key={people.name}
preventSwipe={["up","down"]}
onSwipe={(dir) => swiped(dir,people.name)}
onCardLeftScreen={() => outOfFrame(people.name)}
>
<div
style={{ backgroundImage: `url(${person.url})`}}
className="card"
>
<h3>{person.name}</h3>
</div>
</TinderCard>
      ))}
        </div>
     
    </div>
  )
}

export default TinderCards
