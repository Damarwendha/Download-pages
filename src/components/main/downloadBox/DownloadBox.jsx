import Box from "../box/Box";
import PropTypes from "prop-types";

export default function DownloadBox({ children }) {
  return (
    <Box
      margin="0px 0px 10px 0px"
      borR="50px"
      border="1px solid #ffffff60"
      padding="30px"
      bgColor="#ffffff17"
      className="boxmain"
      key={+new Date()}
    >
      {children}
    </Box>
  );
}

DownloadBox.propTypes = {
  children: PropTypes.object,
};