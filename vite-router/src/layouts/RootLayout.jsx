import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Innovation Town</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="careers">Careers</NavLink>
        </nav>

        <Breadcrumbs />
      </header>

      <main>
        {/* 告訴瀏覽器我們要將子路由渲染在哪裡 */}
        <Outlet />
      </main>
    </div>
  );
}
