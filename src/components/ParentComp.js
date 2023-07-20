import React, { Component } from 'react'
import PureComp from './PureComp'
import RegularComp from './RegularComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'CGG'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'CGG'
            })
        },2000)
    }
    render() {
        console.log('******parent comp rendered******')
        return (
            <div>
                Parent Comp
                {/* <PureComp name={this.state.name}/>
                <RegularComp name={this.state.name}/> */}
                <MemoComp name={this.state.name}/>

            </div>
        )
    }
}

export default ParentComp

//When the parent re-renders Memocomp also re-renders 
//But the name prop is gng to stay the same with every re-render
//so we need a way to avoid re-rendering this MemoComp functional component
//we can do that using React.memo

//props are not changing so better to avoid re-rendering memo component s