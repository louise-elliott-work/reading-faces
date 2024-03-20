import React, {useState} from 'react';
import reference from "/src/reference.json";
import './GameCards.css';

const GameCards = () => {

    const newTestArray = [];
    // TODO Amend so clicking a card, turns over that card only
    const [cardState, setCardState] = useState(false);
    const handleClick= () => {
        setCardState(cardState => !cardState);
        console.log(cardState);
    }

    // * Assign relevant class name to toggle card between active and inactive
    let stateCheck = cardState ? 'active-card' : 'inactive-card';

    //! Test new array of names and images combined
    const createNewTestArray = (newTestArray) => { 
        let nameArrayTest = ['happy', 'confused', 'sad'];
        let imageArrayTest = ['test1', 'test2', 'test3'];
        newTestArray = nameArrayTest.concat(imageArrayTest);
        // * Fisher-Yates sorting algorithm used for card shuffling
        const shuffleTestCards = (newTestArray) => { 
            let currentIndex = newTestArray.length,  randomIndex;
            while (currentIndex > 0) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
                [newTestArray[currentIndex], newTestArray[randomIndex]] = [newTestArray[randomIndex], newTestArray[currentIndex]];
            }
        }
        shuffleTestCards(newTestArray);
    // * Shuffle function working fine for test array, as seen in console log, changing when clicked/refreshed for now.
    console.log(newTestArray);
    return newTestArray;
    }
    createNewTestArray(newTestArray);

// TODO this would need to be the names of the emotions having looped through the json reference file
let namesOnly;
const namesOnlyArray = () => {
    namesOnly = [reference[0].name, reference[1].name, reference[2].name, reference[3].name, reference[4].name, reference[5].name];
    console.log(namesOnly);
    return(namesOnly)
}
namesOnlyArray(namesOnly);

const basicTestArray = namesOnly;
console.log(basicTestArray);

// * Fisher-Yates sorting algorithm used for card shuffling
const basicTestArrayShuffled = (basicTestArray) => { 
    let currentIndex = basicTestArray.length,  randomIndex;
    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [basicTestArray[currentIndex], basicTestArray[randomIndex]] = [basicTestArray[randomIndex], basicTestArray[currentIndex]];
    }
}
basicTestArrayShuffled(basicTestArray);
console.log(basicTestArray);


        return (
            <>
                <p className='instruction'>Click on a card to turn it over and find the pairs</p>
                <div className="cards-grid">
                    {basicTestArray.map((emotion, index) => (
                        <button key={index} className="single-card" onClick={handleClick}>
                            <div className={`${stateCheck}`}>{emotion}</div>
                        </button>
                    ))}
                </div>
            </>
        )

    // return (
    //     <>
    //         <p className='instruction'>Click on a card to turn it over and find the pairs</p>
    //         <div className="cards-grid">
    //                 {reference.map((emotion) => (
    //                     <div key={emotion.id}>
    //                             <button className="single-card" key={emotion.image} onClick={handleClick}>
    //                                 <div className={`${stateCheck}`}><img className="image" src={emotion.image} alt={`Photo of ${emotion.name}`} /></div>
    //                             </button>
    //                     </div>
    //                 ))}
    //                 {reference.map((emotion) => (
    //                     <div key={emotion.id}>
    //                             <button className="single-card" key={emotion.name} onClick={handleClick}>
    //                                 <div className={`${stateCheck}`}>{emotion.name}</div>
    //                             </button>
    //                     </div>
    //                 ))}
    //         </div>
    //     </>
    // )
};

export default GameCards;