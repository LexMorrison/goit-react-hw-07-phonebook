import Form from './Form/Form';
import ContactsList from './ContactsList/ContactsList';
import { Filter } from './FilterByName/FilterByName';
import { Container } from './PhoneBook.styled';

function PhoneBook() {
  return (
    <Container>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </Container>
  );
}

export default PhoneBook;
