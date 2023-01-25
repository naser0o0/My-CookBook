
import * as React from "react";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

export default function RecipeReviewCard({ title, imgUrl, recipeID }) {
    return (
        <Card sx={{ width: 345, margin: 5 }}>
            <Link to={`/alle-rezepte/${recipeID}`}>

                <CardMedia
                    component="img"
                    height="194"
                    src={imgUrl}
                    alt={title}
                />

                <CardContent>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontSize: 20 }}
                    >
                        {title}
                    </Typography>
                </CardContent>
            </Link>

            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
            
        </Card>
    );
}
