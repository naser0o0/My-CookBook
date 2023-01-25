import { CompressOutlined, ImageOutlined } from "@mui/icons-material";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import GoBack from "../../Assets/GoBack.js";
import { RecipeDataContext } from "../../Contentful/ContentfulMainContext";
import { getRecipe } from "../../../Helper/recipeHelper";
import Head from "../../Assets/Head";
import Ingredients from "./Ingredients";

import "./RecipePage.css";




export default function RecipePage({ recipeList }) {
    const recipeData = useContext(RecipeDataContext);
    // console.log("Working", recipeList);
    // console.log("recipe Data von contaxt Recipe page", recipeData);

    const recipeParam = useParams();
    const idFromURL = recipeParam.id;
    console.log("recipeParam", recipeParam);
    console.log("idFromURL", idFromURL);

    const selectedRecipe = getRecipe(recipeData, idFromURL);
    console.log(selectedRecipe);

    const title = selectedRecipe[0].fields.title;
    const imgUrl = selectedRecipe[0].fields.image.fields.file.url;
    const ingredients = selectedRecipe[0].fields.ingredient;
    // console.log(title);
    // console.log("img", imgUrl);
    let listOfIngredients;
    if (selectedRecipe) {
        listOfIngredients = ingredients.map((ingredient) => {
            let unit = ingredient.fields.unit;
            let quantity = ingredient.fields.quantity;
            if (!ingredient.fields.unit) {
                unit = "";
            }
            if (!ingredient.fields.quantity) {
                quantity = "";
            }
            const ingredients = `${quantity} ${unit} ${ingredient.fields.ingredient}`;
            console.log(ingredients);

            return <p>{ingredients}</p>;
        });
    }
    const descriptionarray = selectedRecipe[0].fields.description.content.map(
        (contentItem) => {
            return contentItem.content;
        }
    );

    console.log("descriptionArray", descriptionarray);

    const description = descriptionarray.map((descp) => {
        return <p> {descp[0].value}</p>;
    });

    console.log("description", description);

    return (
        <>
            <Head
                title={`${title}`}
                content={`Hier finden Sie alle unsere ${title} Rezepte`}
                name={"description"}
            ></Head>
            <GoBack className="goBackButton" title="Back to all Recipes" />
            <article className="Recipe-Page-Container">
                <h1 className="Recipe-Title">{title}</h1>
                <img className="Recipe-Img" src={imgUrl} alt={title} />
                <div className="Recipe-Content">
                    <div className="Recipe-Right-Container">
                        <div>{/* <p> schwirigkeit</p> */}</div>
                        <div>
                            <div className="Recipe-Description">
                                <h3>Zubereitung</h3>
                                {description}
                            </div>
                        </div>
                    </div>
                    <div className="Recipe-Left-Container">
                        <div className="Recipe-Portions">
                            <p>Portion</p>
                        </div>
                        <div className="Recipe-Ingredient">
                            <h3>Zutaten</h3>
                            <Ingredients ingredients={ingredients} />
                            {/* {listOfIngredients} */}

                        </div>
                    </div>
                </div>
                         
            </article>
        </>
    );
}
