import { Box } from "@mui/material";
import ContactInformation from "./ContactInformation";
import FormConditionSection from "./FormConditionSection";
import FormSubmitButton from "./FormSubmitButton";
const FormInformationSection = () => {
  return (
    <Box width="22.8rem" display="flex" flexDirection="column">
      <ContactInformation />
      <FormConditionSection />
      <FormSubmitButton />
    </Box>
  );
};

export default FormInformationSection;
