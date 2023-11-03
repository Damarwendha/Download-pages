import Logo from "@/components/shared/ui/logo/Logo";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        <Logo
          img="/images/youtube-logo-png-46031.png"
          alt="youtube"
          href="https://m.youtube.com/channel/UCyNj7Rfvk3N7thKppPnS3Jw"
        />
        <Logo
          img="/images/github.png"
          alt="github"
          href="https://github.com/Damarwendha"
          width="35px"
        />
      </div>
      <p>Copyright {new Date().getFullYear()} © Ledac Official</p>
    </div>
  );
}
