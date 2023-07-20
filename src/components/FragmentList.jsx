import React, { Fragment } from 'react'
import { ChildList } from './ChildList'

export const FragmentList = () => {
    const arr=[{
        id:1,
        title:'Java',
        body:'Java for Beginners'
    },
    {
        id:2,
        title:'C',
        body:'Let us C'
    },
    {
        id:3,
        title:'C#',
        body:'Learning C#'
    }
]
const objList=arr.map(item=><ChildList key={item.id} item={item}/>)
    return (
        <Fragment>{
            objList
        }
        </Fragment>
    )
}
