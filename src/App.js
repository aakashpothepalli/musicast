import React from 'react';
import Home from "./Links/Home"
import Host from "./Links/Host"
import Join from "./Links/Join"
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const router = (
  <Router>
    <div>
    <Route exact path="/" component={Home}/>
    <Route exact path="/host" component={Host}/>
    <Route exact path ="/join" component= {Join}/>
    </div>
    
</Router>
)

function App() {
  return (
    <div >
      {router}
    </div>
  );
}

export default App;
