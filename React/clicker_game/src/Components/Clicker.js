import { useState } from 'react'
const Clicker = () => {
    let [num, setNum] = useState(1)
    const genRandom = () => {
        //This needs + 1, otherwise it will give you numbers 0-9
        let rand = Math.floor(Math.random() * 10) + 1;
        //Update state with new random number
        setNum(rand)
    }

    return (
        <div>
            <h1>Number is: {num}</h1>
            {num === 7 ? <h2>Game Over</h2> : 
            <h2><button onClick={genRandom}>Random Number</button></h2>}
        </div>
    )
}

export default Clicker; 