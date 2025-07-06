
// Generates a layout with a dynamic title, subtitle, and a navigation bar.

import Navbar from '../molecules/Navbar'
import '../../styles/header.css'

const Header = () => {

    console.log('Rendering Header')

   return (     

        <header>
            
            <section className='title'>

                <picture>
                    <img 
                        src='src/assets/icons/gear-solid-white.svg' 
                        alt='Rotating Gear Icon' 
                        width='28rem' 
                        height='28rem'
                    />                    
                </picture>

                <h1>{/* Dynamically Set */}</h1>

            </section>

            <section className='subtitle'>
                <h2>React Typescript MongoDB</h2>
            </section>

            <Navbar/>

        </header> 

    )     
    
}

export default Header