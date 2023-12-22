import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Outlet, Link } from "react-router-dom";

export default function LeftNavLayout(props) {
    const menuItems = [
        { text: "Login", link: '/login' },
        { text: "Logout", link: '/logout' },
        { text: "Home", link: '/pages/home' },
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
                                        <Link className="nav-link" to={item.link}>{item.text}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>

                    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    );
}