import React from 'react';
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
    return (
        <div className="storyReel">

            {/* <Story 
                image="./micky.jpg"
                title="Create Story"
                /> */}
            <Story 
                image="./background6.jpg"
                profileSrc="./yuri.jpg"
                title="Nicky Niimura"
            />
              <Story 
                image="./background4.jpg"
                profileSrc="./jumar.png"
                title="Jumar Macato"
            />
             <Story 
                image="./background3.jpg"
                profileSrc="./katrina.jpg"
                title="Katrina Magbanua"
            />
             <Story 
                image="./background1.jpg"
                profileSrc="./april.jpg"
                title="April Lizette Gonzales"
            />
             <Story 
                image="./background2.jpg"
                profileSrc="./erwine.jpg"
                title="Erwine Ogawa"
            />
           
           
        </div>
    )
}

export default StoryReel
