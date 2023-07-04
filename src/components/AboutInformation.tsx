import { Box, Typography } from "@mui/material";
import { AboutInformationProps } from "../types";

const AboutInformation = ({ title, content }: AboutInformationProps) => {
  return (
    <Box display="flex" flexDirection="column">
      <Typography fontSize="1rem" color="#383C3E">
        {title}
      </Typography>
      <Typography fontSize="1rem" color="#383C3E">
        {content}
      </Typography>
    </Box>
  );
};

export default AboutInformation;
