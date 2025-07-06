
// Displays current date and author information with links to social media profiles for contact.

import '../../styles/footer.css'

const name = 'Arthur Silva dos Santos'
const today = new Date().toDateString()

const Footer = () => {

    console.log('Rendering Footer')

    return (

        <footer>

            <section className='contact-info'>

                <time>
                    <span>{today}</span>
                </time>

                <address>

                    <p>Author : {name}</p>

                    <span>
                        <a href='https://br.linkedin.com/in/arthur-s-32b259105'>LinkedIn</a>                        
                        <a href='https://github.com/arthur5120'>Github</a>
                    </span>
                    
                </address>

            </section>

        </footer>

    )

}

export default Footer