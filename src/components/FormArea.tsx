import { Box } from "@mui/material";
import FormHeading from "./FormHeading";
import Form from "./Form";
import { UserFormProvider } from "../context/UserFormContext";
const FormArea = () => {
  return (
    <UserFormProvider>
      <Box marginTop="3rem">
        <FormHeading />
        <Form />
      </Box>
    </UserFormProvider>
  );
};

export default FormArea;
