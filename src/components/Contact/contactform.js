import styled from "styled-components";
import FormError from "./formerror";

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column-wrap;

  label {
    display: block;
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
    color: white;
  }

  input[type="text"],
  [type="email"],
  textarea {
    width: 100%;
    padding: 6px 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    box-sizing: border-box;
    display: block;
    resize: none;
  }
  input[type="email"] {
    border: ${(props) =>
      props.showEmailErrorBorder ? "2px solid red" : "none"};
  }

  input[type="text"] {
    border: ${(props) =>
      props.showTextErrorBorder ? "2px solid red" : "none"};
  }

  input[type="submit"] {
    display: block;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 15px;
    font-size: 14px;
    padding: 8px 12px;
    border-radius: 4px;
    text-transform: uppercase;
    border: none;
    color: white;
    outline: none;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  p {
    color: white;
  }
`;

const Form = styled.form`
  margin-bottom: 30px;
  width: 500px;
  padding: 40px 70px 40px 70px;
  border-radius: 6px;

  @media (max-width: 500px) {
    width: 200px;
  }
  @media (max-width: 320px) {
    width: 150px;
  }
`;

function ContactForm(props) {
  return (
    <FormContainer
      showEmailErrorBorder={props.showEmailErrorBorder}
      showTextErrorBorder={props.showTextErrorBorder}
    >
      <Form
        className="contact-form"
        onSubmit={props.handleSubmit}
        onChange={props.handleChange}
      >
        <label>
          Name:
          <input
            placeholder="Name.."
            type="text" /* required */
            value={props.name}
            onChange={(e) => props.setName(e.target.value)}
            name="name"
          ></input>
        </label>

        <label>
          E-mail:
          <input
            placeholder="Email.."
            type="email" /* required */
            value={props.email}
            onChange={(e) => props.setEmail(e.target.value)}
            name="email"
          ></input>
        </label>

        <label>Message: </label>
        <textarea
          placeholder="Write something.."
          value={props.message}
          onChange={(e) => props.setMessage(e.target.value)}
          rows={5}
          cols={20}
          name="message"
        />
        <input className="contact-form-btn" type="submit" value="Send" />

        {/*  If the error message IS NOT empty, then display error */}
        {props.formerror !== "" && <FormError error={props.formerror} />}
      </Form>
    </FormContainer>
  );
}

export default ContactForm;
