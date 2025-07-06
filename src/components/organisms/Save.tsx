
// Component for creating new users

import { FormEvent, useState } from 'react'
import { emptyChar, emptyMessage } from '../../utils/EmptyData'
import { CharType, MessageType } from '../../utils/Types'
import { UseSaveChar } from '../../utils/hooks/useFetch'

import Buttons from '../molecules/Buttons'
import Fields from '../molecules/Fields'
import Notification from '../molecules/Notification'

const Save = () => {

    console.log('Rendering Save')
    
    const [Char, setChar] = useState<CharType>(emptyChar)
    const [Message, setMessage] = useState<MessageType>(emptyMessage)

    const onSubmit = async (e : FormEvent<HTMLFormElement>) => {  
        e.preventDefault() 
        const response = await UseSaveChar(Char)
        const reset = !Message.reset // Resets Temp Message Timer
        setMessage({response : response, reset : reset})           
        setChar(emptyChar)
    }

    const onClear = (e : FormEvent) => { // Resets Form Fields
        const btn = e.target as HTMLButtonElement
        if (btn.type === 'reset')
        setChar(emptyChar)
    }

    return (    

        <main>

            <form className = 'form' onSubmit={(e) => onSubmit(e)} onClick={(e) => onClear(e)}>

                <Fields char={Char} setChar={setChar}/>
                
                <Buttons names={['Clear', 'Save']}/>                

            </form>

            {Message.response ? <Notification {...Message}/> : ''}

        </main>

    )
}

export default Save