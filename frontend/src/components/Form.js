import { useState } from "react";

function Form() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("role");

  const clearForm = () => {
    setFullName("");
    setEmail("");
    setRole("role");
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Form is submitted!");
    clearForm();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Book a call</h2>
          <div className="Field">
            <label>
              Full name <sup>*</sup>
            </label>
            <input
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value)
              }}
              placeholder="Full name" />
          </div>
          <div className="Field">
            <label>
              E-mail address <sup>*</sup>
            </label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              placeholder="Email address" />
          </div>
          <div className="Field">
            <label>
              Service <sup>*</sup>
            </label>
            <select>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit">
            Submit form
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default Form;