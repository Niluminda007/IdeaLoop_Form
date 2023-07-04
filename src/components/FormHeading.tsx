import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const FormHeading = () => {
  const { t } = useTranslation();
  return (
    <Box
      width={"100%"}
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="1rem"
      sx={{
        textAlign: "center",
      }}>
      <Typography
        variant="h2"
        sx={{ color: "black", fontWeight: "600", fontSize: "3.2rem" }}>
        {t("formArea.heading")}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: "#57605E",
          fontSize: "1.1rem",
          opacity: "0.7",
          textAlign: "center",
        }}>
        {t("formArea.content")}
      </Typography>
    </Box>
  );
};

export default FormHeading;
