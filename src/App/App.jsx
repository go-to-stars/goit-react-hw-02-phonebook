import React from "react";
import Notiflix from "notiflix";
import { nanoid } from "nanoid";
import { ContactForm } from "../ContactForm/ContactForm";
import { ContactList } from "../ContactList/ContactList";
import { Filter } from "../Filter/Filter";
import { Container, Box, TopTitle, Title } from "./App.stiled.jsx"; // імпорт стилів тегів div (Container), div (Box), h1 (TopTitle), h2 (Title)

export class App extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  }; // об'єкт-стану state класу App з даними що відображаються в інтерфейсі

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
        (item) => item.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      return Notiflix.Notify.warning(
        `Name ${contact.name} is already in contacts`
      ); // якщо в списку контактів існує контакт з таким ім'ям, вийти та вивести відповідне повідомлення
    } else if (contacts.find((item) => item.number === contact.number)) {
      return Notiflix.Notify.warning(
        `Number ${contact.number} is already in contacts`
      ); // якщо в списку контактів існує контакт з таким номером телефону, вийти та вивести відповідне повідомлення
    }
    this.setState((prevState) => {
      const newContact = {
        id: nanoid(),
        ...contact,
      };
      return {
        contacts: [...prevState.contacts, newContact],
      };
    }); // інакше, створити константу newContact з id та розпиленим масивом контактів, та додати цей новий контакт до списку контактів
  }; // метод addContact класу App додає контакт в масив контактів та новий масив контактів записується у state/сontacts

  filterContacts = () =>
    this.state.filter === ""
      ? this.state.contacts
      : this.state.contacts.filter((contact) =>
          contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
        ); // метод filterContacts класу App. якщо поле фільтра порожнє, повертає повний список контактів, інакше повертає відфільтровний список контактів

  render() {
    const filteredContacts = this.filterContacts();
    return (
      <Container>
        <Box>
          <TopTitle>Phonebook</TopTitle>
          <ContactForm onSubmit={this.addContact} />
          <Title>Contacts</Title>
          <Filter
            filter={this.state.filter}
            changedFormData={this.formChange}
          />
          <ContactList
            apdatedContacts={filteredContacts}
            deleteContact={this.deleteContact}
          />
        </Box>
      </Container>
    );
  } // повернення для рендеру розмітки застосунку "Книга контактів"
} // клас App(), повертає компоненти з даними для рендеру сторінки
