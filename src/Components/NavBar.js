import React from "react";
import Logo from '../Images/logo.png';
import { Link, NavLink } from "react-router-dom";


const NavBar =() => {
    return(
        
            <header className="text-gray-600 body-font" style={{backgroundColor:"#10B981", width:'100%',height:100,position:'fixed', borderRadius:30}}>
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center" style={{position:'fixed',backgroundColor:"#10B981",width:'100%', borderRadius:30}}>
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg> */}
      <img src={Logo} alt="logo" style={{width:49}}/>
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