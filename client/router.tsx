
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import NextPage from './components/nextPage'

export const routes = createRoutesFromElements(
  <Route path="/">
      
    <Route path="/nextPage/:name" element={<NextPage />} />
    <Route path="/" element={<App />} />
  
    
  </Route>
)

export const router = createBrowserRouter(routes)
