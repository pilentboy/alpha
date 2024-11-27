import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./pages/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Register from "./pages/Register";
import Phone from "./pages/Phone";
import Container from "./components/container";

function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
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
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
