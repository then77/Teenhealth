import React from "react";
import { Outlet } from "react-router";

export default function MainLayout() {
    return location.pathname.startsWith('/dashboard')
        ? <Outlet/> : <>
            <div className="h-20" />
            <Outlet />
        </>
}