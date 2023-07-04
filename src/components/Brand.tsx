import { Box } from "@mui/material";

type LogoProps = {
  logo: string;
  customClass: string;
};
const Brand = ({ logo, customClass }: LogoProps) => {
  return (
    <Box display="flex" justifyContent={customClass} alignItems="center">
      <img src={logo} alt="app-logo" />
    </Box>
  );
};

export default Brand;
