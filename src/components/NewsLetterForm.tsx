import { Box, Typography, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import DoneIcon from "@mui/icons-material/Done";
import { useContext } from "react";
import UserFormContext from "../context/UserFormContext";

const NewsLetterForm = () => {
  const { t } = useTranslation();
  const context = useContext(UserFormContext);
  if (!context || !context.register || !context.setValue)
    throw new Error("UserFormContext or register is undefined");
  const {
    register,
    setValue,
    errors: { newLetterSubscriptionEmail },
  } = context;
  const handleSubmit = () => {
    setValue("subscribedToNewsLetter", true);
  };
  return (
    <Box component="div" display="flex" flexDirection="column" gap="2rem">
      <Typography fontSize="1rem" color="#383C3E" fontWeight="400">
        {t("formArea.information.news_letter_title")}
      </Typography>
      <Box display="flex" gap="1.5rem">
        <TextField
          {...register("newLetterSubscriptionEmail")}
          id="newLetterSubscriptionEmail"
          label={t("formArea.information.news_letter_input_content")}
          error={Boolean(newLetterSubscriptionEmail)}
          helperText={newLetterSubscriptionEmail?.message}
          variant="standard"
          sx={{ width: "16rem", height: "4rem" }}
        />
        <Button
          variant="contained"
          sx={{
            bgcolor: "#2E2E39",
            height: "3.275rem",
            width: "4.275rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "0",
          }}
          onClick={handleSubmit}>
          <DoneIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default NewsLetterForm;
