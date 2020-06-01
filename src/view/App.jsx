import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import About from './About'
import Cs from './Cs'
import Nav from './Nav'


class App extends Component {
    render() {
        return <div>
            <BrowserRouter>
                <Nav />
                <main>
                    { /** HashRouter: HASH路由容器 Route 设置路由规则 */ }
                        <Switch>
                            <Route path='/' exact component={About} />
                            <Route path='/cs' component={Cs} />
                            <Redirect to='/' />
                            <Route path='*' component={About} />
                        </Switch>
                    
                </main>
            </BrowserRouter>
        </div>
    }
}

export default App