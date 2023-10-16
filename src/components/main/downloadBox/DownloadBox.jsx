import Box from "../../shared/ui/box/Box";
import { useState, useEffect } from "react";
import Header from "./header/Header";
import Link from "../../shared/ui/link/Link";
import Thumbnail from "./thumbnail/Thumbnail";
import Button from "../../shared/ui/button/Button";
import "./downloadBox.css";

export default function DownloadBox({ data, i }) {
  const [showLink, setShowLink] = useState(false);
  const [count, setCount] = useState(3); // derived state, when count < 3 its mean true or showing the count

  const handleButton = () => {
    setCount(2);
    console.log("changes");
  };

  let interval;
  useEffect(() => {
    if (count < 3 && count > 0) {
      interval = setInterval(() => {
        setCount((c) => c - 1);
      }, 1500);
    }

    if (count === 0) {
      setShowLink((s) => !s);
    }

    return () => {
      clearInterval(interval);
    };
  }, [count]);

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
          text={count < 3 ? `Tunggu sebentar... ${count}` : "Download disini"}
          onClick={handleButton}
          padding="5px 20px"
          margin="5px"
          backgroundColor={count < 3 ? "black" : "blue"}
          isDisabled={count < 3}
          border={count < 3 ? "0px" : null}
          className='customButton'
        />
      )}

      <Thumbnail thumbnailId={data.thumbnailId} videoId={data.videoId} />
    </Box>
  );
}
