function Card({ image }) {
    return (
        <figure 
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
}

export default Card