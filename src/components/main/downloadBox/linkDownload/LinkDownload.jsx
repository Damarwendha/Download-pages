import { useState } from "react";
import { useCountdown } from "./../../../../hooks/useCountdown.js";
import Link from "../../../shared/ui/link/Link";
import StartButton from "./startButton/StartButton.jsx";
import LoadingButton from "./loadingButton/LoadingButton.jsx";

const AMOUNT_OF_SECONDS = 3;

function LinkDownload({ url }) {
  const [showLink, setShowLink] = useState(false);
  const { runCountdown, currentCount, isRunning } = useCountdown(
    AMOUNT_OF_SECONDS,
    () => setShowLink(true)
  );

  return (
    <div>
      {showLink && <Link url={url} />}
      {isRunning && <LoadingButton currenCount={currentCount} />}
      {!isRunning && currentCount === AMOUNT_OF_SECONDS && (
        <StartButton onClick={runCountdown} />
      )}
    </div>
  );
}

export default LinkDownload;
