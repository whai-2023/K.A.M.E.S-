import NextPage from './components/nextPage'


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './App'

export const routes = createRoutesFromElements(
  <Route path="/">
      
    <Route path="/nextPage" element={<NextPage />} />
    <Route path="/" element={<App />} />
  
    
  </Route>
)

export const router = createBrowserRouter(routes)