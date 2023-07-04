import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import CountryDropdownInput from "./CountryDropdownInput";
import FileUploadInput from "./FileUploadInput";
import CustomTextField from "./CustomTextField";

const FormInputSection = () => {
  const { t } = useTranslation();

  return (
    <Box display="flex" flexDirection="column" gap="3rem">
      <CustomTextField
        name="companyName"
        label={t("formArea.inputs.company")}
      />
      <CountryDropdownInput />
      <CustomTextField name="name" label={t("formArea.inputs.name")} />
      <CustomTextField name="phoneNumber" label={t("formArea.inputs.phone")} />
      <CustomTextField name="email" label={t("formArea.inputs.email")} />
      <CustomTextField name="linkdein" label={t("formArea.inputs.linkedin")} />
      <CustomTextField name="idea" label={t("formArea.inputs.idea")} />
      <FileUploadInput />
    </Box>
  );
};

export default FormInputSection;
