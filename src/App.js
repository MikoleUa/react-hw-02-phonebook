import "./App.css";
import React from "react";
import Section from "./components/Section/Section";
import Form from "./components/Form/Form";
import ContactsList from "./components/ContactsList/ContactsList";
import Filter from "./Filter/Filter";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ],
      name: "",
      number: "",
      filter: "",
    };
  }
  componentDidMount() {
    if (localStorage.getItem("contacts")) {
      this.setState({ contacts: JSON.parse(localStorage.getItem("contacts")) });
    }
  }
  componentDidUpdate(prevprops, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  getNewContact = (data) => {
    if (this.state.contacts.find(({ name }) => name === data.name)) {
      alert(`${data.name} is already in contacts`);
    } else {
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, data],
      }));
    }
  };
  filterContactList = (data) => {
    return this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(data.toLowerCase())
    );
  };
  getFilterContact = (data) => {
    this.setState({ filter: data });
  };
  deleteContact = (idContact) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((e) => e.id !== idContact),
    }));
  };

  render() {
    const filterContacts = this.filterContactList(this.state.filter);
    return (
      <>
        <Section title="Phonebook">
          <Form onSubmit={this.getNewContact}></Form>
        </Section>
        <Section title="Contacts">
          <Filter onChange={this.getFilterContact} />
          <ContactsList
            list={filterContacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}

export default App;
