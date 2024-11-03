import React, { useCallback, useRef } from "react";

export function useFormWithValidation(initialValues) {
    const [values, setValues] = React.useState(initialValues);
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);
  
    const handleChange = (event) => {
        const { name, value } = event.target;

        setValues((prevValues) => ({ ...prevValues, [name]: value }));
        setErrors((prevErrors) => ({ ...prevErrors, [name]: event.target.validationMessage }));
        
        if (formRef.current) {
            setIsValid(formRef.current.checkValidity());
        }
    };

    const formRef = useRef(null);
  
    const resetForm = useCallback(
      (newValues = {}, newErrors = {}, newIsValid = false) => {
        setValues(newValues);
        setErrors(newErrors);
        setIsValid(newIsValid);
      },
      [setValues, setErrors, setIsValid]
    );
  
    return { values, setValues, errors, setErrors, handleChange, resetForm, isValid, formRef, setIsValid };
};