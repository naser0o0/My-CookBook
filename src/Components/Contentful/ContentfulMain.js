import React, { useState, useEffect } from "react";
import RecipeCard from "../Body/recipes/RecipeCard";
import { client } from "./client";

export default function ContentfulMain({ setRecipeList }) {
    const [recipe, setRecipe] = useState();
    const [isLoading, setIsLoading] = useState(false);

    function DataLoadOfContentful() {
        setIsLoading(true);
        client
            .getEntries({ content_type: "recipe" })
            .then((response) => setRecipe(response.items))
            .catch((err) => console.log(err));

        setIsLoading(false);
    }

    useEffect(() => {
        DataLoadOfContentful();
    }, []);

    let ListOfRecipe;

    if (recipe) {
        setRecipeList(recipe);
    }

    if (isLoading) {
        return (
            <>
                <p> isLoading</p>
            </>
        );
    }
    return (
        <>
            <RecipeCard recipeList={recipe}></RecipeCard>
        </>
    );
}
