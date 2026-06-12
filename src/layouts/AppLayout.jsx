import React from "react";
import { Outlet } from "react-router";
import AppBar from "../components/AppBar.jsx";

const AppLayout = () => {
  return (
    <div
      className="flex flex-col min-h-screen bg-(--color-neon-bg-main) text-(--color-neon-text-primary) backdrop-transparent-bg"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      <header>
        <AppBar />
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
};
export default AppLayout;
