import React from "react";
import "./footer.css";

export default function SocialMediaIcon({ classNameIcon }) {
    return (
        <>
            <a href="#">
                <i className={classNameIcon}></i>
            </a>
        </>
    );
}
