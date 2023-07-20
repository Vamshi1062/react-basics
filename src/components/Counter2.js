import React, { Component } from 'react'
import HoverCounter2 from './HoverCounter2'
import ClickCounter2 from './ClickCounter2'

class Counter2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    incrementCount=()=>{
        this.setState(prevState=>{
            return{
                count:prevState.count+1
            }
        })
    }
    render() {
        return (
            <div>
                {
                    this.props.children(this.state.count,this.incrementCount)
                    
                }
            </div>
        )
    }
}

export default Counter2
