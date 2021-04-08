import axios from "axios";
import {GET_ARTICLES} from "./types";
import {GET_ARTICLES_ITEM} from "./types";

export const getArticles = () => dispatch => {
    axios
        .get('api/articles')
        .then(res => {
            dispatch({
                type: GET_ARTICLES,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}
export const getArticleItem = (id) => dispatch => {
    axios
        .get(`/api/article/${id}`)
        .then(res => {
            dispatch({
                type: GET_ARTICLES_ITEM,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}