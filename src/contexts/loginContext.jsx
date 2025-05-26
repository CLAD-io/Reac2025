import { createContext } from "react";
import { useState } from "react";

export const loginContext = createContext();

export function LoginProvider({ children }) {
  const [usuarioLogeado, setUsuarioLogeado] = useState(false);
  const [adminLogeado, setAdminLogeado] = useState(false);

  function ingresoEgresoAdmin() {
    setAdminLogeado(!adminLogeado);
  }
  function ingresoEgresoUser() {
    setUsuarioLogeado(!usuarioLogeado);
  }

  return (
    <loginContext.Provider
      value={{
        ingresoEgresoAdmin,
        adminLogeado,
        ingresoEgresoUser,
        usuarioLogeado
      }}
    >
      {children}
    </loginContext.Provider>
  );
}
