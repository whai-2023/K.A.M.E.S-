// import UserName from './components/userName/userName'


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './App'

export const routes = createRoutesFromElements(
  <Route path="/">
    {/* <Route path="/username" element={<UserName />} /> */}
      
    <Route path="/" element={<App />} />
  
    
  </Route>
)

export const router = createBrowserRouter(routes)