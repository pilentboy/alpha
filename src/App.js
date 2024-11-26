import Header from "./pages/Header";
import Container from "./components/container";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="*" element={<Navigate to={'/'} />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
