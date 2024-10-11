import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Contacts } from '../interfaces/contact.interface';

// Define the type for the context
interface ContactContextType {
  currentContact: Contacts;
  setCurrentContact: React.Dispatch<React.SetStateAction<Contacts>>;
}

// Create the context
export const ContactStore = createContext<ContactContextType | undefined>(undefined);

// Custom hook to use the context
export const useContactContext = () => {
  const context = useContext(ContactStore);
  if (!context) {
    throw new Error('useContactContext must be used within a ContactProvider');
  }
  return context;
};

// Define props interface for ContactProvider
interface ContactProviderProps {
  children: ReactNode; // ReactNode represents any React node, not just components
}

// Provider component
export const ContactProvider: React.FC<ContactProviderProps> = ({ children }) => {
  const [currentContact, setCurrentContact] = useState<Contacts>({ firstName:"dsajsa", lastName: "Aasf", id: 0, image: "", roomId: "" });

  // Value to be provided by the context
  const contextValue: ContactContextType = {
    currentContact,
    setCurrentContact
  };

  return (
    <ContactStore.Provider value={contextValue}>
      {children}
    </ContactStore.Provider>
  );
};
