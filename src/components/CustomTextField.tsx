import TextField from "@mui/material/TextField";
import { useContext } from "react";
import UserFormContext from "../context/UserFormContext";
import { FieldError } from "react-hook-form";

type CustomTextFieldProps = {
  id: "companyName" | "name" | "phoneNumber" | "email" | "linkdein" | "idea";
  label: string;
  error: FieldError | undefined;
};

const CustomTextField = ({ id, label, error }: CustomTextFieldProps) => {
  const context = useContext(UserFormContext);
  if (!context || !context.register) {
    throw new Error("UserFormContext or register is undefined");
  }
  const { register } = context;
  return (
    <>
      <TextField
        {...register(id)}
        autoComplete="off"
        id={id}
        label={label}
        variant="standard"
        error={Boolean(error)}
        helperText={error?.message}
        sx={{
          width: "550px",
          height: "40px",
          "@media (max-width: 600px)": {
            width: "100%",
          },
        }}
      />
    </>
  );
};

export default CustomTextField;
