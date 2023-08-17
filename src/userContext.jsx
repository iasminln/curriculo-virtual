import React, { createContext, useState } from 'react'


export const UserContext = createContext()

export const UserStorage = ({ children }) => {
  const [darkAtivo, setDarkAtivo] = useState(false);

  const handleClick = (tipo) => {
    if (tipo === 'dark') {
      document.body.classList.add('darkmode')
      setDarkAtivo(true)
    } else {
      document.body.classList.remove('darkmode')
      setDarkAtivo(false)
    }
  }


  return (
    <UserContext.Provider value={{ handleClick, darkAtivo }}>
      {children}
    </UserContext.Provider>
  )
}