import { instanceUrl } from './Api-service';

export const fetchContacts = async () => {
  const { data } = await instanceUrl.get('/contacts');

  return data;
};

export const addContact = async contact => {
  const { data } = await instanceUrl.post('/contacts', contact);
  return data;
};

export const deleteContact = async id => {
  const { data } = await instanceUrl.delete(`/contacts/${id}`);
  return data;
};
