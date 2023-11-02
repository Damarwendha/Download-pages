import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Spinner from "./components/shared/ui/loadingSpinner/Spinner.jsx";
import "./App.css";

const ConfigFps = lazy(() => import("./pages/configFps/ConfigFps"));
const MlLite = lazy(() => import("./pages/mlLite/MlLite"));
const NoPw = lazy(() => import("./pages/noPw/NoPw"));
const NotExits = lazy(() => import("./pages/notExits/NotExits"));

const V1_ID = "JmwT6";
const V2_ID = "PusT9";
const V3_ID = "Xmwi1";
const V4_ID = "CnJk2";

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route index element={<Navigate to="Config" />} />
          <Route path="Config" element={<ConfigFps />} />
          <Route
            path={`Config/${V1_ID}`}
            element={<NoPw id={V1_ID} versi={1} />}
          />
          <Route
            path={`Config/${V2_ID}`}
            element={<NoPw id={V2_ID} versi={2} />}
          />
          <Route
            path={`Config/${V3_ID}`}
            element={<NoPw id={V3_ID} versi={3} />}
          />
          <Route
            path={`Config/${V4_ID}`}
            element={<NoPw id={V4_ID} versi={4} />}
          />
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
      </Suspense>
    </BrowserRouter>
  );
}
