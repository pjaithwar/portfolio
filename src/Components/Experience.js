import React from 'react';
import TDI from '../Images/TDi_logo_round.png';
const Experience =() => {
    return(
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" style={{paddingTop:165}}>
        
        <div className="flex flex-col items-start max-w-screen-sm md:flex-row sm:mx-auto">
          <a href="/" className="mb-4 mr-8">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              
               <img src={ TDI } alt="logo" />
              
            </div>
          </a>
          <div>
            
            <h2 style={{fontWeight:"bold",fontSize:50,fontFamily:'"Times New Roman"'}} className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
             Experience
            </h2>
            <h1 style={{fontSize:20,paddingBottom:30}}>Internship</h1>
            <p className="mb-2 text-xs font-semibold tracking-wide text-gray-800">
              February 2020 - April 2020
            </p>
            <p className="text-base text-gray-700 md:text-lg">
            I have done internship on Web Development from The Design Institute (TDi), Indore (M.P.).
            It’s a Software Company and also best for Ux and UI designing.
            I have experience of working in a team.
            </p>
          </div>
        </div>
      </div>
    )
}

export default Experience;