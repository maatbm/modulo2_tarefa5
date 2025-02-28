import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from '../pages/Home/Home';
import { ThemeProvider } from "../contexts/ThemeContext";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ThemeProvider><Home /></ThemeProvider>} />
      </Routes>
    </BrowserRouter>
  );
}