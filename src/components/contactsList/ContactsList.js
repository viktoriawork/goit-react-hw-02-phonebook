import React from "react";
import Styles from "./ContactsList.module.css";

const ContactsList = ({ filter, contacts, onDeleteContact }) => {
  const filteredContacts = filter
    ? contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;
  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={Styles.renderLi} key={id}>
          {name}: {number}
          <button
            className={Styles.btnLi}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
