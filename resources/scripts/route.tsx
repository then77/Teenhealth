import React, { lazy } from 'react';
import {
    BrowserRouter,
    Route,
    Routes,
    ScrollRestoration
} from 'react-router';
import ProgressBar from '@/components/progress-bar';

import MainLayout from '@/pages/layouts/main';
const AuthLayout = lazy(() => import('@/pages/layouts/auth'));
const DashLayout = lazy(() => import('@/pages/layouts/dash'));

const ResetPassword = lazy(() => import('@/pages/auth/reset-password'));
const DashboardHome = lazy(() => import('@/pages/dash/home'));
const DashboardCourses = lazy(() => import('@/pages/dash/courses'));

import Home from "@/pages/base/home";
import About from "@/pages/base/about";
import Learn from "@/pages/base/learn";
import Navbar from "@/components/navbar";
import Dashboard from '@/pages/base/dashboard';
const Error404 = lazy(() => import('@/pages/misc/not-found'));

function Routable() {
    return (
        <BrowserRouter>
            <Routes>


                <Route index element={<Home />} />
                <Route element={<MainLayout />}>
                    <Route path="about" element={<About />} />
                    <Route path='learn' element={<Learn />} />
                </Route>

                <Route element={<AuthLayout />}>
                    <Route path="login" />
                    <Route path="register" />
                    <Route path="forgot-password" />
                </Route>

                <Route element={<DashLayout />}>
                    <Route path='dashboard' element={<DashboardHome />} />
                    <Route path='dashboard/materi' element={<DashboardCourses />} />
                </Route>

                <Route path="forgot-password/r/:token" element={<ResetPassword />} />

                <Route path="*" element={<Error404 />} />

            </Routes>

            <Navbar links={[
                {
                    href: "/",
                    link: "Home",
                },
                {
                    href: "/learn",
                    link: "Learn",
                },
                {
                    href: "/about",
                    link: "About",
                },
                {
                    href: "https://techcomfest.ukmpcc.org/",
                    link: "Techcomfest 2024",
                    target: "_blank",
                }
            ]} />

            {/*<ScrollRestoration />*/}
            {/*<ProgressBar />*/}
        </BrowserRouter>
    )
}

export default Routable;
