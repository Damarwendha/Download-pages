import { useState } from "react";
import Box from "./box/Box";
import Title from "./title/Title";
import Version from "./version/Version";
import Download from "./download/Download";
import YoutubeVideo from "./youtubeVideo/YoutubeVideo";
import Button from "./button/Button";

import "./main.css";

export default function Main() {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div className="main">
      <Title emoji="🔧" text="CONFIG ML PATCH NOLAN" />
      <Box margin="0px 0px 10px 0px">
        <>
          <Version v={3} />
          <span className="arrow">{"👇 "}</span>
          <Download
            pw="Password di Video"
            link="https://sfile.mobi/6GMFi8AJr2V"
          />

          {showVideo ? (
            <YoutubeVideo videoId="izE-Skra5Po?si=NkS_T5zJBtqv2e5z" />
          ) : (
            <Button onClick={() => setShowVideo((s) => !s)}>
              Belum tau pw-nya bang
            </Button>
          )}
        </>
      </Box>
    </div>
  );
}
