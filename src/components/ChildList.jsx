import React from 'react'
import { Fragment } from 'react'
export const ChildList = ({item}) => {
    return (
 
        <Fragment key={item.id}>
            <h2>{item.id}</h2>                            
            <h2>{item.title}</h2>  
            <h2>{item.body}</h2>  
        </Fragment>
      
    )
}
