import React from "react";
import Logo from '../Images/logo.jpg';
import { Link } from "react-router-dom";


const NavBar =() => {
    return(
        
            <header className="text-gray-600 body-font" style={{backgroundColor:"#10B981", width:'100%',height:100,position:'fixed', borderRadius:30}}>
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center" style={{position:'fixed',backgroundColor:"#10B981",width:'100%', borderRadius:30}}>
    <a  href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <img src={Logo} alt="logo" style={{width:50,height:50,borderRadius:25}}/>
      <span class="ml-3 text-xl">My Portfolio</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center" style={{fontWeight:"bold", color:"white"}}>
      <Link to="/" className="mr-5 hover:text-gray-900">Home</Link>
      <Link to="/about" className="mr-5 hover:text-gray-900">About me</Link>
      <Link to="/skills" className="mr-5 hover:text-gray-900">Skills</Link>
      <Link to="/experience" className="mr-5 hover:text-gray-900">Experience</Link>
      <Link to="/contact" className="mr-5 hover:text-gray-900">Contact me</Link>
    </nav>
    
  </div>
</header>
        
    )
}

export default NavBar;