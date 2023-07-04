import { Typography } from "@mui/material";
import { AboutInformationProps } from "../types";

const ContactInformationHeading = ({ title }: AboutInformationProps) => {
  return (
    <Typography variant="h5" fontSize="1.5rem" fontWeight="600" color="#383C3E">
      {title}
    </Typography>
  );
};

export default ContactInformationHeading;
