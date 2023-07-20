import React from 'react'

export const Inline = () => {

    const headings={
        fontSize:'72px',
        color:'blue'
    }
    return (
        <div>
            <h1 style={headings}>Inline</h1>
            <h2 style={{color:'orange'}}>hello</h2>
             
            <h1 className='error'>Error</h1>
        </div>
    )
}
