import Box from "../../shared/ui/box/Box";
import PropTypes from "prop-types";
import { useState } from "react";
import Header from "./header/Header";
import Link from "../../shared/ui/link/Link";
import Thumbnail from "./thumbnail/Thumbnail";
import Button from "../../shared/ui/button/Button";
import "./downloadBox.css";

export default function DownloadBox({ data, i }) {
  const [showLink, setShowLink] = useState(false);
  const [showCount, setShowCount] = useState(false);
  const [count, setCount] = useState(2);

  const handleButton = () => {
    setShowCount((c) => !c);

    const interval = setInterval(() => {
      setCount((c) => c - 1);
    }, 1500);

    const timeout = setTimeout(() => {
      setShowLink((l) => !l);
      setShowCount((c) => !c);
      clearTimeout(timeout);
      clearInterval(interval);
    }, 3000);
  };

  return (
    <Box
      margin="0px 0px 10px 0px"
      borR="50px"
      border="1px solid #ffffff60"
      padding="30px"
      bgColor="#ffffff17"
      className="boxmain"
    >
      <Header v={data.versi} i={i} />

      {showLink ? (
        <Link url={`${data.downloadLink}`} />
      ) : (
        <Button
          text={showCount ? `Tunggu sebentar... ${count}` : "Download disini"}
          onClick={handleButton}
          padding="5px 20px"
          margin="5px"
          backgroundColor={showCount ? "black" : "blue"}
          isDisabled={showCount}
          border={showCount ? "0px" : null}
        />
      )}

      <Thumbnail thumbnailId={data.thumbnailId} videoId={data.videoId} />
    </Box>
  );
}