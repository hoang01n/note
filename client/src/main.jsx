import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './context/authContext.jsx';
import { AppProvider } from './context/AppContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>

      <AuthProvider>
        <App />
      </AuthProvider>
    </AppProvider>
  </StrictMode>,
)
