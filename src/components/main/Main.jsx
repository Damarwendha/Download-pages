import Box from "./box/Box";
import Title from "./title/Title";
import Version from "./version/Version";
import Download from "./download/Download";
import "./main.css";

export default function Main() {
  return (
    <div className="main">
      <Title emoji='🔧' text='CONFIG ML PATCH NOLAN'/>
      <Box>
        <>
          <Version v={3} />
          <span className="arrow">{"👇 "}</span>
          <Download
            pw="Password di Video"
            link="https://sfile.mobi/6GMFi8AJr2V"
          />
        </>
      </Box>
    </div>
  );
}
