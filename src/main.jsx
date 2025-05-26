import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ArticuloProvider } from './contexts/itemsContext.jsx'
import { CarritoProvider } from './contexts/carritoContext.jsx'
import { LoginProvider } from './contexts/loginContext.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <ArticuloProvider>
    <CarritoProvider>
      <LoginProvider>
    <App />
    </LoginProvider>
    </CarritoProvider>
    </ArticuloProvider>
  // </StrictMode>,
)
