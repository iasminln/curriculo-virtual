import React, { createContext, useEffect, useState } from 'react'


export const UserContext = createContext()

export const UserStorage = ({ children }) => {
  const [darkAtivo, setDarkAtivo] = useState(false);

  useEffect(() => {
    const viewMode = window.localStorage.getItem('portfolioViewMode')
    if (viewMode) handleClick(viewMode)
  }, [])

  const handleClick = (tipo) => {
    if (tipo === 'dark') {
      document.body.classList.add('darkmode')
      window.localStorage.setItem('portfolioViewMode', 'dark')
      setDarkAtivo(true)
    } else {
      document.body.classList.remove('darkmode')
      setDarkAtivo(false)
      window.localStorage.setItem('portfolioViewMode', 'light')
    }
  }


  return (
    <UserContext.Provider value={{ handleClick, darkAtivo }}>
      {children}
    </UserContext.Provider>
  )
}