
// Component for updating existing users

import { FormEvent, useState, useEffect, } from 'react'
import { emptyChar, emptyMessage } from '../../utils/EmptyData'
import { CharType, CharListType, MessageType } from '../../utils/Types'
import { UseGetList, UseUpdateChar } from '../../utils/hooks/useFetch'
import { UseResetFields } from '../../utils/hooks/useFormActions'

import Buttons from '../molecules/Buttons'
import Select from '../molecules/Select'
import Fields from '../molecules/Fields'
import Notification from '../molecules/Notification'

const Update = () => {

    console.log('Rendering Update')

    const [Char, setChar] = useState<CharType>(emptyChar)
    const [List, setList] = useState<CharListType>(null)
    const [Message, setMessage] = useState<MessageType>(emptyMessage)

    const onSubmit = async(e : FormEvent) => {
        e.preventDefault()
        console.log(`Executing onSubmit`)
        const response = await UseUpdateChar(Char)  
        const reset = !Message.reset // Resets Temp Message Timer
        setMessage({response : response, reset : reset})
        UseResetFields(setChar, setList)
    }

    const onClear = (e : FormEvent) => { // Resets Form Fields
        console.log(`Executing onClear`)
        const btn = e.target as HTMLButtonElement
        if (btn.type === 'reset')
        UseResetFields(setChar, setList)
    }

    useEffect(() => {
        console.log(`Executing useEffect`)
        if (List?.length) {
            setChar(List[0])  
        } else if (!List) {
            UseGetList(setList)
        }
    }, [List?.length])

    return (   
                
        <main>
        
                <form className='form' onSubmit={(e) => onSubmit(e) } onClick={(e) => onClear(e)}>                           

                    <Fields char={Char} setChar={setChar}/>                
                    
                    <Buttons names={['Clear','Update']} />                    

                    <Select setChar={setChar} list={List}/>

                </form>

                {Message.response ? <Notification {...Message}/> : ''}

        </main>

    )    

}

export default Update