import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'selim'
      }
      console.log('state constructor LifeCycleB')
    }

    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps method LifeCycleB')
        return null
    }
    componentDidMount(){
        console.log('componentDidMount method LifeCycleB')
    }
    render() {
        return (
            <div>
                <h1 className='p-2 bg-secondary text-center'>Different Life Cycle Method</h1>
            </div>
        )
    }
}

export default LifeCycleB