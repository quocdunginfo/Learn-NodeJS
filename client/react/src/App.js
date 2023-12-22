import logo from './logo.svg';
import './App.css';

import LeftNavLayout from './Layout/LeftNavLayout';
import Login from './Pages/Login/Login';
import Logout from './Pages/Logout/Logout';
import Home from './Home/Home';
import Users from './Pages/Users/Users';
import Tasks from './Pages/Tasks/Tasks';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const headerText = 'Header text from App';
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path='/pages/home' element={<LeftNavLayout children={<Home />} />} />
          <Route path='/pages/users' element={<LeftNavLayout children={<Users />} />} />
          <Route path='/pages/tasks' element={<LeftNavLayout children={<Tasks />} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
