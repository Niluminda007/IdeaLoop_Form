import { Box } from "@mui/material";
import FormInputSection from "./FormInputSection";
import FormInformationSection from "./FormInformationSection";
import UserFormContext from "../context/UserFormContext";
import { useContext } from "react";
import { UserInput } from "../types";

const Form = () => {
  const context = useContext(UserFormContext);
  if (!context || !context.handleSubmit)
    throw new Error("UserFormContext or register is undefined");
  const { handleSubmit } = context;
  const onValid = (data: UserInput) => {
    const jsonPayload = JSON.stringify(data, null, 2);
    alert(jsonPayload);
    console.log(data);
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
