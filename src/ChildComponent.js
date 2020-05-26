import React, {Component} from 'react';

class ChildComponent extends Component {

    sendMessage=()=>{
        const {websocket} = this.props // websocket instance passed as props to the child component.
        const data = "test";
        try {
            websocket.send(data) //send data to the server
        } catch (error) {
            console.log(error) // catch error
        }
    }
    

    // receiveMessage=()=>(
    //     const {websocket} = this.props
    //     websocket.receiveMessage
    // )

    render() {
        return (
            <div>
            </div>
        );
    }
}

export default ChildComponent;