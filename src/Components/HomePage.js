import React from 'react';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Experience from './Experience';
import ContactMe from './ContactMe';
import { useHistory } from 'react-router-dom';
import Picture from '../Images/developer-1.jpg';


const HomePage =()=>{
  const history = useHistory();
    return(
      <div>
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center" style={{paddingTop:80}}>
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900" style={{fontFamily:'"Times New Roman"', fontSize:45}}>Palash Jaithwar
      </h1>
      <p className="mb-8 leading-relaxed" style={{fontSize:20, color:"black", fontWeight:"bold"}}>Hi There!</p>
      <p className="mb-8 leading-relaxed">I'm Palash Jaithwar a MERN Stack Developer, Cross-platform Mobile Developer and also a Guitarist.</p>
      <div className="flex justify-center">
      <button onClick={()=>history.push("/about")} className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Get Started</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6" style={{paddingTop:10}}>
      <img className="object-cover object-center rounded" alt="hero" src={Picture} style={{borderRadius:"100%"}} />
    </div>
  </div>
</section>
<AboutMe/>
<Skills/>
<Experience/>
<ContactMe/>
</div>
    )
}

export default HomePage;