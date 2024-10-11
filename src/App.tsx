import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './components/login';
import Signup from './components/Signup';
import ContactList from './components/ContactList';
import Message from './components/message';
import ProfileBar from './components/profileBar';
import ChatBox from './components/chatBox';
import ChatPage from './pages/chatPage';
import { ContactProvider } from './store/ContactInfo';
import Routing from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddGroupOrContact from './components/AddGroupOrContact';
function App() {
  return (

    <div className="landingPage">
<ContactProvider>
 <Routing/>
</ContactProvider>
    </div>
  );
}

export default App;
