
// Component for deleting existing users

import { FormEvent, useState, useEffect } from 'react'
import { emptyChar, emptyMessage } from '../../utils/EmptyData'
import { CharType, CharListType, MessageType } from '../../utils/Types'
import { UseGetList, UseDeleteChar } from '../../utils/hooks/useFetch'
import { UseResetFields } from '../../utils/hooks/useFormActions'

import Buttons from '../molecules/Buttons'
import Select from '../molecules/Select'
import Notification from '../molecules/Notification'

const Delete = () => {

    console.log('Rendering Delete')
        
    const [Char, setChar] = useState<CharType>(emptyChar)
    const [List, setList] = useState<CharListType>(null)    
    const [Message, setMessage] = useState<MessageType>(emptyMessage)

    const onSubmit = async (e : FormEvent) => {    
        e.preventDefault()
        const response = await UseDeleteChar(Char)  
        const reset = !Message.reset // Resets Temp Message Timer
        setMessage({response : response, reset : reset})
        UseResetFields(setChar, setList)        
    }

    useEffect(() => {
        if (List?.length) {
            setChar(List[0])
        } else if (!List) {
            UseGetList(setList)
        }
    }, [List?.length])

    return (
                    
        <main>
        
            <form className='form' onSubmit={(e) => onSubmit(e)}>
                        
                <Buttons names={['Delete']}/>                
        
                <Select setChar={setChar} list={List}/>
                
            </form>

            {Message.response ? <Notification {...Message}/> : ''}

        </main>


    )

}

export default Delete