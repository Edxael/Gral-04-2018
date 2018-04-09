import React from 'react'
import './style.css'

export default class extends React.Component{
    state = { email: '', phone: '' }

    render(){

        const ValEmail = () => {
            console.log("Validating Email...")
            console.log("The Email: ", this.state.email)
            console.log("  ")
            // console.log(  !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test( this.state.email ))
        }

        const ValPhone = () => {
            console.log("Validating Phone...")
            console.log("The Phone: ", this.state.phone)
            // console.log(  /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test( this.state.phone ))  // this works for numbers like: 801-888-9929
            console.log(  /^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/.test( this.state.phone ))
            console.log("  ")
            this.setState({ phone: '' })
        }

        return(
            <div>
                <h1>Form Validation 1.1</h1>
                <hr/>

                <div className="valsec">
                    <input type="text" placeholder="Email..." value={this.state.email} onChange={ (e) => { this.setState({ email: e.target.value }) } } />
                    <br/><br/>
                    <button onClick={ ValEmail }>Submit</button>
                </div>

                <div className="valsec">
                    <input type="text" placeholder="Phone Number..." value={this.state.phone} onChange={ (e) => { this.setState({ phone: e.target.value }) } } />
                    <br/><br/>
                    <button onClick={ ValPhone }>Submit</button>
                </div>

            </div>
        )
    }
}