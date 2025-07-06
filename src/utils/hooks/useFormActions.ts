// Loops through setters to reset useState values

export const UseResetFields = (...setFunctions : Function[]) => {
    for(const f of setFunctions) f(null) 
}

// Breaks down the server response to be converted into a notification for the user

export const UseNotify = async (response : Response, setter : Function) => { 
    const text = await response.text()
    const style = response.status == 200 ? 'success' : 'failed'
    setter({text : text, style : style})
}