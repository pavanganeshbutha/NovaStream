import React from 'react'
import {Outlet} from "react-router";
import AppBar from "../components/AppBar.jsx";

const AppLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <header>
                <AppBar/>
            </header>
            <main className="flex-1"><Outlet/></main>
            <footer>Footer</footer>
        </div>
    )
}
export default AppLayout
