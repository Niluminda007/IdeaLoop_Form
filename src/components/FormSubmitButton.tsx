import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";

const FormSubmitButton = () => {
  const { t } = useTranslation();
  return (
    <Box marginTop="0.9rem">
      <Button
        type="submit"
        variant="contained"
        sx={{
          bgcolor: "#2E2E39",
          height: "4rem",
          width: "22rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "0",
          fontSize: "1.2rem",
          fontWeight: "600",
        }}>
        {t("formArea.input_submit_text")}
      </Button>
    </Box>
  );
};

export default FormSubmitButton;
