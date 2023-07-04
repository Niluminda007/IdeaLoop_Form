import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import NewsLetterForm from "./NewsLetterForm";
import AboutInformation from "./AboutInformation";
import EmailInformation from "./EmailInformation";
import ContactInformationHeading from "./ContactInformationHeading";

const ContactInformation = () => {
  const { t } = useTranslation();
  return (
    <Box display="flex" flexDirection="column" gap="2rem">
      <ContactInformationHeading title={t("formArea.information.legal_info")} />
      <AboutInformation
        title={t("formArea.information.company_title")}
        content={t("formArea.information.company_name")}
      />
      <AboutInformation
        title={t("formArea.information.registration_title")}
        content={t("formArea.information.registration_number")}
      />
      <AboutInformation
        title={t("formArea.information.address_title")}
        content={t("formArea.information.address")}
      />
      <EmailInformation
        title={t("formArea.information.quick_info_title")}
        content={t("formArea.information.quick_info_email")}
      />
      <NewsLetterForm />
    </Box>
  );
};

export default ContactInformation;
