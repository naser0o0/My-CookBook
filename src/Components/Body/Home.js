import React from "react";
// import BannerCarousel from "../Carousel/BannerCarousel";
// import ContentfulMain from "../Contentful/ContentfulMain";
import ContentfulCarousel from "../Contentful/ContentfulCarousel";
// import PopularRecipePaper from "./PopularRecipes/PopularRecipePaper";
import Head from "../Assets/Head";
import ContentHome from './imgCardHome/contentHome';
import ContentBanner from './imgCardHome/contentBanner';

export default function Home() {
    return (
        <>
            <Head
                title={`Super Food`}
                content={`Unser Home Page`}
                name={"description"}
            ></Head>
            {/* <ContentfulMain/> */}
            {/* <BannerCarousel/> */}
            <ContentfulCarousel />

            <ContentHome/>
            <ContentBanner/>
            {/* <PopularRecipePaper /> */}
        </>
    );
}
