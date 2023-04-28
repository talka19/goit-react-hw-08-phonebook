import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/tasks/operations';
import { Section } from "components/Section/section";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactsList/ContactsList";
import { Container } from "components/App.styled";
import { useAuth } from 'hooks';


export const Contacts = () => {
  const dispatch = useDispatch();
  const {isLoggedIn, isRefreshing} = useAuth();

  useEffect(()=> {
    if(!isRefreshing){
      dispatch(fetchContacts());
    }
  }, [dispatch, isRefreshing]);

  return (
    <>
      {isLoggedIn && !isRefreshing &&
      <>
        <Section title="Phonebook">
          <ContactForm/>
        </Section>

        <Section title="Contacts">
          <Container>
            <Filter />
            <ContactList />
          </Container>
        </Section>
      </>
      }
    </>
  );
};