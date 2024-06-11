import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const UserDashboard = lazy(() => import("./pages/UserDashboard"));
const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));

function App() {
    return (
        <div className="bg-black text-white min-h-screen">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user-dashboard" element={<UserDashboard />} />
        </Routes>
        </div>
    );
}

export default App;
