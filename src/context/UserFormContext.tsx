import { PropsWithChildren, createContext } from "react";
import {
  useForm,
  UseFormRegister,
  SubmitHandler,
  Resolver,
  FieldErrors,
} from "react-hook-form";
import { UserInput } from "../types";
import { userValidationSchema } from "../schema/validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
interface UserFormContextProps {
  register: UseFormRegister<UserInput>;
  handleSubmit: (onValid: SubmitHandler<UserInput>) => () => void;
  setValue: (
    name: keyof UserInput,
    value: any,
    options?: { shouldValidate?: boolean }
  ) => void;
  errors: FieldErrors<UserInput>;
}

const UserFormContext = createContext<UserFormContextProps | undefined>(
  undefined
);

export const UserFormProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const {
    register,
    handleSubmit: useFormHandleSubmit,
    formState: { errors },
    setValue,
  } = useForm<UserInput>({
    defaultValues: {
      subscribedToNewsLetter: false,
    },
    resolver: yupResolver(userValidationSchema) as Resolver<UserInput, object>,
    mode: "onTouched",
  });

  const handleSubmit = (onValid: SubmitHandler<UserInput>) =>
    useFormHandleSubmit(onValid);

  return (
    <UserFormContext.Provider
      value={{ register, handleSubmit, setValue, errors }}>
      {children}
    </UserFormContext.Provider>
  );
};

export default UserFormContext;
