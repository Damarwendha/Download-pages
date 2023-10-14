import Box from "../box/Box";
import PropTypes from "prop-types";
import { useState } from "react";
import Version from "./version/Version";
import Link from "./link/Link";
import YoutubeVideo from "./youtubeVideo/YoutubeVideo";
import Button from "../button/Button";

export default function DownloadBox({ data, i }) {
  const [showVideo, setShowVideo] = useState(false);

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
        <Version v={i === 0 ? data.versi + " ( Terbaru )" : String(data.versi)} />
        <span className="arrow">{"👇 "}</span>
        <Link pw="Password di Video" link={`${data.downloadLink}`} />

        {showVideo ? (
          <YoutubeVideo videoId={`${data.videoId}`} />
        ) : (
          <Button onClick={() => setShowVideo((s) => !s)}>
            Belum tau pw-nya bang
          </Button>
        )}
      </>
    </Box>
  );
}

DownloadBox.propTypes = {
  data: PropTypes.object,
  i: PropTypes.number
};
