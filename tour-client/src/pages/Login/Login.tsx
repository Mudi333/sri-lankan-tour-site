import React, { useState } from "react";
import style from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { Section } from "@/components/Layout/Section";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_HOST}/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed! Please try again.");
        setLoading(false);
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("expiresAt", data.expiresAt);
      localStorage.setItem("user", JSON.stringify(data.user));

      alert("Login successful!");
      // window.location.href = "/";
      navigate("/tours");
    } catch (err: unknown) {
      setError(
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
        <h1 className={style.title}>Sign In</h1>
        <p className={style.subtitle}>
          Please enter your username and password.
        </p>

        {error && <p className={style.error_msg}>{error}</p>}

        <form onSubmit={submitHandler} className={style.form}>
          <div className={style.form_group}>
            <label className={style.label}>Username</label>
            <input
              type="text"
              className={style.input}
              placeholder="Your username"
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
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" disabled={loading} className={style.submit_btn}>
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>

        <p className={style.footer_text}>
          Don’t have an account?{" "}
          <a href="/register" className={style.link}>
            Register here
          </a>
        </p>
      </div>
    </div>
    </Section>
  );
};

export default Login;
