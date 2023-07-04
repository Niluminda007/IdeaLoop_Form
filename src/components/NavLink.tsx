import Typography from "@mui/material/Typography";
import { NavLinkProps } from "../types";
const NavLink = ({ link }: NavLinkProps) => {
  return (
    <Typography
      sx={{
        color: "#424C4A",
        display: "block",
        fontSize: "1rem",
        width: "100px",
      }}>
      {link}
    </Typography>
  );
};

export default NavLink;
