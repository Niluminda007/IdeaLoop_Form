import { Box } from "@mui/material";
import FormInputSection from "./FormInputSection";
import FormInformationSection from "./FormInformationSection";
import { useFormContext } from "react-hook-form";
import { UserInput } from "../types";

const Form = () => {
  const { handleSubmit, reset } = useFormContext<UserInput>();

  const onValid = (data: UserInput) => {
    const jsonPayload = JSON.stringify(data, null, 2);
    alert(jsonPayload);
    console.log(data);
    reset();
    window.location.reload();
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onValid)}
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      marginTop="2rem"
      padding={{ xs: "2rem 1rem", md: "2rem 9.5rem" }}
      justifyContent="space-between">
      <FormInputSection />
      <FormInformationSection />
    </Box>
  );
};

export default Form;
