import React from "react"

export const Hello=()=>{
    // return (
    // <div id="hello"><h1>Hello CGG</h1></div>
    // )
    return React.createElement('div',{id:'hello',className:"dummyClass"},React.createElement('h1',null,'Hello Cgg'))
}