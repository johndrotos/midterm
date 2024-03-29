import React from "react";

const year = Date.getFullYear();

function Footer() {
    return(
        <footer>
            Copywrite @${year}
        </footer>
    );
}

export default Footer;