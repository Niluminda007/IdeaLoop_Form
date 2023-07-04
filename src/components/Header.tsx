import { Box } from "@mui/material";
import Brand from "./Brand";
import Logo from "../assets/Logo.png";
import NavLinkContainer from "./NavLinkContainer";

const Header = () => {
  return (
    <Box
      height={{ xs: "130px", md: "180px" }}
      padding={{ xs: "1rem", md: "2rem 8rem 0" }}
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center">
      <Brand logo={Logo} customClass="center" />
      <NavLinkContainer />
    </Box>
  );
};

export default Header;
