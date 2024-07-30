import { useCallback } from "react";
import { AnySchema, ValidationError } from "yup";

interface ResolverResult<T> {
  values: T | {};
  errors: Record<string, { type: string; message: string }>;
}

const useYupValidationResolver = <T extends Record<string, any>>(
  validationSchema: AnySchema
) => {
  return useCallback(
    async (data: T): Promise<ResolverResult<T>> => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });

        return {
          values,
          errors: {},
        };
      } catch (error) {
        const yupError = error as ValidationError;

        return {
          values: {},
          errors: yupError.inner.reduce(
            (allErrors, currentError) => ({
              ...allErrors,
              [currentError.path ?? ""]: {
                type: currentError.type ?? "validation",
                message: currentError.message,
              },
            }),
            {}
          ),
        };
      }
    },
    [validationSchema]
  );
};

export default useYupValidationResolver;
