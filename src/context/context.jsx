import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState('');
  const [signedIn, setSignedIn] = useState(false);
  const [country, setCountry] = useState('');
  const [role, setRole] = useState('');
  const [image, setImage] = useState('');

  return (
    <UserContext.Provider
      value={{
        userName,
        setUserName,
        signedIn,
        setSignedIn,
        role,
        setRole,
        country,
        setCountry,
        image,
        setImage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
