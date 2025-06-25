import styled from "styled-components";

export const ContactWrapper = styled.section`
  position: relative;
  width: 60%;
  margin: auto;
  padding: 30px 32px;
  background-color: var(--teriary);
  font-family: Lexend, Arial, Helvetica, sans-serif;
  color: var(--text2);

  .heading {
    font-family: Numans, "Open Sans", sans-serif;
    font-weight: 400;
    padding: 0px 30px;
  }

  .visit-form {
    width: 80%;
    margin: auto;
    margin-top: 20px;
    padding: 20px;
    border: 2px solid var(--primary);
    border-radius: 8px;
  }
  .form-group {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  input {
    height: 40px;
    padding: 0 10px;
    outline: none;
    border: none;
    border-radius: 4px;
  }
  textarea {
    height: 100px;
    resize: none;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid var(--border);
    outline: none;
  }

  .error {
    border: 2px solid red;
    border-radius: 4px;
  }

  .error-message {
    color: red;
    font-size: 12px;
  }

  .warning {
    border: 2px dashed blue;
    border-radius: 8px;
    width: 100%;
    padding: 10px;
    background-color: yellow;
    color: blue;
    font-size: 14px;
    font-weight: 500;
    margin-top: 10px;
  }

  .hours {
    width: 100%;
    height: 40px;
    margin-top: 10px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    border-radius: 4px;
  }

  .hours-list {
    position: absolute;
    width: 100%;
    padding: 0 10px;
    background-color: #ffffff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    list-style: none;
  }

  .hour-item {
    cursor: pointer;
  }
  .hour-item:hover {
    background-color: var(--teriary);
    color: #ffffff;
  }

  .submit-btn {
    width: 200px;
    height: 40px;
    display: block;
    margin: 20px auto;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }

  .submit-btn:hover {
    background-color: #3698fb;
    color: #ffffff;
  }

  .message {
    text-align: center;
    font-family: Numans, Arial, Helvetica, sans-serif;
    font-size: 12px;
    font-weight: 400px;
    color: white;
  }

  .message-error {
    background-color: #eb5457;
  }

  .pass {
    background-color: #36b541;
  }
`;

export const ContactTabletWrapper = styled.section`
  position: relative;
  width: 100%;
  margin: auto;
  padding: 30px 32px;
  background-color: var(--teriary);
  font-family: Lexend, Arial, Helvetica, sans-serif;
  color: var(--text2);

  .heading {
    font-family: Numans, "Open Sans", sans-serif;
    font-weight: 400;
    padding: 0px 30px;
  }

  .visit-form {
    width: 80%;
    margin: auto;
    margin-top: 20px;
    padding: 20px;
    border: 2px solid var(--primary);
    border-radius: 8px;
  }
  .form-group {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  input {
    height: 40px;
    padding: 0 10px;
    outline: none;
    border: none;
    border-radius: 4px;
  }
  textarea {
    height: 100px;
    resize: none;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid var(--border);
    outline: none;
  }

  .error {
    border: 2px solid red;
    border-radius: 4px;
  }

  .error-message {
    color: red;
    font-size: 12px;
  }

  .warning {
    border: 2px dashed blue;
    border-radius: 8px;
    width: 100%;
    padding: 10px;
    background-color: yellow;
    color: blue;
    font-size: 14px;
    font-weight: 500;
    margin-top: 10px;
  }

  .hours {
    width: 100%;
    height: 40px;
    margin-top: 10px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    border-radius: 4px;
  }

  .hours-list {
    position: absolute;
    width: 100%;
    padding: 0 10px;
    background-color: #ffffff;
    border-radius: 4px;
    list-style: none;
  }

  .hour-item {
    cursor: pointer;
  }
  .hour-item:hover {
    background-color: var(--teriary);
    color: #ffffff;
  }

  .submit-btn {
    width: 200px;
    height: 40px;
    display: block;
    margin: 20px auto;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }

  .submit-btn:hover {
    background-color: #3698fb;
    color: #ffffff;
  }

  .message {
    text-align: center;
    font-family: Numans, Arial, Helvetica, sans-serif;
    font-size: 12px;
    font-weight: 400px;
    color: white;
  }

  .message-error {
    background-color: #eb5457;
  }

  .pass {
    background-color: #36b541;
  }
`;

export const ContactMobileWrapper = styled.section`
  position: relative;
  width: 100%;
  margin: auto;
  padding: 30px 10px;
  background-color: var(--teriary);
  font-family: Lexend, Arial, Helvetica, sans-serif;
  color: var(--text2);

  .heading {
    font-family: Numans, "Open Sans", sans-serif;
    font-weight: 400;
    padding: 0px 30px;
  }

  .visit-form {
    width: 99%;
    margin: auto;
    margin-top: 20px;
    padding: 20px;
    border: 2px solid var(--primary);
    border-radius: 8px;
  }
  .form-group {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  input {
    height: 40px;
    padding: 0 10px;
    outline: none;
    border: none;
    border-radius: 4px;
  }
  textarea {
    height: 100px;
    resize: none;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid var(--border);
    outline: none;
  }

  .error {
    border: 2px solid red;
    border-radius: 4px;
  }

  .error-message {
    color: red;
    font-size: 12px;
  }

  .warning {
    border: 2px dashed blue;
    border-radius: 8px;
    width: 100%;
    padding: 10px;
    background-color: yellow;
    color: blue;
    font-size: 14px;
    font-weight: 500;
    margin-top: 10px;
  }

  .hours {
    width: 100%;
    height: 40px;
    margin-top: 10px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    border-radius: 4px;
  }

  .hours-list {
    position: absolute;
    width: 100%;
    padding: 0 10px;
    background-color: #ffffff;
    border-radius: 4px;
    list-style: none;
  }

  .hour-item {
    cursor: pointer;
  }
  .hour-item:hover {
    background-color: var(--teriary);
    color: #ffffff;
  }

  .submit-btn {
    width: 200px;
    height: 40px;
    display: block;
    margin: 20px auto;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }

  .submit-btn:hover {
    background-color: #3698fb;
    color: #ffffff;
  }

  .message {
    text-align: center;
    font-family: Numans, Arial, Helvetica, sans-serif;
    font-size: 12px;
    font-weight: 400px;
    color: white;
  }

  .message-error {
    background-color: #eb5457;
  }

  .pass {
    background-color: #36b541;
  }
`;
