import React from "react";
// import { FeedbackOptions } from "../FeedbackOptions/FeedbackOptions";
// import { Statistics } from "../Statistics/Statistics.jsx";
// import { Section } from "../Section/Section.jsx";
// import { Notification } from "../Notification/Notification.jsx";
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

  buttonClick = (evt) => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  // countTotalFeedback = () => {
  //   const { good, neutral, bad } = this.state;
  //   return good + neutral + bad;
  // };

  // countPositiveFeedbackPercentage = () => {
  //   const { good } = this.state;
  //   const countTotal = this.countTotalFeedback();
  //   return Math.round((good * 100) / countTotal);
  // };

  render() {
    return (
      <Container>
        <TopTitle>Phonebook</TopTitle>
        
        <Title>Contacts</Title>
      </Container>
    );
  }
} // функція  App(), повертає компоненти з даними для рендеру сторінки
