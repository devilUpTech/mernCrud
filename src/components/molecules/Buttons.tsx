
// Creates Buttons from an array of strings, to submit the form or reset it's fields alternatively

import { FC } from "react"

const Buttons : FC<{names : string[]}> = ({names}) => {

    console.log('Rendering Buttons')

    return (

        <span className='form__buttons'>

            {names.map((name, index) => {
                return <input
                    key={index}            
                    type = {name == 'Clear' ? 'reset' : 'submit'}
                    value={name}
                    className={name.toLowerCase()}
                    aria-label={`${name} Button`}
                />
            })}

        </span>
    )         
   
}

export default Buttons