import React, { useState, useEffect } from "react";
import "../footer.css";

export default function DataFetch() {
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState();
    const [imageUrl, setImageURL] = useState([]);

    const space = process.env.REACT_APP_CONTENTFUL_SPACE;
    const accessToken = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN;

    const URL = `https://cdn.contentful.com/spaces/${space}/entries/?access_token=${accessToken}&content_type=footerImage&select=fields`;

    async function getData() {
        setIsLoading(true);

        const response = await fetch(URL);

        const data = await response.json();

        setTimeout(() => {
            setResult(data);
            const imageurl1 = data.includes.Asset[0].fields.file.url;
            const imageurl2 = data.includes.Asset[1].fields.file.url;

            setImageURL((prev) => [...prev, imageurl1]);
            setImageURL((prev) => [...prev, imageurl2]);

            setIsLoading(false);
        }, 1);
    }
    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className="app-logo-container">
                <img src={imageUrl[0]} />
                <img src={imageUrl[1]} />
            </div>
        </>
    );
}
