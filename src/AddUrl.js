import React, { Component } from 'react'

export class AddUrl extends Component {
    state = {
        url: ''
    }

    onChange = (e) => this.setState({ [e.target.name] : e.target.value});

    onSubmit = (e) => {
        e.preventDefault();
        this.props.AddUrl(this.state.url);
        this.setState({url: ''})
    }

    render() {
        return (
           <form onSubmit={this.onSubmit} style={{display:'flex'}}>
               <input 
                    type="text" 
                    name="url" 
                    style={{flex:'10', padding: '5px'}}
                    placeholder="Add Url ..."
                    value={this.state.value}
                    onChange={this.onChange}
               />
               <input
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{flex: '1'}}
                />
            </form>
        )
    }
}

export default AddUrl
