import React, { Component } from 'react'


export class FormControl extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            details: '',
            framework: ''
        }
    }
    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
    }
    handleDetailsChange = (e) => {
        this.setState({ details: e.target.value });
    }
    handleFramework = (e) => {
        this.setState({ framework: e.target.value });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        alert('yes i am:' + this.state.name + 'my address:' + this.state.details + 'OPTION IS:' + this.state.framework);
    }
    render() {
        return (
            <div>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        { /* text */}
                        <div className="form-group">
                            <label>Enter Your Name </label>
                            <input type="text" name='name' value={this.state.name} onChange={this.handleNameChange} className='form-control' placeholder='Enter your name' />
                        </div>
                        <div className="row">
                            { /* textarea */}
                            <div className="col">
                                <label>Details</label>
                                <textarea type="text" name='name' value={this.state.details} onChange={this.handleDetailsChange} className='form-control' placeholder='Enter your details' />
                            </div>
                            { /* select-option */}
                            <div className="col">
                                <label>Select Framework</label>
                                <select value={this.state.framework} onChange={this.handleFramework} className='form-control'>
                                    <option>--Select--</option>
                                    <option value="ract">ract</option>
                                    <option value="angular">angular</option>
                                </select>
                            </div>
                        </div>
                        <br />
                        {/* checkbox */}
                        <div className="form-group">
                            <input type="checkbox" /> <label>Remember me </label>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Submit" className='form-control bg-info text-white' />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default FormControl