import React from 'react';
import Typography from "@material-ui/core/Typography";
import PhotoGallery from "../collections/PhotoGallery"

import {PhotosProvider} from "../context/photosContext";
import Container from "@material-ui/core/Container";

const Photos = () => {
    return (
        <Container maxWidth="md">
            <Typography variant="h1">
                Photos
            </Typography>
            <PhotosProvider>
                <PhotoGallery />
            </PhotosProvider>
        </Container>
    )
}

export default Photos;