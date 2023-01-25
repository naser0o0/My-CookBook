
import * as contentful from "contentful";

const contentfulUrlData = {
    space: process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
};

export const client = contentful.createClient(contentfulUrlData);
