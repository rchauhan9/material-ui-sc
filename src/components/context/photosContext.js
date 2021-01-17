import React, {createContext, useReducer} from "react";

export const PhotosContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_PHOTOS":
            return {
                photos: action.payload
            }
        default:
            return state
    }
}

export const PhotosProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, {
        photos: []
    });

    return (
        <PhotosContext.Provider value={[state, dispatch]}>
            {props.children}
        </PhotosContext.Provider>
    )
}