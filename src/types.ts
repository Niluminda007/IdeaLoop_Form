export type NavLinkProps = {
  link: string;
};

export interface CountryType {
  code: string;
  label: string;
  phone: string;
  suggested?: boolean;
}

export type AboutInformationProps = {
  title: string;
  content?: string;
};

export interface UserInput {
  companyName: string;
  country: string;
  name: string;
  phoneNumber: string;
  email: string;
  linkdein: string;
  idea: string;
  additionalFile: File | null | undefined;
  subscribedToNewsLetter: boolean;
  newLetterSubscriptionEmail: string;
  promotionalCommunication: boolean;
  termsAgreed: boolean;
}
