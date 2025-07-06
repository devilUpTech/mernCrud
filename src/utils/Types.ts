import { Dispatch, SetStateAction } from "react"

// Custom Reusable Types

export type MessageType = Partial<{
    response : Response | null,    
    reset : boolean
}>

export type CharType = {
    _id ? : string, // When creating, the user doesn't have an id yet.
    name : string,
    age : number | string,
    desc : string
}

export type CharListType = CharType[] | null

export type CharSetterType = Dispatch<SetStateAction<CharType>>