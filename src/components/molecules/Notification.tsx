
// Creates a temporary feedback message from the server response

import { FC, useEffect, useState } from "react"
import { MessageType } from "../../utils/Types"
import { UseNotify } from "../../utils/hooks/useFormActions"

const Notification : FC<MessageType> = ({response = null, reset=false}) => {
    
    console.log('Executing Notification')
    
    const [Timer, setTimer] = useState(0)
    const [Reply, setReply] = useState({text : '', style : ''})

    useEffect(() => {                 
        if (response && !response.bodyUsed) { // Prevents unnecessary repetition
            UseNotify(response, setReply)
            setTimer(80)
        }
    }, [reset]);
    
    if (Timer > 0 && Reply.text != '') {
        setTimeout(() => setTimer(Timer - 1), Timer)
    }
       
    return (
        
        <>

           {
                (Timer > 0 && Reply.text != '') ? // No initial renderings with empty messages
                    <span className={`notification-${Reply.style}`}>
                        <h3>{Reply.text}</h3>                            
                    </span>       
                : ''
            }

        </>

  )
}

export default Notification
