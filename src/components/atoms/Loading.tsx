
// Loading Spinner, to provide feedback when data is being fetched

const Loading = () => {

  console.log('Rendering Loading')

  return (

    <picture>
        <img 
          className='loading'          
          src='src/assets/icons/spinner-solid.svg'
          alt='Loading Spinner Icon'
          width='28rem'
          height='28rem'
        />
    </picture>

  )
  
}

export default Loading
