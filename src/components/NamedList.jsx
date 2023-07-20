import React from 'react'
import {Person} from './Person.jsx';
export const NamedList = () => {
    const names=['Mango','Grapes','Apple','Orange']
    const persons=[{id:1,name:'Abc',age:30,skill:'React'},
                     {id:2,name:'def',age:35,skill:'Angular'},
                     {id:3,name:'hfg',age:27,skill:'Vue'}]
    const nameList=names.map((name,index)=>
        <h2 key={index}>{index} {name}</h2>
    )
    const personList=persons.map(person=><Person key={person.id} person={person}/>)
    return (
        <div>
             {
                // personList
                nameList
             }
        </div>
    )
}
