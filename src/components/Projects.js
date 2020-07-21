import React from 'react';
import styled from 'styled-components'

const Wrap = styled.div `
    display: flex;
    justify-content: center;
    height: 100%;
    margin-top: 2%;
    margin-bottom: 2%;
    
`

const Pject = styled.div `
    border: 1px solid white;
    display: flex;
    margin-top: 5%;
    width: 80%;
    height: 70%;
    color: white;
    background-color:  #00004d;
    box-shadow: 4px 4px 8px 4px rgb(0, 255, 255), 4px 6px 20px 4px rgba(0, 0, 0, 0.19);
        @media (max-width: 1300px) {
            flex-direction: column;
        }
`
const Pject2 = styled.div `
    border: 1px solid white;
    display: flex;
    margin-top: 0;
    width: 80%;
    height: 70%;
    color: white;
    background-color:  #00004d;
    box-shadow: 4px 4px 8px 4px rgb(0, 255, 255), 4px 6px 20px 4px rgba(0, 0, 0, 0.19);
        @media (max-width: 1300px) {
            flex-direction: column;
            margin: 2%;
        }
`

const Projects = () => {
    return ( 
        <>
        
        <Wrap>
            <Pject>
                <img src="/pro1a.gif" alt="project game of life" />
                
                <div className = "description" >
                <h4>Game of Life</h4>
                The game of life, also known as life, is a zero player 
                game, which means it is determined by it's state, needing 
                no further input.  You initiate the game by using the 
                randomly generated pattern or by creating your own on the 
                blank grid then observing it's evolution of generations.  
                It is an example of Turing complete thus allowing to 
                simulate a universal constructor and any Turing machine.<br/>
                It was created using JavaScript, CSS, and HTML<br/>
                <br/>
               <a
               href = "https://game-of-life-m.herokuapp.com">See deployed app
               </a>
                </div>
            </Pject>
        </Wrap>
        
        <Wrap>
            <Pject2>
            <img src="/RickMorty1.gif" alt="project Rick and Morty Api" />

            <div className = "description" >
                <h4>Rick and Morty Page</h4>
                This app was made with React and JavaScript.  I had fun using the 
                Rick and Morty API.  
                
               {/* <a
               href = "https://game-of-life-m.herokuapp.com">See deployed app
               </a> */}
                </div>
            </Pject2>
        </Wrap>

        <Wrap>
            <Pject2>
            <img src="/Geoseek.gif" alt="" />

            <div className = "description" >
                <h4>Geoseek</h4>
                Geoseek was a 8 week project that I worked on with a group of 3 IOS developers,
                and a team of 5 web developers.  We worked closely with a stakeholder, 
                having weekly meetings and talking through her expectations for the app.abs
                We used ReactJs for the client side of the app and used NodeJS for the 
                backend server.  The app was a way to provide a pure digital Geocache experience.
                
               {/* <a
               href = "https://game-of-life-m.herokuapp.com">See deployed app
               </a> */}
                </div>
            </Pject2>
        </Wrap>
        </>
     );
}
 
export default Projects;