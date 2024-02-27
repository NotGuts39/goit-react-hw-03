import css from './Contact.module.css';
import { RiUserLine, RiPhoneLine } from 'react-icons/ri';

const Contact = ({ id, name, number, onDelete }) => {
  return (
      <div className={css.contactContainer}>
          <div>
              
      <div className={css.contactInfo}>
        <RiUserLine className={css.icon} />
        <p>{name}</p>
      </div>
              
      <div className={css.contactInfo}>
        <RiPhoneLine className={css.icon} />
        <p>{number}</p>
      </div>
              
          </div>
          
          <button className={css.deleteButton} onClick={() => onDelete(id)}>Delete</button>
          
    </div>
  );
};

export default Contact;