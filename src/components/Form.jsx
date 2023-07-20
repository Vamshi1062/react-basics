import React, { useState } from 'react'

export const Form = () => {
    const [username,setUsername]=useState('')

    const submitHandler=(event)=>{
          event.preventDefault()
          alert(`form data is ${username}`)
    }
    return (
        <form onSubmit={submitHandler}>
        <div>
            <label>Username</label>
            <input type='text' value={username} 
            onChange={(event)=>setUsername(event.target.value)}/><br></br>
            <button typr='submit'>Submit</button>

        </div>
        </form>
    )
}

//capture input from input elements and have the data
//available for form submission
//manage with react
//1.creat state variable to handle the value and change the value of this input element
//2.assign username to value attribute
//3.handling onChange event ,automatically recieve change event as an argument use it to update 
//username variable and keep track of changes to username
//4.submit form data
//click on submit button page refreshes form has default 
//html form behaviour of browsing to a new page when the submit buttton is clicked 
//A common approach however is to execute a javascript function that handles submission of form 
//and that form will have access to the data the user entered into the form 
