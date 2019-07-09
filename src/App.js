import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom'
import './App.css';
import Home from './views/Home'
import Paihang from './views/Paihang'
import My from './views/My'
function App() {
  return (
    <div >
        <Router>
              <NavLink to='/' exact style={{color:"green"}} activeStyle={{color:'red'}} >Home</NavLink>|
              <NavLink to='/Paihang' style={{color:"green"}} activeStyle={{color:'red'}} >Paihang</NavLink>|
              <NavLink to='/My' style={{color:"green"}} activeStyle={{color:'red'}} >My</NavLink>
            <Switch>
              <Route path='/' exact component={Home} ></Route>
              <Route path='/Paihang' component={Paihang} ></Route>
              <Route path='/My' component={My} ></Route> 
            </Switch>
            

        </Router>
    </div>
  );
}

export default App;
