import { useState } from 'react'

import Card from './Card'
import elephantImg from './assets/elephant.png'
import giraffeImg from './assets/giraffe.png'
import hippoImg from './assets/hippo.png'
import monkeyImg from './assets/monkey.png'
import pandaImg from './assets/panda.png'
import parrotImg from './assets/parrot.png'
import penguinImg from './assets/penguin.png'
import pigImg from './assets/pig.png'
import rabbitImg from './assets/rabbit.png'
import snakeImg from './assets/snake.png'

const images = [
  { alt: 'Elephant' , src: elephantImg },
  { alt: 'Giraffe', src: giraffeImg },
  { alt: 'Hippopotamus', src: hippoImg },
  { alt: 'Monkey', src: monkeyImg },
  { alt: 'Panda', src: pandaImg },
  { alt: 'Parrot', src: parrotImg },
  { alt: 'Penguin', src: penguinImg },
  { alt: 'Pig', src: pigImg },
  { alt: 'Rabbit', src: rabbitImg },
  { alt: 'Snake', src: snakeImg}
]

function App() {
  const cardsData = images.map((image, index) => ({image, isFlipped: false}))
  const pairedCards = cardsData.concat(cardsData)
  const shuffledCards = pairedCards.sort(() => Math.random() - 0.5)

  const [ cardsState, setCardsState ] = useState(shuffledCards)

  function flipCard(index) {
    cardsState[index].isFlipped = true
    setCardsState([...cardsState])
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {cardsState.map((cardData, index) => {
        return (
          <Card 
            key={index} 
            image={cardData.image} 
            isFlipped={cardData.isFlipped}
            flipCard={() => flipCard(index)}
          />
        )
      })}      
    </div>
  );
}

export default App;
