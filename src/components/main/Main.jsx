import Header from "./header/Header";
import DownloadBox from "./downloadBox/DownloadBox";
import configFpsData from "../../utils/configFpsData";

import "./main.css";

export default function Main() {
  const { patch, desc: boxes } = configFpsData;

  return (
    <div className="main">
      <Header emoji="🔧" text={`PATCH ${patch}`} />

      {boxes.map((data, i) => (
        <DownloadBox key={data.downloadLink} i={i} data={data} />
      ))}
    </div>
  );
}
