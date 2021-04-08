import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getArticles} from "../../../actions/articles";
import {Helmet} from "react-helmet";

class Articles extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
    }

    componentDidMount() {
        this.props.getArticles()

    }

    render() {
        return (
            <div className=" body row row-cols-1 row-cols-md-3 g-4 ">
                <Helmet>
                    <title>Articles</title>
                </Helmet>
                {this.props.articles.map(article => (
                    <div className="col cardd grid__item" key={article.id}>
                        <div className="card h-100  ">
                            <img src={article.cover} alt={article.title} className="card-img-top cardd__img"/>
                            <div className="card-body">
                                <h5 className="card-title ">{article.title}</h5>
                                <p className="card-text">{article.content}</p>
                                <Link className="cardd__btn" to={`article/${article.id}`}>ادامه</Link>
                            </div>
                        </div>
                    </div>
                ))

                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    articles: state.articles.articles.slice().sort((a, b) => b.date - a.date),
})
export default connect(mapStateToProps, {getArticles})(Articles);