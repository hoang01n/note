
import './App.css'
import { MainLayout } from './layout/MainLayout'
import routersConfig from './routes/config'
import { Routes, Route , BrowserRouter } from 'react-router-dom'

function App() {



  return (

    <MainLayout>

      <Routes>
        {routersConfig.map((route) => (
          <Route
            key={route.path}
            path={route.path}
           
            element={route.element} // Use `element` to render the component
          />
        ))}
      </Routes>
    </MainLayout>
  
  )

}

export default App
