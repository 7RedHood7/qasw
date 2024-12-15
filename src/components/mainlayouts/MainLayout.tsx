import React from 'react';
import {Header} from "../header/Header";
import {Outlet} from "react-router-dom";

export const MainLayout: React.FC  = () => {
    return (
        <div>
            <header><Header/></header>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};

