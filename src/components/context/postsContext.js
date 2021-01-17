import React, {createContext, useReducer} from "react";

export const PostsContext = createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case "FETCH_POSTS":
            return {
                posts: action.payload
            }
        default:
            return state
    }
}

export const PostsProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, {
        posts: []
    })

    return (
        <PostsContext.Provider value={[state, dispatch]}>
            {props.children}
        </PostsContext.Provider>
    )
}