import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import CheckBoxComponent from "./CheckBoxComponent";
import UserFormContext from "../context/UserFormContext";
import { useContext } from "react";

const FormConditionSection = () => {
  const { t } = useTranslation();
  const context = useContext(UserFormContext);
  if (!context || !context.handleSubmit)
    throw new Error("UserFormContext or register is undefined");
  const {
    errors: { termsAgreed },
  } = context;
  return (
    <Box display="flex" flexDirection="column">
      <CheckBoxComponent
        label="promotionalCommunication"
        conent={t("formArea.inputs_radio.promotional")}
      />
      <CheckBoxComponent
        error={termsAgreed?.message}
        label="termsAgreed"
        conent={t("formArea.inputs_radio.terms_and_conditions")}
      />
    </Box>
  );
};

export default FormConditionSection;
