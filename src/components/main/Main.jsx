import Header from "./header/Header";
import DownloadBox from "./downloadBox/DownloadBox";
import configFpsData from "../../utils/configFpsData";

import styles from "./main.module.css";

export default function Main() {
  const { patch, desc: boxes } = configFpsData;

  return (
    <div className={styles.main}>
      <Header emoji="🔧" text={`PATCH ${patch}`} />

      <div>
        {boxes.map((data, i) => (
          <DownloadBox key={data.downloadLink} i={i} data={data} />
        ))}
      </div>
    </div>
  );
}
