import React, {useContext} from "react";
import {PostsContext} from '../context/postsContext';
import jsonPlaceholder from "../api/jsonPlaceholder";
import {Button} from "@material-ui/core";
import PostCard from "../cards/PostCard";
import FetchButton from "../buttons/FetchButton";

const PostsList = () => {
    const [state, dispatch] = useContext(PostsContext);

    const fetchPosts = async () => {
        const response = await jsonPlaceholder.get("/posts");
        dispatch({
            type: "FETCH_POSTS",
            payload: response.data
        })
    }

    const displayPosts = (posts) => {
        return posts.slice(0, 30).map(post => {
            return (
                <PostCard user={post.userId} title={post.title} body={post.body} />
            )
        })
    }

    return (
        <div>
            <FetchButton onClick={fetchPosts}>Load Posts</FetchButton>
            {displayPosts(state.posts)}
        </div>
    )
}

export default PostsList;