
// Provides a select with a dynamically populated dropdown menu and the logic to track it's changes.

import { FC, ChangeEvent, MouseEvent } from 'react'
import { CharListType, CharSetterType } from '../../utils/Types'

type SelectProps  = {
    list: CharListType,
    setChar: CharSetterType
}

const Select : FC<SelectProps> = ({setChar, list}) => {  

    console.log('Rendering Select')

    const handleSelect = (e : ChangeEvent | MouseEvent) => { // Also updates when selecting the same item.
        const selectElement = e.target as HTMLSelectElement
        list ? setChar(list[selectElement.selectedIndex]) : ''        
    }    

    return (
        
        <select 

            id='selchar' 
            name='selchar' 
            title='Character List' 
            onChange={(e) => handleSelect(e)} 
            onClick={(e) => handleSelect(e)}>

                {
                     list?.length ? 
                        list.map((o, index) => <option key={index}>{o?.name}</option>) 
                     : <option>...</option> // A placeholder, if the list is null or empty.
                }

        </select>

    )
}

export default Select