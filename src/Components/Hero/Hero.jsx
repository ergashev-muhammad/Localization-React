import React from "react";
import "./Hero.scss"
import languages from  "../../Localization/languages"

function Hero ({lang}) {
    return (
        <section className="hero">
        <div className="container">

        <h2 className="hero__heading">{languages[lang].main.hero.title}</h2>

        <p className="hero__paragraph">{languages[lang].main.hero.description}</p>

        </div>
        </section>
        
        );
    }
    
    export default Hero;