import { Route, BrowserRouter, Routes } from "react-router-dom";
import FaqForm from "./components/Faq/FaqForm";
import Faq from "./pages/Faq";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/form" element={<FaqForm />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </BrowserRouter>
  );
}
