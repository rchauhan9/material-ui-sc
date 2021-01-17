import React from 'react';
import Typography from "@material-ui/core/Typography";
import {PostsProvider} from "../context/postsContext";
import PostsList from "../collections/PostsList";
import Container from "@material-ui/core/Container";

const Posts = () => {
    return (
        <Container maxWidth="md">
            <Typography variant="h1">
                Posts
            </Typography>
            <PostsProvider>
                <PostsList />
            </PostsProvider>
        </Container>
    )
}

export default Posts;