// ContactList.jsx
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import Contact from '../Contact/Contact';
import clsx from 'clsx';
import styles from './ContactList.module.css';


const ContactList = () => {
    const contactWrapStyles = clsx(styles.contactWrap, 'contactWrap');

    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter);

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <ul className={contactWrapStyles}>
            {filteredContacts.map(({ id, name, number }) => (
                <Contact
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                />
            ))}
        </ul>
    );
};

export default ContactList;