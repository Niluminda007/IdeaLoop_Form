import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NavLinkProps } from "../types";

const SolutionNavLink = ({ link }: NavLinkProps) => {
  return (
    <Typography
      key={link}
      sx={{
        color: "#424C4A",
        fontSize: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100px",
      }}>
      {link}
      <KeyboardArrowDownIcon sx={{ color: "black" }} />
    </Typography>
  );
};

export default SolutionNavLink;
