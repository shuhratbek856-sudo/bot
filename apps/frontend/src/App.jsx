import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage.jsx";
import { DashboardPage } from "./pages/DashboardPage.jsx";
import { SignInPage } from "./pages/SignInPage.jsx";
export default function App(){return <Routes><Route path="/" element={<LandingPage/>}/><Route path="/dashboard" element={<DashboardPage/>}/><Route path="/signin" element={<SignInPage/>}/></Routes>;}
