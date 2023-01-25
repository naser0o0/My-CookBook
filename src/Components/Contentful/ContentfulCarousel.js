import React, { useState, useEffect } from "react";
import { client } from "./client";

import BannerCarousel from "../Carousel/BannerCarousel";

export default function ContentfulCarousel() {
  const [carousel, setCarousel] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  function DataLoadOfContentfulCarousel() {
    // setIsLoading(true);
    client
      .getEntries({ content_type: "rezeptCarousel" })
      .then((response) => setCarousel(response.items))
      // .then((response) => console.log(response.items))
      .catch((err) => console.log(err));

    // setIsLoading(false);
  }

  useEffect(() => {
    DataLoadOfContentfulCarousel();
  }, []);

  return (
    <>
      <div>
        <BannerCarousel carousel={carousel} />
      </div>
    </>
  );
}
