import React from "react";
import RecipeReviewCard from "./RecipeReviewCard";

export default function RecipeCard({ recipeList }) {
    let ListOfRecipe;
    if (recipeList) {
        ListOfRecipe = recipeList.map((recipeItem) => {
            const title = recipeItem.fields.title;
            const imgUrl = recipeItem.fields.image.fields.file.url;
            const recipeID = recipeItem.sys.id;
            const difficulty = recipeItem.sys.difficulty;
            // console.log("difficulty", difficulty);
        
            return (
                <>
                    <RecipeReviewCard
                        title={title}
                        imgUrl={imgUrl}
                        recipeID={recipeID}
                    ></RecipeReviewCard>
                </>
            );
        });
    }

    return (
        <div
            className="hover-bild"
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
                alignItems: "center",
            }}
        >
            {ListOfRecipe}

        </div>
    );
}
