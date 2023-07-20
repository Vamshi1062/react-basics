import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext'

class ComponentE extends Component {
    static contextType=UserContext
    render() {
        return (
            <div>
                {/* In the render Method context value is avaialble as this.context */}
                 Component E Context:{this.context}
                <ComponentF/>
            </div>
        )
    }
}

export default ComponentE
//assign userContext to the contextType property on the class
//ComponentE.contextType=UserContext

//limited to single context subscription
//works only with class component
//many a times in your application you need to read more than
//one context in which scenario the consumer component is the way to go
