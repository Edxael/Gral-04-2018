import React from 'react'
import SenData from './senators'
import Template from './Template'



//this is the scope of the class
export default class Main extends React.Component{

    state = { showpol: false, senators: [] }

    render(){

        const FilterRepublicans = () => {
            const RepSen = SenData.filter( (politician) => { return politician.party === "Republican"  })
            this.setState({ senators: RepSen , showpol: true })
        }



        const FilterDemocrats = () => {
            const DemSen = SenData.filter((politician) => {
                return politician.party === "Democrat"
            })
            console.log(DemSen)  //this is step Two of the assignment. Filter the Democrat Senators.
            this.setState({ senators: DemSen , showpol: true })
        }



        const FilterUtahSenators = () => {
            const UtahSen = SenData.filter( (politician) => { return politician.state === "UT"  }) })
            this.setState({ senators: UtahSen , showpol: true })
            console.log(UtahSen)
        }


        const FilterUtahSenior = () => {
            const Senior = SenData.filter( (politician) => { return politician.description === "Senior Senator from Utah"  })
            console.log(Senior[0].person.firstname)  //this is step Four of the assignment. Filter the Utah Senior Senators.

            this.setState({ senators: Senior , showpol: true })
            
            console.log(Senior)
        }



        const showData = () => {
            console.log(this.state.senators)
            return this.state.senators.map((politician) => { return <Template key={politician.phone} info={politician} />  })
        }

        console.log(this.state.showpol)

        return(
            <div>
                <h1>Senators Homework</h1>
                <hr/>

                <button onClick={ FilterRepublicans} >Republicans</button>

                <br></br>

                <button onClick={ FilterDemocrats} >Democrats</button>
                <br></br>

                <button onClick={ FilterUtahSenators } >Utah Senators</button>
                <br></br>

                <button onClick={ FilterUtahSenior } >Utah Senior Senator</button>
                <br></br>

                <hr/>

              
                
                { this.state.showpol ? React.createElement(showData) : <div>No Data</div> }

            </div>
        )
    }
}

// { this.state.showdem ? React.createElement(FilterDemocrats) : <div>No Data</div> }



