import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ConfigFps from "./pages/configFps/ConfigFps";
import MlLite from "./pages/mlLite/MlLite";
import NotExits from "./pages/notExits/NotExits";
import NoPw from "./pages/noPw/NoPw.jsx";
import "./App.css";

const V1_ID = "JmwT6";
const V2_ID = "PusT9";
const V3_ID = "Xmwi1";
const V4_ID = "CnJk2";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="Config" />} />
        <Route path="Config" element={<ConfigFps />} />
        <Route path={`Config/${V1_ID}`} element={<NoPw id={V1_ID} />} />
        <Route path={`Config/${V2_ID}`} element={<NoPw id={V2_ID} />} />
        <Route path={`Config/${V3_ID}`} element={<NoPw id={V3_ID} />} />
        <Route path={`Config/${V4_ID}`} element={<NoPw id={V4_ID} />} />
        <Route path="MlLite" element={<MlLite type="pw" />} />
        <Route
          path={`MlLite/${V1_ID}`}
          element={<MlLite type="nopw" id={V1_ID} />}
        />
        <Route
          path={`MlLite/${V2_ID}`}
          element={<MlLite type="nopw" id={V2_ID} />}
        />
        <Route
          path={`MlLite/${V3_ID}`}
          element={<MlLite type="nopw" id={V3_ID} />}
        />
        <Route
          path={`MlLite/${V4_ID}`}
          element={<MlLite type="nopw" id={V4_ID} />}
        />
        <Route path="*" element={<NotExits />} />
      </Routes>
    </BrowserRouter>
  );
}
