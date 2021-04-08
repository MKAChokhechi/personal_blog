import React, {Component} from 'react';
import Header from "./Header";
import About from "./About";
import Showcase from "./Showcase";
import { Helmet } from 'react-helmet';

class Home extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Home</title>
                </Helmet>
                <Header/>
                <About/>
                <Showcase/>
                {/*<Blank/>*/}
                {/*<Portfolio/>*/}
            </div>
        );
    }
}

export default Home;
