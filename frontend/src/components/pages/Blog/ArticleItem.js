import React, {Component} from 'react';
import {getArticleItem} from "../../../actions/articles";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Helmet} from "react-helmet";

class ArticleItem extends Component {
    static propTypes = {
        article: PropTypes.any.isRequired,
    }

    componentDidMount() {
        // const {id} = this.props.match.params;
        this.props.getArticleItem(this.props.match.params.id);
    }

    render() {
        const {article} = this.props;
        return (
            <div className="page" >
                <Helmet>
                    <title>{article.title}</title>
                </Helmet>
               <article className="container ">
                  <div className="page__card">
                      <img src={article.cover} alt={article.title} className="page__img"/>
                      <div className="page__item">
                          <h4 className="page__card-h4 ">{article.title}</h4>
                          <div className="page__card-text">{article.content}</div>
                      </div>
                  </div>
               </article>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    article: state.articles.article
})
export default connect(mapStateToProps, {getArticleItem})(ArticleItem);