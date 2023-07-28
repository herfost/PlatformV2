import { BrowserRouter, Route, Routes } from "react-router-dom";
import FaqForm from "./components/Faq/FaqForm";
import "./index.css";
import Faq from "./pages/Faq";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/PlatformV2/form" element={<FaqForm />} />
        <Route path="/PlatformV2/faq" element={<Faq />} />
      </Routes>
    </BrowserRouter>
  );
}
