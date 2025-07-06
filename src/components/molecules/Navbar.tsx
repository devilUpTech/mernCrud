
// Navigation Bar, redirects the user to the proper URL

import { Link } from 'react-router-dom'
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome'
import { faTrash, faPenNib, faPlus } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

    console.log('Rendering Navbar')

    return (     
                
        <nav className='navbar'>
            
            <ul>                
                <li><Link to = '/Save'><Fa icon={faPlus}/> New </Link></li>
                <li><Link to = '/Update'><Fa icon={faPenNib}/> Edit </Link></li>
                <li><Link to = '/Delete'><Fa icon={faTrash}/> Delete </Link></li>
            </ul>
                                 
        </nav>

    )
    
}

export default Navbar