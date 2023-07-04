import { styled } from "@mui/system";
import Select from "@mui/material/Select";

const StyledSelect = styled(Select)({
  "& > fieldset": {
    border: "none",
  },
  "& > .MuiSelect-selectMenu": {
    paddingRight: "0px",
  },
  "& > .MuiSelect-icon": {
    display: "none",
  },
});

export default StyledSelect;
