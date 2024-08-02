import React from "react";
import ContactInfo from "../componants/contact/contactInfo/ContactInfo";
import ContactForm from "../componants/contact/contactForm/ContactForm";
import Title from "../componants/common/Title";
import Styles from "../style/contact/contact.module.css"

function Contact() {
  return (
    <div className={Styles.contactContainer}>
      <Title
        title="Contact Us"
      // desc="Lorem ipsum dolor, sit a met consectetur adipisicing elit. Ea facere aspernatur, aut doloremque recusandae impedit."
      />
      <div className={Styles.contactContainerInner}>
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
}

export default Contact;
