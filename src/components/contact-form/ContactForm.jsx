// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import ReCAPTCHA from 'react-google-recaptcha';
import styles from './ContactForm.module.css'

export default function ContactForm() {

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  const [state, handleSubmit] = useForm("xzbyjbbp");
  if (state.succeeded) {
      return <h2>Thanks for getting in contact!</h2>;
  }
  return (
    <>
      <h2>Get in Contact</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        className={styles.input}
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="message">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        className={`${styles.input} ${styles.textarea}`}
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <ReCAPTCHA
        className={styles.recaptcha}
        sitekey="6LcP0MIbAAAAAJi_wnMFBEIky78oaSYNUULlpaQk"
        onChange={onChange}
      />
      <button type="submit" disabled={state.submitting} className={`${styles.input} ${styles.button}`}>
        Submit
      </button>
    </form>
  </>
  );
}
