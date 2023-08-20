import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk, addContactThunk } from 'redux/ContactAsyncThunk';
import { selectContacts } from 'redux/selectors';
import {
  FormStyle,
  FormInput,
  FormLabel,
  FormInputNum,
  ButtonItem,
} from './Form.styled';

function Form() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        break;
    }
  };

  const onAddContact = data => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${data.name} is already in contacts! `);
      return;
    }
    if (contacts.find(contact => contact.phone === data.phone)) {
      alert(`${data.number} is already in contacts! `);
      return;
    }
    dispatch(addContactThunk(data));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const contact = {
      name: name,
      phone: phone,
    };

    onAddContact(contact);

    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      <FormLabel>
        Name
        <FormInput
          onChange={handleInputChange}
          placeholder="Ann Brown"
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormLabel>
      <FormLabel>
        Number
        <FormInputNum
          onChange={handleInputChange}
          placeholder="+380661234567"
          type="tel"
          name="phone"
          value={phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormLabel>
      <ButtonItem type="submit">Add contact</ButtonItem>
    </FormStyle>
  );
}

export default Form;
