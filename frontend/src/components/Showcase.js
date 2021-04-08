import React from 'react'
import {Helmet} from "react-helmet";

const Showcase = () => {
    return (
        <div className="show">
            <Helmet>
                <title>Showcase</title>
            </Helmet>
            <div className="container rel">
                <div className="show__content">
                    <h1>What skills do I have?</h1>
                </div>

                <div className="show__card">
                    <h6 className="show__card-h6">What Do You Want ?</h6>
                    <div className="show__card-h4">SKILLS</div>
                    <div className="show__card-text">
                        JavaScript (... ,ES6),
                        nodejs,
                        nodejs(Express),
                        React,
                        Redux,
                        Angular,
                        CSS , Sass , Scss ,
                        HTML ,
                        Git , Github, Gitlab ,
                        C , C# , C++ ,
                        python ,
                        Python (Django) ,
                        SQL (PostgreSQL, MySQL) ,
                        NoSQL (Mongo) ,
                        Cloud (AWS) ,
                        Typescript.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Showcase
