import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import CheckBoxComponent from "./CheckBoxComponent";
import { get, useFormContext } from "react-hook-form";

const FormConditionSection = () => {
  const { t } = useTranslation();
  const {
    formState: { errors },
  } = useFormContext();
  const error = get(errors, "termsAgreed");
  return (
    <Box display="flex" flexDirection="column">
      <CheckBoxComponent
        label="promotionalCommunication"
        conent={t("formArea.inputs_radio.promotional")}
      />
      <CheckBoxComponent
        error={error?.message}
        label="termsAgreed"
        conent={t("formArea.inputs_radio.terms_and_conditions")}
      />
    </Box>
  );
};

export default FormConditionSection;
