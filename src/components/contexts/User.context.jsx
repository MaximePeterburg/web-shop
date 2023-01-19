import { createContext, useEffect, useState } from 'react';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from '../../utils/Firebase/Firebase.utils';
//actual value u want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {}
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
