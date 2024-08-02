import emailjs from "@emailjs/browser";
import React from "react";
import Styles from "../../../style/contact/contactForm.module.css";

function ContactForm() {
  // const [formState, setFormState] = useState({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // });

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [subject, setSubject] = useState("");
  // const [message, setMessage] = useState("");

  // function handleNameChange(e) {
  //   setName(e.target.value);
  // }
  // function handleEmailChange(e) {
  //   setEmail(e.target.value);
  // }
  // function handleSubjectChange(e) {
  //   setSubject(e.target.value);
  // }
  // function handleMessageChange(e) {
  //   setMessage(e.target.value);
  // }

  // function handleNameChange(e) {
  //   setFormState({ ...formState, name: e.target.value });
  // }
  // function handleEmailChange(e) {
  //   setFormState({ ...formState, email: e.target.value });
  // }
  // function handleSubjectChange(e) {
  //   setFormState({ ...formState, subject: e.target.value });
  // }
  // function handleMessageChange(e) {
  //   setFormState({ ...formState, message: e.target.value });
  // }

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;

    emailjs
      .sendForm(
        process.env.REACT_APP_EJS_SERVICE_ID,
        process.env.REACT_APP_EJS_TEMPLATE_ID,
        form,
        {
          publicKey: process.env.REACT_APP_EJS_PUBLIC_KEY,
        }
      )
      .then(() => {
        form.reset();
        alert("Form submitted!");
      })
      .catch((error) => {
        alert("Failte to submit form!");
      });
  }

  return (
    <div className={Styles.fromContainer} onSubmit={handleSubmit}>
      <form className={Styles.form} onSubmit={handleSubmit}>
        <div className={Styles.nameEmailContainer}>
          <div className={Styles.TitlleContainer}>
            <h2>Write Us</h2>
            <hr />
            <p>Jot us a note and we’ll get back to you as quickly as possible.</p>
          </div>
          <div className={Styles.inputField}>
            <div>
              <label htmlForm="name">Name*</label>
              <input
                id="name"
                type="text"
                name="name"
                className="form-control"
              />
            </div>
            <div>
              <label htmlFor="name">Email* </label>
              <input
                id="email"
                type="email"
                name="email"
                className="form-control"
              />
            </div>
          </div>

        </div>
        <div className={Styles.Subject}>
          <div>
            <label htmlFor="name">Phone Number </label>
          </div>
          <div>
            <input
              type="text"
              className="form-control"
              name="subject"
              id="subject"
            />
          </div>
        </div>
        <div className={Styles.Message}>
          <div>
            <label htmlFor="name"> Message</label>
          </div>
          <div className={Styles.Textarea}>
            <textarea
              className="form-control"
              name="message"
              rows="30"
              cols="50"
            // required={true}
            // value={formState.message}
            // onChange={handleMessageChange}
            ></textarea>
          </div>
        </div>
        <div className={Styles.btn}>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
