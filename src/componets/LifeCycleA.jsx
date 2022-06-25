import React, { Component } from 'react'

class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'selim'
      }
      console.log('state constructor LIFECICLE-A')
    }

    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps method LIFECICLE-A')
        return null
    }
    componentDidMount(){
        console.log('componentDidMount method LIFECICLE-A')
    }
    render() {
        return (
            <div>
                <h1 className='p-2 bg-secondary text-center'>Different Life Cycle Method</h1>
            </div>
        )
    }
}

export default LifeCycleA