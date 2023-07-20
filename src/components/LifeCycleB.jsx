import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'CGG'
        }
        console.log('LifeCycleB Constructor')
    }
    //return new state as object or null
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleB getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifeCycleB componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('LifeCycleB shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifeCycleB getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('LifeCycleB ComponentDidUpdate')
    }
    render() {
        console.log('LifeCycleB render')
        return (
            <div>
                LifeCycleB
            </div>
        )
    }
}


export default LifeCycleB
