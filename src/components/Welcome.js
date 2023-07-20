import { Component } from "react";

export class Welcome extends Component{

render(){
    const {name,designation,children}=this.props
    return(
        <div>
    <h1>
        Welcome {name} a.k.a {designation}</h1>
        {children}
    
    </div>
    )
}
}

//export default Welcome