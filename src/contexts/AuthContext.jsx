import React, { createContext, useState, useContext } from 'react';
// Crear el contexto de autenticación
export const AuthContext = createContext();
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState(null)
  const [checkSesion, setCheckSesion] = useState(true)

  const login = (username) => {
    // Simulando la creación de un token (en una app real, esto sería generado por un servidor)
    const token = `fake-token-${username}`;
    localStorage.setItem('authToken', token);
    localStorage.setItem('userSesion', username)
    if (username == 'admin@mail.com' ){
      setAdmin(true)
    }
    setUser(username);
  };
  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userSesion');
    setUser(null);
    setAdmin(false)
  };

  function verificacionLogeo(){
        const userToken = localStorage.getItem("authToken")
        const userSesion1 = localStorage.getItem("userSesion")
        if (userToken && userToken == "fake-token-admin@mail.com"){
          setAdmin(true)
        }
        if(userToken){
          setToken(userToken)
          setCheckSesion(true)
          setUser(userSesion1)
        }
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, admin, verificacionLogeo, token, checkSesion }}>
      {children}
    </AuthContext.Provider> );
}
