import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Coldrinks from './Coldrinks';
import Aboutpg from './Food/Page/Aboutpg';
import Error from './Food/Page/Error';
import Menupg from './Food/Page/Menupg';
import Blogpg from './Food/Page/Blogpg';
import Contact from './Food/Page/Contact';
import Login from './Login';
import Admin from './Admin';

function App() {
  return (

    <>

      <Router>
        <Switch>
          <Route exact path="/">
            <Coldrinks />
          </Route>
          <Route path="/About">
            < Aboutpg />
          </Route>
          <Route path="/Error">
            < Error />
          </Route>
          <Route path="/Menu">
            <Menupg />
          </Route>
          <Route path="/Blog">
            <Blogpg />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Admin">
          < Admin/>
          </Route>
        </Switch>
      </Router >

    </>
    
  );
}

export default App;
