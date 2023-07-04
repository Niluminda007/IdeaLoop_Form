import { Box, Typography } from "@mui/material";
import { AboutInformationProps } from "../types";

const EmailInformation = ({ title, content }: AboutInformationProps) => {
  return (
    <Box display="flex" flexDirection="column" marginTop="2rem" gap="2rem">
      <Typography fontSize="1.25rem" color="#383C3E" fontWeight="600">
        {title}
      </Typography>
      <Typography fontSize="1rem" color="#383C3E" fontWeight="600">
        {content}
      </Typography>
    </Box>
  );
};

export default EmailInformation;
