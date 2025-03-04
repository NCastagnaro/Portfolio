import React from 'react'
// Importing all of the logos from the assets folder
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScriptNew from '../assets/JavaScriptNew.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import Python from '../assets/Python.png'
import SQL from '../assets/SQL.png'

const Skills = () => {
  return (
    <div name = 'skills' className = 'w-full h-screen bg-[#0a192f] text-gray-300'>
    {/* Container for Skills */}
        <div className = 'max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
              {/* Using 'inline' makes the bottom borderline only extend as long as the word rather than the whole length of the div */}
                <p className = 'text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className =' py-4'>Technoologies I have worked with: </p>
            </div>

            <div className = 'w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className = 'shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:bg-pink-400'>
                  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target = 'blank'><img className = 'w-[80px] mx-auto' src={HTML} alt="HTML icon" /> </a>
                  <p className = ''>HTML</p>
              </div>    
                  <div className = 'shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:bg-pink-400'>
                  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target = 'blank'><img className = 'w-[80px] mx-auto' src={CSS} alt="CSS icon" /> </a>
                  <p className = ''>CSS</p>
              </div>
              <div className = 'shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:bg-pink-400'>
              <a href="https://developer.mozilla.org/en-US/docs/Web/JAVASCRIPT" target = 'blank'><img className = 'w-[145px] mx-auto' src={JavaScriptNew} alt="JavaScript icon" /> </a>
                  <p className = ''>JavaScript</p>
              </div>    
              <div className = 'shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:bg-pink-400'>
              <a href="https://react.dev" target = 'blank'><img className = 'w-[80px] mx-auto' src={ReactImg} alt="React icon" /> </a>
                  <p className = ''>React</p>
              </div>
              <div className = 'shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:bg-pink-400'>
                  <a href="https://nodejs.org/en/docs" target = 'blank'><img className = 'w-[80px] mx-auto' src={Node} alt="Node icon" /> </a>
                  <p className = ''>Node</p>
              </div>    
                <div className = 'shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:bg-pink-400'>
                  <a href="https://python.org" target = 'blank'><img className = 'w-[80px] mx-auto' src={Python} alt="Python icon" /> </a>
                  <p className = ''>Python</p>
              </div>
              <div className = 'shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:bg-pink-400'>
              <a href="https://www.mysql.com/" target = 'blank'><img className = 'w-[80px]  h-[60px] mx-auto mt-2' src={SQL} alt="SQL icon" /> </a>
              <p className="mt-2">SQL</p>

              </div>    
                <div className = 'shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:bg-pink-400'>
                <a href="https://www.mongodb.com/docs/" target = 'blank'><img className = 'w-[80px] mx-auto' src={Mongo} alt="Mongo icon" /> </a>
                  <p className = ''>Mongo</p>
              </div>
            </div>

        </div>
        
    </div>
  )
}

export default Skills