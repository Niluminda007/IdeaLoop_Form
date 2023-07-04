import { Box, Typography, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import DoneIcon from "@mui/icons-material/Done";
import { get, useFormContext } from "react-hook-form";

const NewsLetterForm = () => {
  const { t } = useTranslation();
  const {
    formState: { errors },
    register,
    setValue,
  } = useFormContext();

  const error = get(errors, "newLetterSubscriptionEmail");
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
          error={Boolean(error)}
          helperText={error?.message}
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
