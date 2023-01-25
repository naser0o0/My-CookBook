import React from "react";
import "./Newsletter.css";

export default function Newsletter() {
    return (
        <div className="newsletter-container">
            <h3>Holen Sie sich alle meine besten Rezepte kostenlos</h3>
            <p>
                Melden Sie sich an, um ein kostenloses eCookbook mit meinen 150
                beliebtesten Rezepten zu erhalten
            </p>

            <input
                id="email"
                type="email"
                placeholder="Einfach hier deine Email geben"
                pattern=".+@globex\.com"
                required
            ></input>

            <div className="check-privacy">
                <input className="check-input" type="checkbox"></input>
                <label>
                    Ich habe die Datenschutzerklärung zur Kenntnis genommen
                </label>
            </div>
            <button>Abschicken</button>
        </div>
    );
}
