import React, { useState } from "react";
import style from "./Register.module.css";
import { useNavigate } from "react-router-dom";
import { Section } from "@/components/Layout/Section";

// type Role = "TOURIST" | "GUIDE" | "ADMIN";

function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [role, setRole] = useState<Role>("TOURIST");
  const navigate = useNavigate();

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_HOST}/users/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, username, email, password }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.message || "Registration failed! Please try again.");
        setLoading(false);
        return;
      }

      setSuccessMsg("Registration successful! You can now explore our tours");

      // setTimeout(() => {
      //   window.location.href = "/login";
      // }, 1000);

      navigate("/tours");
    } catch (err: unknown) {
      setErrorMsg(
        (err instanceof Error
          ? err.message
          : "An error occurred. Please try again.") ||
          "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
   <Section> 
    <div className={style.page_container}>
      <div className={style.login_card}>
        <h2 className={style.title}>Create Account</h2>
        <p className={style.subtitle}>
          Fill in your details to create an account
        </p>

        {errorMsg && <p className={style.error_msg}>{errorMsg}</p>}

        {successMsg && <p className={style.success_msg}>{successMsg}</p>}

        <form className={style.form} onSubmit={submitHandler}>
          <div className={style.form_group}>
            <label className={style.label}>Name</label>
            <input
              type="text"
              className={style.input}
              placeholder="Your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className={style.form_group}>
            <label className={style.label}>Email</label>
            <input
              type="email"
              className={style.input}
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={style.form_group}>
            <label className={style.label}>Username</label>
            <input
              type="text"
              className={style.input}
              placeholder="choose a username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className={style.form_group}>
            <label className={style.label}>Password</label>
            <input
              type="password"
              className={style.input}
              placeholder="create a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p className={style.footer_text}>
              At least 6 chars, 1 uppercase, 1 lowercase, 1 number.
            </p>
          </div>

          <button type="submit" className={style.submit_btn} disabled={loading}>
            {loading ? "Creating account..." : "Register"}
          </button>
        </form>

        <p className={style.footer_text}>
          Already have an account?{" "}
          <a href="/login" className={style.login_link}>
            Login here
          </a>
        </p>
      </div>
    </div>
    </Section>
  );
}

export default Register;
