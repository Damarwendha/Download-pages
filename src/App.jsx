import { BrowserRouter, Routes, Route } from "react-router-dom";
import MLBBConfig from "./pages/MLBBConfig";
import MLBBLite from "./pages/MLBBLite";
import NotExits from "./pages/NotExits";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MLBBConfig />} />
        <Route path='/Config' element={<MLBBConfig />} />
        <Route path='/MLBBLite' element={<MLBBLite />}/>
        <Route path='*' element={<NotExits />}/>
      </Routes>
    </BrowserRouter>
  );
}
