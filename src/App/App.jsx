import React from "react";
import Notiflix from "notiflix";
import { nanoid } from "nanoid";
import { ContactForm } from "../ContactForm/ContactForm";
import { ContactList } from "../ContactList/ContactList";
import { Filter } from "../Filter/Filter";
import { Container, TopTitle, Title } from "./App.stiled.jsx";

export class App extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  formChange = (e) => {
    const { name, value } = e.target; // деструктуризуєм name та value з посилання на об'єкт, що був ініціатором цієї події
    this.setState({ [name]: value }); // асинхронне оновлення об'єкту-стану state, ключу name присвоюється значення value
  }; // метод formChange класу App, виклик методу призводить до оновлення об'єкту-стану state в полі (name), яке було ініціатором цієї події

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  }; // метод onDeleteContact класу App видаляє відфільтрований по id контакт з масиву контактів та новий масив контактів записується у state/сontacts

  addContact = (contact) => {
    const { contacts } = this.state;
    if (
      contacts.find(
        (item) => item.name === contact.name && item.number === contact.number
      )
    ) {
      return Notiflix.Notify.warning(
        `${contact.name}: ${contact.number} is already in contacts`
      );
    }
    this.setState((prevState) => {
      const newContact = {
        id: nanoid(),
        ...contact,
      };
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  filterContacts = () =>
    this.state.filter === ""
      ? this.state.contacts
      : this.state.contacts.filter((contact) =>
          contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
        );

  render() {
    const filteredContacts = this.filterContacts();
    return (
      <Container>
        <TopTitle>Phonebook</TopTitle>
        <ContactForm onSubmit={this.addContact} />
        <Title>Contacts</Title>
        <Filter filter={this.state.filter} changedFormData={this.formChange} />
        <ContactList
          apdatedContacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
} // функція  App(), повертає компоненти з даними для рендеру сторінки
