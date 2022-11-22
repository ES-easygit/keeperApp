import React from "react";

function Footer(){

  const date = new Date();
  const today = date.getFullYear();

  return (
    <footer>
    <p>Copyright ⓒ {today} </p>
    </footer>
  );
}

export default Footer;