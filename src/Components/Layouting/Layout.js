import React, { useContext } from "react";
import Footer from "./Footer/Footer.js";
import Header from "./Header-Bereich/Header.js";
import Newsletter from "./PreFooter/Newsletter/Newsletter";
import { RecipeDataContext } from "../Contentful/ContentfulMainContext";
import MainRouter from "./Navigation/MainRouter.js";

export default function Layout({ children }) {

    const recipeData = useContext(RecipeDataContext);
    // console.log("recipe Data von contaxt Layout page", recipeData);
    return (
        <>
            <Header />
            <MainRouter />

            {children}
            <Newsletter />
            <Footer />
        </>
    );
}
