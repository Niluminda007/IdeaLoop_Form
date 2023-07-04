import TextField from "@mui/material/TextField";
import { get, useFormContext } from "react-hook-form";

type CustomTextFieldProps = {
  name: "companyName" | "name" | "phoneNumber" | "email" | "linkdein" | "idea";
  label: string;
};

const CustomTextField = ({ name, label }: CustomTextFieldProps) => {
  const {
    formState: { errors },
    register,
  } = useFormContext();

  const error = get(errors, name);

  return (
    <TextField
      {...register(name)}
      autoComplete="off"
      id={name}
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
  );
};

export default CustomTextField;
