import Box from "@/components/shared/ui/box/Box";
import Header from "./header/Header";
import Thumbnail from "./thumbnail/Thumbnail";
import styles from "./downloadBox.module.css";
import LinkDownload from "./linkDownload/LinkDownload.jsx";

export default function DownloadBox({ data, i }) {
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
      <LinkDownload url={data.downloadLink} />
      <Thumbnail thumbnailId={data.thumbnailId} videoId={data.videoId} />
    </Box>
  );
}
