import React, {useContext} from "react";
import {PhotosContext} from "../context/photosContext";
import jsonPlaceholder from "../api/jsonPlaceholder";
import MediaCard from "../cards/MediaCard";
import FetchButton from "../buttons/FetchButton";

const PhotoGallery = () => {
    const [state, dispatch] = useContext(PhotosContext);

    const fetchPhotos = async () => {
        const response = await jsonPlaceholder.get("/photos")
        console.log(response.data)
        dispatch({
            type: 'FETCH_PHOTOS',
            payload: response.data
        })
    }

    const galleryItems = (photos) => {
        return photos.slice(0, 10).map(photo => {
            return (
                <MediaCard title={photo.title} image={photo.url} />
            )
        })
    }

    return (
        <div>
            <FetchButton onClick={fetchPhotos}>Load Gallery</FetchButton>
            {galleryItems(state.photos)}
        </div>
    )
}

export default PhotoGallery;