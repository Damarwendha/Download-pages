import Button from "@/components/shared/ui/button/Button";

function LoadingButton({ currenCount }) {
  return (
    <Button
      text={`Searching link... ${currenCount}`}
      padding="5px 20px"
      margin="5px"
      backgroundColor={"lightblue"}
      color={'black'}
    />
  );
}

export default LoadingButton;
