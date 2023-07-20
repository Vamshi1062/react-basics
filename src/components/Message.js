import { Component } from "react";

export class Message extends Component{

    constructor(){
        super()

        this.state={
            message:'Welcome Visitor'
        }
    }
    changeMessage(){
        this.setState({
            message:'Hello All Thank You for Subscribing'
    })
    }
    render(){
        return (
            <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.changeMessage()}>Subscribe</button>
        </div>
        )
    }
}