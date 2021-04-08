import {GET_ARTICLES} from "../actions/types";
import {GET_ARTICLES_ITEM} from "../actions/types";

const initialState = {
    articles: [],
    article :{}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ARTICLES :
            return {
                ...state,
                articles: action.payload
            }
        case GET_ARTICLES_ITEM :
            return {
                ...state,
                article: action.payload
            }
        default:
            return state
    }
}