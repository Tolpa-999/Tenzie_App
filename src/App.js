import React from 'react';
import './App.css';
import Num from './Num';
import { nanoid } from "nanoid"
import Confettie from "react-confetti"

function App() {
  const [tenzies, setTenzies] = React.useState(false)
  const [dice, setDice] = React.useState(generateRandomNumbers())
  React.useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld)
    const firstValue = dice[0].value
    const sameValue = dice.every((die) => die.value === firstValue)
    if (allHeld) {
      if (sameValue) {
        setTenzies(true)
      }
    }
  },[dice])
  function generateRandomNumbers() {
    const newArr = []
    for (let i = 0; i < 10; i++) {
      newArr.push({
        value: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
        id: nanoid()
      })
    }
    return  newArr
  }

  function rollDiceAfterWin() {
    const newArr = []
    for (let i = 0; i < 10; i++) {
      newArr.push({
        value: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
        id: nanoid()
      })
    }
    setTenzies(false)
    setDice(() => newArr)
  }

  function rollDice() {
    setDice(previous => previous.map((die) => {
      if (die.isHeld === true) {
        return die
      } else {
        return {...die, value: Math.floor(Math.random() * 6) + 1}
      }
      })
    )
  }
  function holdDice(id) {
    setDice(previous => previous.map(function (die)  {
      return die.id === id ? {...die, isHeld: !die.isHeld } : die
    }))
  }

  
  
  const vals = dice.map((die) => {
    return <Num value={die.value} id={die.id} isHeld={die.isHeld} holdDice={holdDice} />
  })
  return (
    <div className='container'>
      {tenzies && <Confettie/>}
      <div className='main-box'>
        <div className='name'>Tenzie</div>
        <div className='text'>
          Roll untill all dice are the same. Click each die to freeze it at it's current value between rolls.
        </div>
        <div className='nums-box'>
          {vals}
        </div>
        {tenzies ?
          <button onClick={rollDiceAfterWin}>New Game</button> :
          <button onClick={rollDice}>Roll</button>          
        }
      </div>
    </div>
  )
}

export default App;

