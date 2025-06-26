// src/front/routes.jsx
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Login from "./pages/Login";
import Private from "./pages/Private";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/private" element={<Private />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="*" element={<h1>Not found!</h1>} />
    </>
  )
);





