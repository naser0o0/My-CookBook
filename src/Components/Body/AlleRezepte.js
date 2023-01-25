import React from "react";
import ContentfulMain from "../Contentful/ContentfulMain";
import Head from "../Assets/Head";
export default function AlleRezepte({ setRecipeList }) {
    return (
        <>
            <Head
                title={`Alle Rezepte`}
                content={`Hier finden Sie alle unsere Rezepte `}
                name={"description"}
            ></Head>
            {/* <h1>Recipe</h1> */}
            <ContentfulMain setRecipeList={setRecipeList}></ContentfulMain>
        </>
    );
}
