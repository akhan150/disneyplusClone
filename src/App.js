import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Detail from "./Components/Detail";
import LoginPage from "./Components/LoginPage";
/* To Do:
Step 1: Need to make a header. 
Step 2: Need to make a slider.
Step 3: Need to make a viewer.
Step 4: Need to make a movie list. */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Header />
         <Switch>
           <Route path="/detail/:id">
             <Detail/>
           </Route>
           <Route path="/login">
              <LoginPage/>
           </Route>
           <Route path="/">
              <Home />
           </Route>
           
         </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
