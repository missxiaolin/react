import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import About from './About'
import Cs from './Cs'

class App extends Component {
    render() {
        return <div>
            <header>
                <a href="/about">测试链接1</a>
                <a href="/">测试链接2</a>
            </header>
            <main>
                { /** HashRouter: HASH路由容器 Route 设置路由规则 */ }
                <BrowserRouter>
                    <Switch>
                        <Route path='/' exact component={About} />
                        <Route path='/cs' component={Cs} />
                        <Redirect to='/' />
                        <Route path='*' component={About} />
                    </Switch>
                </BrowserRouter>
            </main>
        </div>
    }
}

export default App