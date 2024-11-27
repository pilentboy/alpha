import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./pages/Header";
import Container from "./components/container";

function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
