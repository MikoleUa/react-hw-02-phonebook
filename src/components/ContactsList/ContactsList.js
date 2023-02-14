import s from "./ContactsList.module.css";

function ContactsList({ list, onDeleteContact }) {
  return (
    <ul className={s.containerList}>
      {list.map((e) => (
        <li className={s.contactsList} key={e.id}>
          <span>
            {e.name}: {e.number}
          </span>
          <button className={s.btnDelete} onClick={() => onDeleteContact(e.id)}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}
export default ContactsList;
