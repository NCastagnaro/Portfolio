import React from 'react'
// Importing all of the logos from the assets folder
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';

const Skills = () => {
  return (
    <div name = 'skills' className = 'w-[30px]'>Skills
    {/* Container for Skills */}
        <div>
            <div>
                <p>Experience</p>
                <p>Technoologies I have worked with: </p>
            </div>

            </div>
                <div>
                <img src={HTML} alt="HTML icon" />
                <div>

            </div>

        </div>
        
    </div>
  )
}

export default Skills