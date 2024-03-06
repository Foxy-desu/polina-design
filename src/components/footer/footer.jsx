import React from "react";
import styles from "./footer.module.scss";

export const Footer = ({ footerData }) => {
  function removeSpaces(string) {
    return string.replace(/\s/g, "");
  }

  function renderContacts(contacts) {
    return contacts.map((contact) => {
      const linkClass = `footer__link-${contact.type.slice(0, -1)}`;
      return (
        <li key={contact.id} className="footer__list-item">
          <a
            className={styles[linkClass]}
            href={
              contact.type +
              (contact.type === "tel:"
                ? removeSpaces(contact.content)
                : contact.content)
            }
          >
            {contact.content}
          </a>
        </li>
      );
    });
  }

  return (
    <footer className={styles["footer"]}>
      <div className={styles["content-wrap"]}>
        <ul className={styles["footer__list"]}>
          {renderContacts(footerData.contacts)}
        </ul>
      </div>
    </footer>
  );
};
