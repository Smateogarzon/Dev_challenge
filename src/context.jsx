import { createContext, useContext, useState } from 'react';

const SearchNameContext = createContext('');

export const useSearchName = () => useContext(SearchNameContext);

export const SearchNameProvider = ({ children }) => {
  const [searchName, setSearchName] = useState('');

  return (
    <SearchNameContext.Provider value={{ searchName, setSearchName }}>
      {children}
    </SearchNameContext.Provider>
  );
};
