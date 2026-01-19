import './App.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import Aboutpg from './Food/Page/Aboutpg'
import Menupg from './Food/Page/Menupg'
import Error from './Food/Page/Error'
import Blogpg from './Food/Page/Blogpg'
import Contact from './Food/Page/Contact'
import Coldrinks from './Coldrinks';
import Header from './Food/Header'
import Hero from './Food/Hero'
import Fodbox from './Food/Fodbox'
import Softdrink from './Food/Softdrink'
import Menu from './Food/Menu'
import Bottle from './Food/Bottle'
import Table from './Food/Table'
import Juices from './Food/Juices'
import Tea from './Food/Tea'
import Feedback from './Food/Feedback'
import Image from './Food/Image'
import Footer from './Food/Footer';



function App() {
  return (

    <>
      <Header></Header>
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
      <Footer></Footer>
      {/* <Sign></Sign>  */}

      {/* 
      <Homepg></Homepg>
      <Menupg></Menupg>
      <Error></Error>
      <Blogpg></Blogpg>
      <Contact></Contact> */}


      {/* <Router>
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
      </Router> */}



    </>

  );
}

export default App;
