import React, { useState } from 'react'

export const FormDetail = () => {
    const [data,setData]=useState({
        name:'',subscribe:'no',remarks:''
    })
    const changeHandler=(e,field)=>{
        setData({...data,[field]:e.target.value})
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        alert(`Form Data is 
                Name: ${data.name} 
                Subscribe: ${data.subscribe}
                Remarks : ${data.remarks}`)
    }
    return (
 
            <form onSubmit={handleSubmit}>
                <div>
                   <label>Username</label>
                   <input type='text' value={data.name} onChange={e=>changeHandler(e,'name')}/>
                </div>
                <div>
                   
                   <input type='radio' name='radio' value='yes' onChange={e=>changeHandler(e,'subscribe')}/>
                   <label>Yes</label>
                </div>
                <div>
                   
                   <input type='radio' name='radio' value='no' onChange={e=>changeHandler(e,'subscribe')}
                checked={data.subscribe='no'}/>
                   <label>No</label>
                </div>
                <div>
                    <textarea rows='10' height='150px' value={data.remarks} onChange={e=>changeHandler(e,'remarks')}></textarea>
                </div>
                <button>Submit</button>
            </form>
         
    )
}
