import { Component } from "react";
import { nanoid } from "nanoid";
import s from "./Form.module.css";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      name: "",
    };
  }

  getInputValue = (e) => {
    e.preventDefault();
    this.props.onSubmit({
      id: nanoid(),
      name: e.target.name.value,
      number: e.target.number.value,
    });
    e.target.reset();
  };

  render() {
    return (
      <>
        <form className={s.form} onSubmit={this.getInputValue}>
          <label className={s.formContainer} htmlFor="name">
            <p>Name</p>
            <input
              placeholder="new name"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <p>Number</p>
            <input
              placeholder="new number"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <button className={s.btnSubmit} type="submit">
              Add contact
            </button>
          </label>
        </form>
      </>
    );
  }
}
export default Form;
