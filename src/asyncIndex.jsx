import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { useState } from "react";

ReactDOM.createRoot(document.getElementById("subs")).render(
  <React.StrictMode>
    <AsyncText />
  </React.StrictMode>
);

function AsyncText() {
  const [show, setShow] = useState("");

  setTimeout(() => setShow("Subscribe!!"), 5000);
  return (
    <>
      <h1 className="subscribe">{show}</h1>
      <h1 className="subscribe">{show}</h1>
      <h1 className="subscribe">{show}</h1>
    </>
  );
}
