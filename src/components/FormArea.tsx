import { Box } from "@mui/material";
import FormHeading from "./FormHeading";
import Form from "./Form";
import { FormProvider, useForm, Resolver } from "react-hook-form";
import { userValidationSchema } from "../schema/validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserInput } from "../types";

const FormArea = () => {
  const form = useForm<UserInput>({
    defaultValues: {
      companyName: "",
      country: "",
      name: "",
      phoneNumber: "",
      email: "",
      linkdein: "",
      idea: "",
      additionalFile: null,
      subscribedToNewsLetter: false,
      newLetterSubscriptionEmail: "",
      promotionalCommunication: false,
      termsAgreed: false,
    },
    resolver: yupResolver(userValidationSchema) as Resolver<UserInput, object>,
    mode: "onTouched",
  });

  return (
    <FormProvider {...form}>
      <Box marginTop="3rem">
        <FormHeading />
        <Form />
      </Box>
    </FormProvider>
  );
};

export default FormArea;
