import React from "react";
import "./footer.css";
import SocialMediaIcon from "./SocialMediaIcon";
export default function SocialMedia() {
    const socialMediaClass = [
        "fa-facebook-f",
        "fa-twitter",
        "fa-google-plus-g",
        "fa-youtube",
    ];
    const socialMediaIcons = socialMediaClass.map((iconClasses, index) => {
        // console.log(iconClasses);

        return (
            <SocialMediaIcon key={index} classNameIcon={`fab ${iconClasses}`} />
        );
    });
    const iconClasses = " fab fa-facebook-f";

    return <div className="social-links">{socialMediaIcons}</div>;
}
