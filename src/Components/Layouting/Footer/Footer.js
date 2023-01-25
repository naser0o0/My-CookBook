import React from "react";
import "./footer.css";

import Overview from "./Overview";
import Info from "./Info";
import SocialMedia from "./SocialMedia";
import DataFetch from "./DataFetch/DataFetch";

export default function Footer() {
    return (
        <div>
            <footer>
                <div className="container">
                    <Overview />
                    <div className="logo-container">
                        <DataFetch />
                        <SocialMedia />
                    </div>
                </div>
                <Info />
                <p className="copyright"> © 2022 Super Food</p>
            </footer>
        </div>
    );
}
