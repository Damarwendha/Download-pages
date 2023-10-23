import { useState } from "react";
import { useTimer } from "./../../../hooks/useTimer.js";
import Header from "./header/Header";
import Link from "../../shared/ui/link/Link";
import Thumbnail from "./thumbnail/Thumbnail";
import Button from "../../shared/ui/button/Button";
import Box from "../../shared/ui/box/Box";
import styles from "./downloadBox.module.css";

export default function DownloadBox({ data, i }) {
  const [showLink, setShowLink] = useState(false);
  const { runTimer, currentCount, isRunning } = useTimer(3, () =>
    setShowLink(true)
  );

  function handleButton() {
    runTimer();
  }

  return (
    <Box
      margin="0px 0px 10px 0px"
      borR="50px"
      border="1px solid #ffffff60"
      padding="30px"
      bgColor="#ffffff17"
      className={styles.boxmain}
    >
      <Header v={data.versi} i={i} />

      {showLink ? (
        <Link url={`${data.downloadLink}`} />
      ) : (
        <Button
          text={
            isRunning ? `Tunggu sebentar... ${currentCount}` : "Download disini"
          }
          onClick={handleButton}
          padding="5px 20px"
          margin="5px"
          backgroundColor={isRunning ? "black" : "blue"}
          isDisabled={isRunning}
          border={isRunning ? "0px" : null}
          className={styles.button}
        />
      )}

      <Thumbnail thumbnailId={data.thumbnailId} videoId={data.videoId} />
    </Box>
  );
}
