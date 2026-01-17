import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Aboutpg from './Food/Page/Aboutpg'
import Menupg from './Food/Page/Menupg'
import Error from './Food/Page/Error'
import Blogpg from './Food/Page/Blogpg'
import Contact from './Food/Page/Contact'
import Coldrinks from './Coldrinks';



function App() {
  return (

    <>
      {/* <Header></Header> 
    <Hero></Hero>
    <Fodbox></Fodbox>
    <Softdrink></Softdrink>
    <Menu></Menu>
    <Bottle></Bottle>
    <Table></Table>
    <Juices></Juices>
    <Tea></Tea>
    <Feedback></Feedback>
    <Image></Image>
    <Footer></Footer>    */}
      {/* <Sign></Sign>  */}

      {/* 
      <Homepg></Homepg>
      <Menupg></Menupg>
      <Error></Error>
      <Blogpg></Blogpg>
      <Contact></Contact> */}


      <Router>
        <Switch>
          <Route exact path="/">
            <Coldrinks />
          </Route>
          <Route path="/Aboutpg">
            < Aboutpg />
          </Route>
          <Route path="/Error">
            <  Error />
          </Route>
          <Route path="/Menupg">
            <Menupg />
          </Route>
          <Route path="/Blogpg">
            <Blogpg />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
      </Router>



    </>

  );
}

export default App;
