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
  const pairedImages = images.concat(images)
  const shuffledImages = pairedImages.sort(() => Math.random() - 0.5)
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {shuffledImages.map((image, index) => {
        return <Card key={index} image={image} />
      })}      
    </div>
  );
}

export default App;
