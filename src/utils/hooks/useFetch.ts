
// Deals with CRUD Requests and returns a response from the server

import {CharType} from '../Types'

export const UseGetList = async (setList: Function) => {

    const res = await fetch('http://localhost:3000/list-all')
    .then(res => res.json())        
    setList(res)
}

export const UseSaveChar = async (Char : CharType) => {    

    const res = await fetch('http://localhost:3000/save-one', {
        method:'POST',
        body:JSON.stringify(Char),
        headers:{'Content-Type':'application/json'}
    })
    
    return await res

}

export const UseUpdateChar = async (Char : CharType) => {     

    const res = await fetch(`http://localhost:3000/update-one/${Char?._id}`, {
        method:'PUT',
        body:JSON.stringify(Char),
        headers:{'Content-Type':'application/json'}
    })
    
    return await res

}

export const UseDeleteChar = async (Char : CharType) => {  

    const res = await fetch(`http://localhost:3000/delete-one/${Char?._id}`, 
    {method:'DELETE',})
    
    return await res
    
}