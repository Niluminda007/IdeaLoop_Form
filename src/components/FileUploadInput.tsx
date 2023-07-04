import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import UploadIcon from "../assets/upload.png";
import { useContext, useRef, useState } from "react";
import UserFormContext from "../context/UserFormContext";
import CustomErrorMessage from "./CustomErrorMessage";

const FileUploadInput = () => {
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [fileExceeded, setFileExceeded] = useState<boolean>(false);
  const context = useContext(UserFormContext);
  if (!context || !context.setValue) {
    throw new Error("UserFormContext or register is undefined");
  }
  const { setValue } = context;

  const handleFileUpload = () => {
    if (fileInputRef.current && fileInputRef.current.files) {
      const file = fileInputRef.current.files[0];
      if (file.size <= 10 * 1024 * 1024) {
        setUploadedFile(file);
        setValue("additionalFile", file);
        setFileExceeded(false);
      } else {
        setUploadedFile(null);
        setValue("additionalFile", null);
        setFileExceeded(true);
      }
    }
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  return (
    <Box component="div" display="flex" flexDirection="column" gap="1rem">
      <Box
        component="div"
        width="550px"
        height="100px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        border="1px dashed #8E8E8E"
        sx={{
          cursor: "pointer",
          width: "100%",
        }}
        onClick={handleClick}>
        <input
          type="file"
          accept="*"
          ref={fileInputRef}
          hidden
          onChange={handleFileUpload}
        />
        <Box
          display="flex"
          width="200px"
          height="25px"
          justifyContent="center"
          alignItems="center"
          gap="1rem"
          sx={{
            width: "100%",
          }}>
          <img src={UploadIcon} alt="Upload Icon" />
          <Typography
            variant="h5"
            sx={{
              color: "#8E8E8E",
              fontWeight: "400",
              fontSize: "0.875rem",
            }}>
            {uploadedFile
              ? uploadedFile.name
              : t("formArea.inputs.upload_text")}
          </Typography>
        </Box>
      </Box>
      {fileExceeded && (
        <CustomErrorMessage error="File size exceeds the limit of 10MB" />
      )}
      <Typography
        variant="h5"
        sx={{
          color: "#8E8E8E",
          fontWeight: "400",
          fontSize: "0.875rem",
          display: "flex",
          justifyContent: "center",
        }}>
        {t("formArea.inputs.upload_limit_text")}
      </Typography>
    </Box>
  );
};

export default FileUploadInput;
