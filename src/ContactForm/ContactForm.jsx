import React from "react";
import PropTypes from "prop-types"; // імпорт PropTypes для документування призначених типів властивостей, що передаються компонентам
import { Form, Label, Input, Button } from "./ContactForm.styled"; // імпорт стилів

export class ContactForm extends React.Component {
  state = {
    name: "",
    number: "",
  };

  formChange = (e) => {
    // const { name, value } = e.target;
    this.setState({ [e.target.name]: e.target.value });
  };

  formSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit({ name, number });
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <Form onSubmit={this.formSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={this.state.name}
            pattern="\^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.formChange}
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            value={this.state.number}
            pattern="/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.formChange}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
