
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./screen/dashboard";
import Login from "./screen/login";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/login"  element={<Login />} />
    <Route path="/" element={<Dashboard />}>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
