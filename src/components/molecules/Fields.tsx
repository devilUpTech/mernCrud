
// Input fields, their labels, the logic to track their values and the validation

import { FC, ChangeEvent } from 'react'
import { CharType, CharSetterType } from '../../utils/Types'

type FieldProps = {
    char: CharType
    setChar: CharSetterType
}

const Fields : FC<FieldProps> = ({char, setChar}) => {

    console.log('Rendering Fields')

    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {         
        const {name, value} = e.target       
        setChar((values) => ({
            ...values,
            [name] : value
        }))
    }

    return (                    

        <>             
            
            <label id='lblname' htmlFor='txtname'>
                &#128172; Name
            </label>

            <input 
                id='txtname' name='name' placeholder='The name goes here' 
                required value={char?.name ? char.name : ''} onChange={e => handleChange(e)}
                minLength={3} maxLength={20} pattern={'^[a-zA-Z ]+$'}
                title='Only between 3 and 20 alphabetic characters allowed'
                autoComplete='...'
            />

            <label id='lblage' htmlFor='numage'>
                &#128198; Age
            </label>

            <input 
                id='numage' name='age' placeholder='Age in years'
                required value={char?.age ? char.age : ''} onChange={e => handleChange(e)}
                type='number' min={0} max={200}
                title='An integer from 0 to 200'
                autoComplete='0'
            />

            <label id='lbldesc' htmlFor='txtdesc'>
                &#128220; Desc
            </label>

            <input 
                id='txtdesc' name='desc' placeholder='A brief description'
                value={char?.desc ? char.desc : ''} onChange={e => handleChange(e)}
                maxLength={250} pattern='^[a-zA-Z0-9 ]*$'
                title='Up to 250 alphanumeric characters'
                autoComplete='...' 
            />     

        </>

    )

}

export default Fields