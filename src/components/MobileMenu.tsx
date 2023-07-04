import { useState } from "react";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import SolutionNavLink from "./SolutionNavLink";
import NavLink from "./NavLink";
import { useTranslation } from "react-i18next";
import MenuIcon from "@mui/icons-material/Menu";

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };
  return (
    <Box display={{ md: "none", xs: "block" }} padding="1rem">
      <IconButton
        edge="start"
        sx={{
          bgcolor: "transparent",
          border: "none",
          color: "black",
          marginBottom: ".5rem",
        }}
        aria-label="menu"
        onClick={handleMenuOpen}>
        <MenuIcon />
      </IconButton>

      <Menu
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={menuOpen}
        onClose={handleMenuClose}>
        <MenuItem onClick={handleMenuClose}>
          <SolutionNavLink link={t("header.navLinks.Solutions")} />
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <NavLink link={t("header.navLinks.Company")} />
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <NavLink link={t("header.navLinks.Pricing")} />
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <NavLink link={t("header.navLinks.Resources")} />
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default MobileMenu;
