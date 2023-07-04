import * as yup from "yup";

export const userValidationSchema = yup.object({
  companyName: yup
    .string()
    .required("Company Name is required")
    .min(5, "Company Name is too short")
    .max(64, "Company Name is too long"),
  country: yup.string().required("Country is required"),
  name: yup
    .string()
    .min(5, "Name is too short")
    .max(64, "Name is too long")
    .required("Name is required"),
  phoneNumber: yup
    .string()
    .required("Phone Number is required")
    .matches(
      /^(\+[0-9]{1,3})?([0-9 \.\-]){5,14}[0-9]$/,
      "Invalid phone number format"
    ),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  linkdein: yup.string().max(64, "Linkdein Name too long").optional(),
  idea: yup.lazy((value) =>
    value
      ? yup.string().min(10, "Idea is too short").max(512, "Idea is too long")
      : yup.string().nullable().optional()
  ),
  additionalFile: yup.mixed().optional(),
  subscribedToNewsLetter: yup.boolean().optional(),
  newLetterSubscriptionEmail: yup
    .string()
    .optional()
    .email("Subscription email is invalid"),
  promotionalCommunication: yup.boolean().optional(),
  termsAgreed: yup
    .boolean()
    .isTrue("You must agreed to terms and conditions")
    .required(),
});
