import Header from "./header/Header";
import DownloadBox from "./downloadBox/DownloadBox";

import styles from "./main.module.css";

export default function Main({ data }) {
  const { patch, desc } = data;

  return (
    <div className={styles.main}>
      <Header emoji="🔧" text={`PATCH ${patch}`} />

      <div>
        {desc.map((data, i) => (
          <DownloadBox key={data.downloadLink} i={i} data={data} />
        ))}
      </div>
    </div>
  );
}
