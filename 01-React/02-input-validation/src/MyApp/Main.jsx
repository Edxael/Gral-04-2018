import React from 'react'
import './style.css'

export default class extends React.Component{
    state = { email: '', phone: '', date: '', time: '' }

    render(){

        const ValEmail = () => {
            console.log("Validating Email...")
            console.log("The Email: ", this.state.email)
            console.log("  ")
            // console.log(  !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test( this.state.email ))
            this.setState({ email: '' })
        }

        const ValPhone = () => {
            console.log("Validating Phone...")
            console.log("The Phone: ", this.state.phone)
            // console.log(  /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test( this.state.phone ))  // this works for numbers like: 801-888-9929
            console.log(  /^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/.test( this.state.phone ))
            console.log("  ")
            this.setState({ phone: '' })
        }

        const ValDate = () => {
            console.log("Validating Date...")
            console.log("The Date: ", this.state.date)
            console.log(  /^\d{4}-\d\d-\d\d$/.test( this.state.date ))
            console.log("  ")
            this.setState({ date: '' })
        }

        const ValTime = () => {
            console.log("Validating Time...")
            console.log("The Time: ", this.state.time)
            console.log(  /([01]?[0-9]{1}|2[0-3]{1}):[0-5]{1}[0-9]{1}/.test( this.state.time ))
            console.log("  ")
            this.setState({ time: '' })
        }

        return(
            <div>
                <h1>Form Validation 1.3</h1>
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

                <div className="valsec">
                    <input type="date" placeholder="Date..." value={this.state.date} onChange={ (e) => { this.setState({ date: e.target.value }) } } />
                    <br/><br/>
                    <button onClick={ ValDate }>Submit</button>
                </div>

                <div className="valsec">
                    <input type="time" placeholder="Date..." value={this.state.time} onChange={ (e) => { this.setState({ time: e.target.value }) } } />
                    <br/><br/>
                    <button onClick={ ValTime }>Submit</button>
                </div>

            </div>
        )
    }
}