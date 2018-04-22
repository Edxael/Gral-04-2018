import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'  // <--- STYLING LIBRARY
import './99-style.css'




import Home from './01-Home'
import Contact from './02-Contac'
import Services from './02-Services'




export default class extends React.Component{
    render(){
        return(
            <Router>
                <div>

                    <div style={{height: '300px', position: 'relative'}}>
                        <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
                            <Header transparent title="Singers, Groups, Bands & More..." style={{color: 'white'}}>
                                <Navigation>
                                    <a href="#">Link-1</a>
                                </Navigation>
                            </Header>
                            <Drawer title="Main Menu">
                                <Navigation>
                                    <Link to="/">Home Page</Link>
                                    <Link to="/1">Services</Link>
                                    <Link to="/2">Contact Us</Link>
                                </Navigation>
                            </Drawer>
                            <Content />
                        </Layout>
                    </div>


                    <Route exact path="/" component={Home}/>
                    <Route path="/1" component={ Services }/>
                    <Route path="/2" component={ Contact }/>

                    </div>
                </Router>
        )
    }
}