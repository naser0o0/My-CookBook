import React, { useState, useEffect } from "react";
import { client } from "./client";
import Layout from "../Layouting/Layout";

export const RecipeDataContext = React.createContext();

export default function ContentfulMainContext() {
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

    if (isLoading) {
        return (
            <>
                <p> isLoading</p>
            </>
        );
    }

    return (<>
        <RecipeDataContext.Provider value={recipe}>
            <Layout />
        </RecipeDataContext.Provider>
    </>
    );
}
