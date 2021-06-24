import './App.css';
import NavBar from './Components/NavBar'; 
import AboutMe from './Components/AboutMe';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import ContactMe from './Components/ContactMe';
import HomePage from './Components/HomePage';
import {BrowserRouter as Router , Switch, Route, Link} from 'react-router-dom';
import Hello from './Components/Hello';

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
      </Switch>

    </div>
    </Router>
  );
}

export default App;
