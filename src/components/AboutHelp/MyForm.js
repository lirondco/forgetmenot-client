import React from "react";
import { Textarea, Input, Required, Button} from "../Utils/Utils";
//form submission to my email address
export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/mzbkwaao"
        method="POST"
        className="contact_form"
      >
        <label htmlFor='email'>Email:</label>
        <Required />
        <Input type='email' name='email' required />
        <br />
        <label htmlFor='message'>Message:</label>
        <Required />
        <Textarea
         required
         name='message'
         id='message'
         cols='30'
         rows='5'
          />
        {status === "SUCCESS" ? <p>Thanks!</p> : <Button type='submit'>Submit</Button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}