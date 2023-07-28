import { BrowserRouter, Routes } from "react-router-dom";
import FaqForm from "./components/Faq/FaqForm";
import "./index.css";
import Faq from "./pages/Faq";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <FaqForm />
        <Faq />
      </Routes>
    </BrowserRouter>
  );
}
