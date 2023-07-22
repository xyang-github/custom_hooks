import { useState, useEffect } from "react";

const useInput = (setInputValue, setError, validation) => {
  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  function handleChange(event) {
    const value = event.target.value.trim();
    setInputValue(value);
    setIsValid(validation(value));
  }

  function handleBlur(event) {
    setIsTouched(true);
  }

  useEffect(() => {
    if (isValid && isTouched) {
      setError(false);
    }

    if (!isValid && isTouched) {
      setError(true);
    }
  }, [isTouched, isValid]);

  return {
    handleChange,
    handleBlur,
  };
};

export default useInput;
