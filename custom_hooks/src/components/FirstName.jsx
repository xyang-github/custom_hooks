import { useState, useEffect } from "react";
import useInputStore from "../stores";

function FirstName() {
  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const firstNameValue = useInputStore((state) => state.firstNameValue);
  const firstNameError = useInputStore((state) => state.firstNameError);
  const { setFirstNameValue, setFirstNameError } = useInputStore(
    (state) => state.actions
  );

  const inputClass = firstNameError ? "input is-danger" : "input";

  function handleChange(event) {
    const value = event.target.value.trim();
    setFirstNameValue(value);

    if (value === "") {
      setIsValid(false);
      return;
    }

    setIsValid(true);
  }

  function handleBlur(event) {
    setIsTouched(true);
  }

  useEffect(() => {
    if (isValid && isTouched) {
      setFirstNameError(false);
    }

    if (!isValid && isTouched) {
      setFirstNameError(true);
    }
  }, [isValid, isTouched]);

  return (
    <>
      <div className="field">
        <label className="label">First Name</label>
        <div className="control">
          <input
            className={inputClass}
            type="text"
            value={firstNameValue}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <p className="help">Help text</p>
      </div>
    </>
  );
}

export default FirstName;
