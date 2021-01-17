import React from 'react';
import {Button} from "@material-ui/core";

const FetchButton = (props) => {
    return (
        <Button variant="outlined" color="primary" onClick={props.onClick}>
            {props.children}
        </Button>
    )
}

export default FetchButton;