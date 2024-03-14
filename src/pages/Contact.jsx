import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [validForm, setValidForm] = useState(true);
  const [resetForm, setResetForm] = useState(false);
  const [success, setSuccess] = useState(false);

  const [nameWatch, setNameWatch] = useState(false);
  const [emailWatch, setEmailWatch] = useState(false);
  const [msgWatch, setMsgWatch] = useState(false);

  const validateForm = () => {
    if (name === '' || email === '' || msg === '') {
      setValidForm(false);

      if (name === '') {
        setNameWatch(true);
      } else {
        setNameWatch(false);
      }

      if (email === '') {
        setEmailWatch(true);
      } else {
        setEmailWatch(false);
      }

      if (msg === '') {
        setMsgWatch(true);
      } else {
        setMsgWatch(false);
      }
    } else {
      setValidForm(true);
      sendEmail();
    }
  };

  const sendEmail = async () => {
    try {
      await emailjs.sendForm(
        'service_iss2pt8',
        'template_f1z49rj',
        document.getElementById('contact-form'),
        'OmP-ic-IM31kcLOUS',
        {
          name,
          email,
          message: msg,
        }
      );
      setSuccess(true);
    } catch (error) {
      console.error(error);
      setSuccess(false);
    }

    setResetForm(true);
    setName('');
    setEmail('');
    setMsg('');
  };

  const handleNameChange = (event) => {
    if (event.target.value === '' && !resetForm) {
      setNameWatch(true);
    } else {
      setNameWatch(false);
      setValidForm(true);
    }
    setName(event.target.value);
  };

const handleEmailChange = (event) => {
    if (event.target.value === '' && !resetForm) {
      setEmailWatch(true);
    } else {
      setEmailWatch(false);
      setValidForm(true);
    }
    setEmail(event.target.value);
  };

  const handleMsgChange = (event) => {
    if (event.target.value === '' && !resetForm) {
      setMsgWatch(true);
    } else {
      setMsgWatch(false);
      setValidForm(true);
    }
    setMsg(event.target.value);
  };

  return (
    <div className="form-wrap">
      <div className="form-wrap__info">
        <div className="heading heading__white">
          <h2>Contact me</h2>
        </div>
        <h3>Any questions?</h3>
        <p>
          If you have any questions or want additional information about me, please, don't hesitate to contact!
        </p>
      </div>

      <form id="contact-form">
        <div className="row">
          <div className="col-25">
            <label htmlFor="fname">Name*</label>
          </div>
          <div className="col-75">
            <input
              required
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
              value={name}
              onChange={handleNameChange}
              className={`form-input ${nameWatch ? 'form-input__red' : ''}`}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="lname">Email*</label>
          </div>
          <div className="col-75">
            <input
              required
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Your email.."
              className={`form-input ${emailWatch ? 'form-input__red' : ''}`}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="subject">Message*</label>
          </div>
          <div className="col-75">
            <textarea
              required
              id="subject"
              name="message"
              style={{ height: '190px' }}
              value={msg}
              onChange={handleMsgChange}
              className={`form-input ${msgWatch ? 'form-input__red' : ''}`}
            ></textarea>
          </div>
        </div>
        <p style={{ display: !validForm ? 'block' : 'none' }} className="errorMsg">
          Please check your input, something is missing.
        </p>
        <p style={{ display: success && validForm ? 'block' : 'none' }} className="successMsg">
          Your message was sent, and you will be contacted soon.
        </p>
        <p style={{ display: !success && resetForm ? 'block' : 'none' }} className="errorMsg">
          Couldn't send message, please try again later.
        </p>
        <button
          onClick={validateForm}
          type="button"
          disabled={!validForm}
          className="btn"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
