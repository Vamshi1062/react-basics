import React from 'react'
//3.
export const FRInput = React.forwardRef((props,ref) => {
    return (
        <div>
            <input type='text' ref={ref}/>
        </div>
    )
}
)