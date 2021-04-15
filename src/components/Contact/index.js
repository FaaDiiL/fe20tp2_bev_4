import { useState } from "react";
import styled from "styled-components";

import ContactForm from "./contactform";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  h1 {
    margin: 0 auto;
    margin-top: 150px;
  }
`;

const FormContainer = styled.div`
width: 100%;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  flex-flow: column-wrap;
`;

const ThankYouContainer = styled.div`
  display: block;
  margin: 0 auto;
`;

const ThankYouText = styled.h2`
  display: block;
  margin-top: 50px;
  margin-bottom: 50px;
`;
const ClearButton = styled.button`
  display: block;
  margin: 0 auto;
  font-size: 14px;
  padding: 8px 12px;
  text-decoration: none;
  border: none;
  cursor: pointer;
  color: white;
  text-transform: uppercase;
  border-radius: 4px;
  outline: none;

  &:hover {
    text-decoration: underline;
  }
`;

//Function after form been submitted
function ResetButton(props) {
  return (
    <ClearButton className="contact-form-btn" onClick={props.handleOnClick}>
      Back
    </ClearButton>
  );
}

//Thank you message after form been submitted
function ThankYou() {
  return (
    <ThankYouContainer>
      <ThankYouText>Thank you! We'll be in touch</ThankYouText>
    </ThankYouContainer>
  );
}

const Contact = () => {
  const [name, setName] = useState("");
  const [showForm, setShowForm] = useState(true);
  const [showThanks, setShowThanks] = useState(false);
  const [button, setButton] = useState(false);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [showEmailErrorBorder, setShowEmailErrorBorder] = useState(false);
  const [showTextErrorBorder, setShowTextErrorBorder] = useState(false);

  //Form validation
  const [formerror, setFormError] = useState("");

  const getError = () => {
    if (name === null && email === null) {
      setFormError("Fill in the empty fields");
    } else if (name === null || name === "") {
      setFormError("Write your name");
      setShowTextErrorBorder(true);
      if (email !== null || email !== "") {
        setShowEmailErrorBorder(false);
      }
    } else if (email === null || email === "") {
      setFormError("Type your email");
      setShowEmailErrorBorder(true);
      if (name !== null || name !== "") {
        setShowTextErrorBorder(false);
      }
    } else {
      setFormError("");
      setShowEmailErrorBorder(false);
      setShowTextErrorBorder(false);
      return false;
    }

    return true;
  };

  //Form handle on submit function
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!getError()) {
      setName("");
      setShowForm(false);
      setShowThanks(true);
      setButton(true);
    }
  };

  //Form handle on clicked button
  const handleOnClick = (e) => {
    e.preventDefault();
    setShowForm(true);
    setShowThanks(false);
    setButton(false);
    setMessage("");
  };

  return (
    <>
      <ContactContainer>
        <h2>Need anything? Contact us! </h2>
        <FormContainer>
          {showForm ? (
            <ContactForm
              name={name}
              setName={setName}
              showTextErrorBorder={showTextErrorBorder}
              email={email}
              setEmail={setEmail}
              showEmailErrorBorder={showEmailErrorBorder}
              message={message}
              setMessage={setMessage}
              handleSubmit={handleSubmit}
              formerror={formerror}
              setFormError={setFormError}
            />
          ) : null}
          {showThanks ? <ThankYou /> : null} <br />
          <br />
        </FormContainer>
        {button ? (
          <ResetButton
            className="contact-form-btn"
            handleOnClick={handleOnClick}
          />
        ) : null}
      </ContactContainer>
    </>
  );
};

export default Contact;
