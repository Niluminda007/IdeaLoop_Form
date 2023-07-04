import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import CountryDropdownInput from "./CountryDropdownInput";
import FileUploadInput from "./FileUploadInput";
import CustomTextField from "./CustomTextField";
import { useContext } from "react";
import UserFormContext from "../context/UserFormContext";

const FormInputSection = () => {
  const context = useContext(UserFormContext);
  if (!context || !context.errors)
    throw new Error("UserFormContext or errors is undefined");
  const { companyName, country, name, phoneNumber, email, linkdein, idea } =
    context.errors;
  const { t } = useTranslation();

  return (
    <Box display="flex" flexDirection="column" gap="3rem">
      <CustomTextField
        id="companyName"
        label={t("formArea.inputs.company")}
        error={companyName}
      />
      <CountryDropdownInput error={country} />
      <CustomTextField
        id="name"
        label={t("formArea.inputs.name")}
        error={name}
      />
      <CustomTextField
        id="phoneNumber"
        label={t("formArea.inputs.phone")}
        error={phoneNumber}
      />
      <CustomTextField
        id="email"
        label={t("formArea.inputs.email")}
        error={email}
      />
      <CustomTextField
        id="linkdein"
        label={t("formArea.inputs.linkedin")}
        error={linkdein}
      />
      <CustomTextField
        id="idea"
        label={t("formArea.inputs.idea")}
        error={idea}
      />
      <FileUploadInput />
    </Box>
  );
};

export default FormInputSection;
