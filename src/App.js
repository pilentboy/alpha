import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Container from "./components/container";

// Lazy loading the components
const Header = lazy(() => import("./pages/Header"));
const About = lazy(() => import("./pages/About"));
const Home = lazy(() => import("./pages/Home"));
const Service = lazy(() => import("./pages/Service"));
const Register = lazy(() => import("./pages/Register"));
const Phone = lazy(() => import("./pages/Phone"));

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/phone" element={<Phone />} />
              <Route path="/service" element={<Service />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        </Suspense>
      </Container>
    </BrowserRouter>
  );
}

export default App;
