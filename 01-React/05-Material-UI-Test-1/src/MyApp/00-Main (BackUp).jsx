import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './01-Home'
import Contact from './02-Contac'
import Services from './02-Services'

export default class extends React.Component{
    render(){
        return(
            <MuiThemeProvider>
                <Router>
                    <div>
                
                        <ul>
                        <li><Link to="/">Home Page</Link></li>
                        <li><Link to="/1">Page 1</Link></li>
                        <li><Link to="/2">Page 2</Link></li>
                        </ul>
                
                        <hr/>
                
                        <Route exact path="/" component={Home}/>
                        <Route path="/1" component={Contact}/>
                        <Route path="/2" component={Services}/>
                
                    </div>
                </Router>
            </MuiThemeProvider>
        )
    }
}

