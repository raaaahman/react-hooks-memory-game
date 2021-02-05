import reactLogo from './assets/logo.svg'

function Card({ image, isFlipped, flipCard }) {
  const displayImg = isFlipped ? image : { src: reactLogo, alt: 'A card to flip' }
  
  return (
    <figure
      onClick={() => flipCard()}
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
        src={displayImg.src} 
        alt={displayImg.alt}
        style={{
          maxWidth: '128px', 
          maxHeight: '128px'
        }}
      />
    </figure>
  )
}

export default Card