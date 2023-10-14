import Logo from "./logo/Logo";

import "./footer.css";
import "../main/box/box.css";

export default function Footer() {
  return (
    <div className="footer">
        <>
          <div className="logo">
            <Logo
              img="images/youtube-logo-png-46031.png"
              alt="youtube"
              href="https://m.youtube.com/channel/UCyNj7Rfvk3N7thKppPnS3Jw"
            />
            <Logo
              img="images/github.png"
              alt="github"
              href="https://github.com/Damarwendha"
              width='35px'
            />
          </div>
          <p>Copyright 2014 © Ledac Official</p>
        </>
    </div>
  );
}
