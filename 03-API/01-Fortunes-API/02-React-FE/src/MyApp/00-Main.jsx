import React from 'react'
import './css/style.css'

export default class extends React.Component{
    state = { data: '' }

    render(){

        const getAll = () => {
            console.log("Get All")
        }

        return(
            <div>
                <h1>Fortune API</h1>
                <hr/>

                <div className="sectionCont" >
                    <button onClick={getAll} >Get-All</button>
                </div>

            </div>
        )
    }
}
