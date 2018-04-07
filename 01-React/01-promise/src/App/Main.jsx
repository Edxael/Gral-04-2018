import React from 'react'
const URL = 'https://swapi.co/api/people/1'

export default class extends React.Component{
    render(){

        const CallingAPI = () => {
            console.log("Calling the API hhhhhhhhh")
            const character = {}

            
            fetch(URL)
                .then( (response) => { return response.json() } )
                .then( (result) => { console.log( result ) } )

            console.log("Character Value: ", character);
        }

        return(
            <div>
                <h1>Promises Practice</h1>
                <hr/>

                <button onClick={ CallingAPI } >Call the API.</button>
            </div>
        )
    }
}