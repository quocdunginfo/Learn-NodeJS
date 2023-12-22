import logo from './logo.svg';
import './App.css';

import LeftNavLayout from './Layout/LeftNavLayout';
import Login from './Pages/Login/Login';
import Logout from './Pages/Logout/Logout';
import Home from './Home/Home';
import Users from './Pages/Users/Users';
import Tasks from './Pages/Tasks/Tasks';
import NotFoundAlias from './Pages/NotFound/NotFound';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const headerText = 'Header text from App';
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact paths="/" element={<LeftNavLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/pages" element={<LeftNavLayout />} >
            <Route index element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='users' element={<Users />} />
            <Route path='tasks' element={<Tasks />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<NotFoundAlias />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
