import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        borderRadius: 10,
        margin: 10
    },
    actionGroup: {
        float: "right"
    }
});

const MediaCard = (props) => {
    const classes = useStyles();
    const [favourited, setFavourited] = useState(false);

    const toggleFavourite = () => {
        setFavourited(!favourited)
    }

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={props.alt}
                    height="240"
                    image={props.image}
                    title={props.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.desc}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.actionGroup}>
                <Button size="small" color="primary" startIcon={<ShareIcon />}>
                    Share
                </Button>
                <Button size="small" color="primary" onClick={toggleFavourite} startIcon={favourited ? <FavoriteIcon /> : <FavoriteBorderIcon />}>
                    {favourited ? "Unlike" : "Like"}
                </Button>
            </CardActions>
        </Card>
    );
}

export default MediaCard;

