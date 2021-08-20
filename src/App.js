import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import Home from './Home'
import Contactus from './Contactus'
import Aboutus from './Aboutus'
import Error from './Error'
import Path from './Path'
import Watch from './Watch'
function App(){
  return(
    <>
      <Switch>
          <Route exact path="/" component={Path} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/aboutus' component={Aboutus} />
          <Route path='/contactus' component={Contactus}/>
          <Route path="/watch" component={Watch}/>
          <Route component={Error}/>
      </Switch>
    </>
  )
}
export default App;