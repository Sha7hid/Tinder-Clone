import React, {useState} from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'
function TinderCards() {
    const [people, setPeople] = useState([
        {
            name:'Elon Musk',
            url:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fwww.herald.ng%2Fwp-content%2Fuploads%2F2020%2F04%2Felon_musk_royal_society.jpg%3Ffit%3D1200%252C1200%26ssl%3D1&f=1&nofb=1&ipt=7c5024efee9f00a562bf437578a0d11829dc77fe6d45d0500bd29659851a6f34&ipo=images"
        },
        {
            name:'Charlie Puth',
            url:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.celebtattler.com%2Fwp-content%2Fuploads%2F2019%2F05%2Fcharlie-045.jpg&f=1&nofb=1&ipt=90035ba5a725b85b49d567daca52ef8d5852a36486b7f96d0fcde267435af503&ipo=images"
        }
    ]);
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
