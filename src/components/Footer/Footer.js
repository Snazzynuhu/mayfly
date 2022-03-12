import React from "react";
import { Footer } from './Footer.styles';

export default function Foot() {
  const year = new Date().getFullYear();
  return (
    <Footer>
      <footer>
      <div className="contact">
        <p>address: 7,bormadek Avenue,ago-palace way, okota, Lagos.</p>
      <p>tel: (+234) 81M MMM</p>
      <p>email: mayflydoc@mayfldoc.com</p>
      </div>
      <p>
        copyright &copy;<span className="date">{year}</span> Mayflydoc.Inc. All
        rights reserved.
      </p>
      </footer>
    </Footer>
  );
}
