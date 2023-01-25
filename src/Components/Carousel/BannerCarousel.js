/** @format */

import React from "react";
import SwipeableTextMobileStepper from "./SwipeableTextMobileStepper";

export default function BannerCarousel({ carousel }) {
  const carouselBanner = carousel.map((post) => {
    // console.log('image carousel',post.fields.image.fields.file.url);
    const title = post.fields.title;
    const description = post.fields.description;
    const imgUrl = post.fields.image.fields.file.url;

    return imgUrl;

    // <div key={uuid} >

    {
      /*        <h3 >{title}</h3>
                <p >{description}</p>
                <img src={imgUrl}/> 
          */
    }
    //   <SwipeableTextMobileStepper imgUrl={imgUrl}/>

    // </div>
    // );
  });

  console.log("carouselBanner zum Test", carouselBanner);

  return (
    <div>
      {/* {carouselBanner} */}
      <SwipeableTextMobileStepper data={carouselBanner} />
    </div>
  );
}
