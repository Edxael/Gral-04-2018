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
                    <button onClick={getAll} >Get All records</button>
                </div>

                <div className="sectionCont" >
                    <input type="text"/>
                    <button  >Create New Record</button>
                </div>

                <div className="sectionCont" >
                    <input type="text"/>
                    <button  >Get One by ID</button>
                </div>

                <div className="sectionCont" >
                    <input type="text"/>
                    <button  >Update One by ID</button>
                </div>

                <div className="sectionCont" >
                    <input type="text"/>
                    <button  >Delete One by ID</button>
                </div>

            </div>
        )
    }
}
