import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Login from '../Pages/Login/Login';
import Users from '../Pages/Users/Users';
import NotFound from '../Pages/NotFound/NotFound';

export default function LeftNavLayout(props) {
    const menuItems = [
        { text: "Login", link: '/login' },
        { text: "Logout", link: '/logout' },
        { text: "Users", link: '/pages/users' },
        { text: "Tasks", link: '/pages/tasks' }
    ];
    return (
        <>
            <div class="container-fluid">
                <div class="row">
                    <nav class="col-md-2 d-none d-md-block bg-light sidebar">
                        <div class="sidebar-sticky">
                            <ul class="nav flex-column">
                                {menuItems.map((item, index) => (
                                    <li key={item.text} class="nav-item">
                                        <a class="nav-link" href={item.link}>
                                            {item.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>

                    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                        {props.children}
                    </main>
                </div>
            </div>
        </>
    );
}