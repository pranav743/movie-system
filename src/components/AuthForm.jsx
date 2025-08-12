import { useState } from "react";

export default function AuthForm() {
    
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const nameOk = form.name.trim().length >= 3;
  const emailOk = true;
  const passwordOk = form.password.length >= 6;
  const allOk = nameOk && emailOk && passwordOk;

  function handleChange(field, value) {
    setForm((e) => ({ ...e, [field]: value }));
  }

  function submit(e) {
    e.preventDefault();
    if (!allOk) return;
    console.log("submit", form);
  }

  return (
    <form className="form" onSubmit={submit}>
      <div className="form-row">
        <label htmlFor="name" className="label">
          Name
        </label>
        <input
          type="text"
          name=""
          id="name"
          className={`input ${!nameOk && form.name ? "input--error" : ""}`}
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
      </div>
      <div className="form">
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          type="email"
          id="email"
          className={`input ${!emailOk && form.email ? "input--error" : ""}`}
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
      </div>
      <div className="form">
        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          type="password"
          id="password"
          className={`input ${
            !passwordOk && form.password ? "input--error" : ""
          }`}
          value={form.password}
          onChange={(e) => handleChange("password", e.target.value)}
        />
      </div>
      <div className="card__actions">
        <button className="btn" disabled={!allOk} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}
