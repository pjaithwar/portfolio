import './App.css';
import NavBar from './Components/NavBar'; 
import AboutMe from './Components/AboutMe';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import ContactMe from './Components/ContactMe';
import HomePage from './Components/HomePage';
import Portfolio from './Components/Portfolio';
import {BrowserRouter as Router , Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
      {/* <HomePage/>
      
      <AboutMe/>
      <Skills/>
      <Experience/>
      <ContactMe/> */}
      <Switch>
      
        <Route path="/"  exact component={HomePage}/>
        <Route path="/about"  exact component={AboutMe}/>
        <Route path="/skills"  exact component={Skills}/>
        <Route path="/experience"  exact component={Experience}/>
        <Route path="/contact"  exact component={ContactMe}/>
        <Route path="/portfolio"  exact component={Portfolio}/>
      </Switch>

    </div>
    </Router>
  );
}

export default App;
