import React from 'react';
import { ListOfPpl, DeleteButt } from './ContatsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contactSlice';
import { Notification } from '../Notification/Notification';
function ContactsList() {
  const dispatch = useDispatch();
  //получаем видимые контакты которые будут рендерится
  const visibleContacts = useSelector(selectVisibleContacts);
  const onContactsDelete = id => {
    dispatch(deleteContact(id));
  };
  return visibleContacts.length > 0 ? (
    <div>
      <ul>
        {visibleContacts.map(contact => {
          return (
            <ListOfPpl key={contact.id}>
              <p>
                {contact.name}: {contact.number}
              </p>
              <DeleteButt
                type="button"
                onClick={() => onContactsDelete(contact.id)}
              >
                Delete
              </DeleteButt>
            </ListOfPpl>
          );
        })}
      </ul>
    </div>
  ) : (
    <Notification message="There is no any contacts" />
  );
}

export default ContactsList;
