
// Generic Error Message, in case elements don't load properly

const Error = () => {

  console.log('Rendering Error')
    
  return (    
    
      <div className='error'>
      
        <picture>
          <img 
              src='src/assets/icons/triangle-exclamation-solid.svg' 
              alt='Error Icon' 
              width='28rem' 
              height='28rem'
            />                    
        </picture>

        <h3>Something Went Wrong</h3>

      </div>
  
    )
}

export default Error

