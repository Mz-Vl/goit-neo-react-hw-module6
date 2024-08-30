// App.jsx
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <h1>Phonebook</h1>
          <ContactForm />
          <h2>Contacts</h2>
          <SearchBox />
          <ContactList />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;