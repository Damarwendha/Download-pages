import Box from "../box/Box";
import PropTypes from "prop-types";
import { useState } from "react";
import Version from "./version/Version";
import Link from "./link/Link";
import Thumbnail from "./thumbnail/Thumbnail";
import Button from "../button/Button";
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
      <>
        <Version
          v={i === 0 ? data.versi + " ( Terbaru )" : String(data.versi)}
        />

        {!showCount && !showLink && (
          <Button
            text="Download disini"
            onClick={handleButton}
            padding="5px 20px"
            margin="5px"
            backgroundColor="blue"
          />
        )}
        {showCount && <span style={{backgroundColor: 'rgba(0, 0, 0, 0.384)', padding: '10px', borderRadius: '10px'}}>Tunggu sebentar... {count}</span>}
        {showLink && (
          <>
            <Link pw="Password di Video" link={`${data.downloadLink}`} />
          </>
        )}
        <Thumbnail thumbnailId={data.thumbnailId} videoId={data.videoId} />
      </>
    </Box>
  );
}

DownloadBox.propTypes = {
  data: PropTypes.object,
  i: PropTypes.number,
};
