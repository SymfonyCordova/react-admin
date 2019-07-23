import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import './index.css';
//页面
import Home from 'page/home/index.jsx';
import Layout from 'component/layout/index.jsx'

class App extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path='/' component={Home} />
                    </Switch>
                </Layout>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)