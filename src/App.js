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
        return (
          <figure 
            key={index} 
            style={{
              boxSizing: 'border-box',
              width: '160px', 
              height: '160px',
              borderRadius: '16px', 
              border: '12px solid brown',
              display: 'flex', 
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'beige' 
            }}
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              style={{
                maxWidth: '128px', 
                maxHeight: '128px'
              }}
            />
          </figure>
        )
      })}      
    </div>
  );
}

export default App;
