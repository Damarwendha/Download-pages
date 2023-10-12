import { useState } from "react";
import Title from "./title/Title";
import Version from "./downloadBox/version/Version";
import Link from "./downloadBox/link/Link";
import YoutubeVideo from "./downloadBox/youtubeVideo/YoutubeVideo";
import DownloadBox from "./downloadBox/DownloadBox";
import Button from "./button/Button";
import configFpsData from "../utils/configFpsData";

import "./main.css";

export default function Main() {
  const [showVideo, setShowVideo] = useState(false);

  const { patch: str, desc: data } = configFpsData;

  return (
    <div className="main">
      <h1 className='subscribe'>Subscribe!!</h1>
      <Title emoji="🔧" text={`PATCH ${str}`} />

      {data.map((obj) => (
        <DownloadBox key={obj.downloadLink}>
          <>
            <Version v={3} />
            <span className="arrow">{"👇 "}</span>
            <Link pw="Password di Video" link={`${obj.downloadLink}`} />

            {showVideo ? (
              <YoutubeVideo videoId={`${obj.videoId}`} />
            ) : (
              <Button onClick={() => setShowVideo((s) => !s)}>
                Belum tau pw-nya bang
              </Button>
            )}
          </>
        </DownloadBox>
      ))}
    </div>
  );
}
