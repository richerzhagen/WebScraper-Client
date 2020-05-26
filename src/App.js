import React, { Component } from "react";
// import logo from './logo.svg';
// import './App.css';
import ChildComponent from "./ChildComponent";
import CrawlList from "./CrawlList";
import AddUrl from "./AddUrl";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ws: null,
      toCrawl: [],
    };
  }

  // single websocket instance for the own application and constantly trying to reconnect.

  componentDidMount() {
    this.connect();
  }

  timeout = 250; // Initial timeout duration as a class variable

  /**
   * @function connect
   * This function establishes the connect with the websocket and also ensures constant reconnection if connection closes
   */
  connect = () => {
    var ws = new WebSocket("ws://localhost:3000/ws");
    let that = this; // cache the this
    var connectInterval;

    // websocket onopen event listener
    ws.onopen = () => {
      console.log("connected websocket main component");

      this.setState({ ws: ws });

      that.timeout = 250; // reset timer to 250 on open of websocket connection
      clearTimeout(connectInterval); // clear Interval on on open of websocket connection
    };
    // var that = this;
    //to receive the message from server
    ws.onmessage = function (e) {
      // console.log("Server: " + e.data);
     
      var result = JSON.parse(e.data);
      console.log(result);
      if(result.status==="success"){
        that.setState({ toCrawl: result.data});
      };
    };

    // websocket onclose event listener
    ws.onclose = (e) => {
      console.log(
        `Socket is closed. Reconnect will be attempted in ${Math.min(
          10000 / 1000,
          (that.timeout + that.timeout) / 1000
        )} second.`,
        e.reason
      );

      that.timeout = that.timeout + that.timeout; //increment retry interval
      connectInterval = setTimeout(this.check, Math.min(10000, that.timeout)); //call check function after timeout
    };

    // websocket onerror event listener
    ws.onerror = (err) => {
      console.error(
        "Socket encountered error: ",
        err.message,
        "Closing socket"
      );

      ws.close();
    };
  };

  /**
   * utilited by the @function connect to check if the connection is close, if so attempts to reconnect
   */
  check = () => {
    const { ws } = this.state;
    if (!ws || ws.readyState === WebSocket.CLOSED) this.connect(); //check if websocket instance is closed, if so call `connect` function.
  };

  /**
   * add url
   */
  AddUrl = (url)=>{
    const newUrl = {
      id:2,
      url: url,
      active: true
    }
    // axios.post('https://jsonplaceholder.typicode.com/todos', {
    //   title,
    //   completed:false
    // })
    // .then(res => this.setState({ todos: [...this.state.todos, res.data]}));
    this.setState({toCrawl: [...this.state.toCrawl, newUrl]})
  }

  /**
   * delete url
   */
  delUrl = (id) => {
    this.setState({toCrawl: [...this.state.toCrawl.filter(item => item._id!==id)]})
  }

  /**
   * toggle active
   */
  toggleActive = (id) => {
    this.setState({ toCrawl: this.state.toCrawl.map(item => {
      if(item._id === id){
        item.active = !item.active
      }
      return item;
    })});
  }

  render() {
    return (
      <div className="App">
        <AddUrl AddUrl={this.AddUrl} />
        <CrawlList toCrawl={this.state.toCrawl} toggleActive={this.toggleActive} delUrl={this.delUrl} />
        <ChildComponent websocket={this.state.ws} />
      </div>
    );
  }
}

export default App;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
