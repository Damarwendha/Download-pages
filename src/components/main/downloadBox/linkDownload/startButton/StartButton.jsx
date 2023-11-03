import Button from "@/components/shared/ui/button/Button";
import styles from "./startButton.module.css";

function StartButton({ onClick }) {
  return (
    <Button
      text={"Download disini"}
      onClick={onClick}
      padding="5px 20px"
      margin="5px"
      backgroundColor={"blue"}
      className={styles.button}
    />
  );
}

export default StartButton;
