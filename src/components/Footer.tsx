import { Box } from "@mui/material";
import LogoFooter from "../assets/Logo_footer.png";
import Brand from "./Brand";

const Footer = () => {
  return (
    <Box
      height={{
        xs: "auto",
        md: "30rem",
      }}
      bgcolor="#2E2E39"
      padding="4rem 8rem"
      sx={{
        width: "100%",
      }}>
      <Brand logo={LogoFooter} customClass="flex-start" />
    </Box>
  );
};

export default Footer;
