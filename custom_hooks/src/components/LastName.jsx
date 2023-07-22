import useInput from "../hooks/useInput";
import useInputStore from "../stores";

function LastName() {
  const lastNameValue = useInputStore((state) => state.lastNameValue);
  const lastNameError = useInputStore((state) => state.lastNameError);
  const { setLastNameValue, setLastNameError } = useInputStore(
    (state) => state.actions
  );

  const inputClass = lastNameError ? "input is-danger" : "input";

  const { handleChange, handleBlur } = useInput(
    setLastNameValue,
    setLastNameError,
    (value) => value !== ""
  );

  return (
    <>
      <div className="field">
        <label className="label">Last Name</label>
        <div className="control">
          <input
            className={inputClass}
            type="text"
            value={lastNameValue}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {lastNameError && (
          <p className="help has-text-danger">Last name be blank.</p>
        )}
      </div>
    </>
  );
}

export default LastName;
