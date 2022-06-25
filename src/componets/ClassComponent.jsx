import React, { Component } from 'react'

class ClassComponent extends Component {
    render() {
        return (
            <div>
                <h1 className='p-2 bg-secondary text-center'>{this.props.name} Component learning</h1>
            </div>
        )
    }
}

export default ClassComponent