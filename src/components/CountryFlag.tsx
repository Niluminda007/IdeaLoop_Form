import { Box } from "@mui/material";
type CountryFlagProps = {
  code: string;
};
const CountryFlag = ({ code }: CountryFlagProps) => {
  return (
    <Box component="div" sx={{ "& > img": { mr: 2, flexShrink: 0 } }}>
      <img
        loading="lazy"
        width="40"
        src={`https://flagcdn.com/w40/${code.toLowerCase()}.png`}
        srcSet={`https://flagcdn.com/w80/${code.toLowerCase()}.png 2x`}
        alt=""
      />
    </Box>
  );
};

export default CountryFlag;
