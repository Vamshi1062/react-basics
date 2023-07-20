import React, { Component } from 'react'

class WelcomeRefDemo extends Component {

    constructor(props) {
        super(props)
    
             this.inputRef=React.createRef()
             //1
             this.cbRef=null
             //2.
             this.setcbRef=element=>this.cbRef=element
    }
    //what exactly does this.inputRef holds
    //inputRef holds an object after the reference is created
    //current points to the actual dom node
    componentDidMount(){
        // console.log(this.inputRef)
        // this.inputRef.current.focus()

        //React will cal the ref callBack with the DOM element when the component mounts
        //with null when component unMounts
        //3.
        if(this.cbRef){
            this.cbRef.focus()
        }
    }
    clickHandler=()=>{
        // alert(this.inputRef.current.value)
        alert(this.cbRef.value)
    }
    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef}/><br></br>
                {/* 4. */}
                <input type='text' ref={this.setcbRef}/><br></br>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default WelcomeRefDemo

//As soon as page loads the input field should get focussed
//usign refs this can be done in  three simple steps
//1.Create a ref=React.createRef()--inside constructor(common place to create ref ..
//so that they can be referenced throughout the apllication)
//2.Attach this ref to the input element in the render method and to attch ref
// we make use of reserved attribute.we now have reference to the input element
//3.To call focus method on this input element