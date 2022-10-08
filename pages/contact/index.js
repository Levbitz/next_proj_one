import React from "react";
import ContactForm from "../../componets/ContactForm/ContactForm";
import Navbar from "../../componets/Navbar/Navbar";

function index() {
  return (
    <div>
      <div className="indigo  darken-4">
        <Navbar />
      </div>

      <div>
        <ContactForm />
      </div>
    </div>
  );
}

export default index;
