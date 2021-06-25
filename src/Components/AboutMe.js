import React from 'react';

const AboutMe = ()=> {
    return(
       
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto" style={{paddingTop:80}}>
            <div className="rounded-lg h-64 overflow-hidden">
              <img alt="content" className="object-cover object-center h-full w-full" src="https://cdn.dribbble.com/users/31664/screenshots/1738665/hands-test-2.gif"/>
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  
      <img className="object-cover object-center rounded" alt="hero" src="https://st2.depositphotos.com/3773785/7346/v/600/depositphotos_73469985-stock-illustration-cartoon-illustration-of-young-hipster.jpg"/>

                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Palash Jaithwar</h2>
                  <div className="w-12 h-1 bg-green-500 rounded mt-2 mb-4"></div>
                </div>
              </div>
              
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <div style={{fontSize:50, fontWeight:"bold", color:"black"}} className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <h1>About Me</h1>
              </div>
                <p className="leading-relaxed text-lg mb-4">I am a young enthusiastic resource and I truly have invested in developing my skills.
                 I am open-minded.
                 I believe that a person should work on developing their professional skills and learning new things all the time. 
                 I am pursuing B.Tech from Chameli Devi Group of Institutions in the stream of Computer Science & Engineering with current aggregate 80.6%.
                 Apart from that I am also a Guitarist.
                 Being a quick and enthusiastic learner, excited for the new learnings, experiences and achievements.</p>
                
              </div>
            </div>
          </div>
        </div>

{/* my education */}
<div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900" style={{fontWeight:"bold",fontSize:50, fontFamily:'"Times New Roman"'}}>Education</h1>
          </div>
<section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="-my-8 divide-y-2 divide-gray-100">
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700">B.Tech</span>
          <span className="mt-1 text-gray-500 text-sm">Pursuing</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Bachleor of Technology (Computer Science & Engineering) </h2>
          <p className="leading-relaxed">I am pursuing B.Tech from <b>Chameli Devi Group of Institutions, Indore (M.P.)</b> in the stream of Computer Science & Engineering with current aggregate 80.6%.</p>
        </div>
      </div>
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700">HSC</span>
          <span className="mt-1 text-gray-500 text-sm">15 March 2017</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Higher Secondary School Certificate</h2>
          <p className="leading-relaxed">I have done my Higher Secondary School Certificate from <b>Samta Shiksha Niketan(CBSE), Ratlam (M.P.)</b> with 60% in the year 2017.</p>
        </div>
      </div>
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700">High School</span>
          <span className="text-sm text-gray-500">15 March 2015</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">High School Certificate</h2>
          <p className="leading-relaxed">I have done my High School Certificate from <b>Shri Guru Tegh Bahadur Academy(CBSE), Ratlam (M.P.)</b> with 7.0 CGPA in the year 2015.</p>
        </div>
      </div>
    </div>
  </div>
</section>
      </section>  
    )
}

export default AboutMe;