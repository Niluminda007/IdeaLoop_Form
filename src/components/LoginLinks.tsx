import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import LanguageDropdown from "./LanguageDropdown";
const LoginLinks = () => {
  const { t } = useTranslation();
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      gap="20px"
      sx={{
        display: {
          xs: "none",
          md: "flex",
        },
      }}>
      <Typography
        sx={{
          color: "black",
          cursor: "pointer",
          "&:hover": { borderBottom: "1px solid black" },
        }}>
        {t("header.login_link_content")}
      </Typography>
      <Button
        variant="contained"
        sx={{
          width: "120px",
          height: "44px",
          backgroundColor: "#2E2E39",
          borderRadius: "0px",
          "&:hover": { backgroundColor: "#2E2E39" },
        }}>
        {t("header.start_now_button_content")}
      </Button>
      <LanguageDropdown />
    </Box>
  );
};

export default LoginLinks;
