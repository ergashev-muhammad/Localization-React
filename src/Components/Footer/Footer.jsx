import React from "react";
import "./Footer.scss"
import languages from "../../Localization/languages";

function Footer ({lang}) {
    return (
        <footer className="footer">
        <div className="container">
        
        <h3 className="footer__heading">{languages[lang].footer.copyright}</h3>

        </div>
        </footer>
        );
    }
    
    export default Footer;