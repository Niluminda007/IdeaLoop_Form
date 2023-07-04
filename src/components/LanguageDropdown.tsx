import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { useTranslation } from "react-i18next";
import CountryFlag from "./CountryFlag";
import StyledSelect from "../styledComponents/StyledSelect";

const LanguageDropdown = () => {
  const { i18n } = useTranslation();
  const [currentFlag, setCurrentFlag] = useState<string>("US");
  const [currentCode, setCurrentCode] = useState<string>("en-US");

  //Setting event type to SelectChangeEvent<string> causes typescript error
  //https://github.com/mui/material-ui/issues/33399
  const handleChange = (e: any) => {
    const [lnCode, CountryCode] = e.target.value.split("-");
    i18n.changeLanguage(lnCode);
    setCurrentCode(e.target.value);
    setCurrentFlag(CountryCode);
  };
  const handleRenderValue = () => {
    return <CountryFlag code={currentFlag} />;
  };

  return (
    <StyledSelect
      labelId="country_dropdown"
      id="country_dropdown"
      value={currentCode}
      label="lng"
      onChange={handleChange}
      renderValue={handleRenderValue}>
      <MenuItem value="en-US">
        English <KeyboardArrowRightRoundedIcon sx={{ color: "black" }} />
      </MenuItem>
      <MenuItem value="ru-RU">
        Russian <KeyboardArrowRightRoundedIcon sx={{ color: "black" }} />
      </MenuItem>
      <MenuItem value="de-DE">
        German <KeyboardArrowRightRoundedIcon sx={{ color: "black" }} />
      </MenuItem>
    </StyledSelect>
  );
};

export default LanguageDropdown;
