import { Typography } from "@mui/material";

type CustomErrorMessageProps = {
  error: string;
};

const CustomErrorMessage = ({ error }: CustomErrorMessageProps) => {
  return (
    <Typography
      variant="h5"
      sx={{
        color: "red",
        fontWeight: "400",
        fontSize: "0.875rem",
        display: "flex",

        justifyContent: "flex-start",
      }}>
      {error}
    </Typography>
  );
};

export default CustomErrorMessage;
