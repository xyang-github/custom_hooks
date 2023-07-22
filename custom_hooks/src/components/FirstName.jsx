import useInput from "../hooks/useInput";
import useInputStore from "../stores";

function FirstName() {
  const firstNameValue = useInputStore((state) => state.firstNameValue);
  const firstNameError = useInputStore((state) => state.firstNameError);
  const { setFirstNameValue, setFirstNameError } = useInputStore(
    (state) => state.actions
  );

  const inputClass = firstNameError ? "input is-danger" : "input";

  const { handleChange, handleBlur } = useInput(
    setFirstNameValue,
    setFirstNameError,
    (value) => value !== ""
  );

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
        {firstNameError && (
          <p className="help has-text-danger">First name be blank.</p>
        )}
      </div>
    </>
  );
}

export default FirstName;
