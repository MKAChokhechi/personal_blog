import React from 'react';
import "./sass/main.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import Navbar from "./components/Navbar"

import Home from "./components/Home";
import Showcase from "./components/Showcase";
// import Portfolio from "./components/Portfolio";
import About from "./components/About";

import store from "./Store";
import Articles from "./components/pages/Blog/Articles";
import ArticleItem from "./components/pages/Blog/ArticleItem";
import NotFound from "./components/pages/NotFound";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/showcase' component={Showcase}/>
                    <Route exact path='/contact' component={Contact}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/articles' component={Articles}/>
                    <Route exact path='/article/:id' component={ArticleItem}/>
                    <Route ><NotFound/></Route>
                </Switch>
                <Footer/>
            </Router>
        </Provider>
    );
}

export default App;
