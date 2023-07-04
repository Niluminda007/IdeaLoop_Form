import { Box } from "@mui/material";
import SolutionNavLink from "./SolutionNavLink";
import NavLink from "./NavLink";
import LoginLinks from "./LoginLinks";
import { useTranslation } from "react-i18next";
import MobileMenu from "./MobileMenu";
import LanguageDropdown from "./LanguageDropdown";

const NavLinkContainer = () => {
  const { t } = useTranslation();

  return (
    <>
      <Box
        display={{ md: "flex", xs: "none", width: "600px" }}
        gap="3rem"
        justifyContent="center"
        alignItems="center">
        <SolutionNavLink link={t("header.navLinks.Solutions")} />
        <NavLink link={t("header.navLinks.Company")} />
        <NavLink link={t("header.navLinks.Pricing")} />
        <NavLink link={t("header.navLinks.Resources")} />
      </Box>
      <Box display={{ md: "none", xs: "flex" }} alignItems="center">
        <LanguageDropdown />
        <MobileMenu />
      </Box>

      <LoginLinks />
    </>
  );
};

export default NavLinkContainer;
