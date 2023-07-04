import Checkbox from "@mui/material/Checkbox";
import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import UserFormContext from "../context/UserFormContext";
import CustomErrorMessage from "./CustomErrorMessage";

type CheckBoxComponentProps = {
  label: "promotionalCommunication" | "termsAgreed";
  conent: string;
  error?: string;
};

const CheckBoxComponent = ({
  label,
  conent,
  error,
}: CheckBoxComponentProps) => {
  const context = useContext(UserFormContext);
  if (!context || !context.register) {
    throw new Error("UserFormContext or register is undefined");
  }
  const { register } = context;
  return (
    <>
      <Box display="flex" alignItems="center">
        <Checkbox
          {...register(label)}
          aria-label={label}
          sx={{
            "&.Mui-checked": {
              color: "black",
            },
          }}
        />
        <Typography
          sx={{ color: "#383C3E" }}
          fontSize="0.875rem"
          display="flex"
          alignContent="center"
          alignItems="center"
          textAlign="center">
          {conent}
        </Typography>
      </Box>
      {error && <CustomErrorMessage error={error} />}
    </>
  );
};

export default CheckBoxComponent;
