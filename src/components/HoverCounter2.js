import React, { Component } from 'react'

class HoverCounter2 extends Component {
    render() {
        const {count,incrementCount}=this.props
        return (     
             <h2 onMouseOver={incrementCount}>Hoverd {count} times</h2>  
     )
    }
}

export default HoverCounter2
