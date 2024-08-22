import { FieldErrors, FieldValues } from "react-hook-form";

const useFormErrors = (errors: FieldErrors<FieldValues>) => {
  const getErrorMessage = (fieldName: string): string | undefined => {
    return errors[fieldName]?.message as string | undefined;
  };

  return {
    getErrorMessage,
  };
};

export default useFormErrors;
