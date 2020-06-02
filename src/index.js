import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { Router, Route, Link } from 'react-router-dom';
import { Router, Route } from 'react-router-dom';
import history from './history';

ReactDOM.render(
  // <React.StrictMode>
     <Router history={history}>
      <div>
        {/* <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul> */}
        
        {/* <Route exact path="/" component={App} />
        <Route exact path="/home" component={App} />
        <Route path="/login" component={App} />
        <Route path="/scrapelist" component={App} />
        <Route path="/tweetslist" component={App} /> */}
        
        <Route path="/" component={App} />
      </div>
    </Router>,
 //   {/* <App /> */}
  // </React.StrictMode>
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
