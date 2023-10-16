import { BrowserRouter, Routes, Route } from "react-router-dom";
import ConfigFps from "./pages/configFps/ConfigFps";
import MlLite from "./pages/mlLite/MlLite";
import NotExits from "./pages//notExits/NotExits";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<ConfigFps />} />
        <Route path='/ConfigFps' element={<ConfigFps />} />
        <Route path='/MlLite' element={<MlLite />}/>
        <Route path='*' element={<NotExits />}/>
      </Routes>
    </BrowserRouter>
  );
}
