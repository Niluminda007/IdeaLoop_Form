import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { countries } from "../constants/countries";
import { useTranslation } from "react-i18next";
import { get, useFormContext } from "react-hook-form";

const CountryDropdownInput = () => {
  const { t } = useTranslation();

  const {
    formState: { errors },
    register,
  } = useFormContext();
  const error = get(errors, "country");
  return (
    <Autocomplete
      id="country"
      sx={{
        width: "550px",
        height: "40px",
        "@media (max-width: 600px)": {
          width: "100%",
        },
      }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}>
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            alt=""
          />
          {option.label} ({option.code})
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          {...register("country")}
          label={t("formArea.inputs.country")}
          variant="standard"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password",
          }}
          error={Boolean(error)}
          helperText={error?.message}
          sx={{
            width: "100%",
          }}
        />
      )}
    />
  );
};

export default CountryDropdownInput;
