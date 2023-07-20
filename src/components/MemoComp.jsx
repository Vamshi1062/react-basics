import React from 'react'

const MemoComp = ({name}) => {
    console.log('Rendering memo component')
    return (
        <div>
            {name}
        </div>
    )
}
export default React.memo(MemoComp)

//Somthing called HigherOrder component React.memo()
//Accepts a component and returns a new enhanced component
//In this case a component capable of avoiding rerenders when there is no change in props 
//Similar to PureComponent it works with functional component instead