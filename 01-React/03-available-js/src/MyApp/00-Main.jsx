import React from 'react'
import './css/style.css'

export default class extends React.Component{
    render(){

        const Fun1 = () => {
            console.log("Executing Fun1")

      

        }

       

        return(
            <div>
                <h1>Empty project</h1>
                <hr/>

                <div>
                    <button onClick={ Fun1 } >Exectue Fun1 ..</button>
                </div>
                
            </div>
        )
    }
}
