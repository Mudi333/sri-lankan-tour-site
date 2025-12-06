import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import styles from "../../GuideApply.module.css";
import { Section } from "@/components/Layout/Section";

const LANG_OPTIONS = [
  "English",
  "Sinhala",
  "Tamil",
  "French",
  "German",
  "Spanish",
];

function GuideApplyForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [languages, setLanguages] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const toggleLanguage = (lang: string) => {
    //   const navigate = useNavigate();

    setLanguages((prev) =>
      prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang]
    );
  };

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_HOST}/guides/apply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          languages,
          message,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        console.log(data.msg)
        setError(data.msg || "something wetn wrong, Please try again.");
        return;
      }



      setSuccess("Your application has been submitted. Thank you!");

      setFullName("");
      setEmail("");
      setPhone("");
      setLanguages([]);
      setMessage("");
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "Network error");
      console.log(error)
    }
  };

  return (
    <Section>
    <section className={styles.guideApply}>
      <div className={styles.guideApplyInner}>
        <h1 className={styles.title}>Guide Application</h1>
        <p className={styles.lead}>
          Please fill in this short form to apply as a guide. Our team will
          review your information and get back to you.
        </p>
        LANG_OPTIONS
        {error && <p className={styles.error}>{error}</p>}
        {success && <p className={styles.success}>{success}</p>}
        <form className={styles.form} onSubmit={submitHandler}>
          <label className={styles.formLabel}>
            Full Name *
            <input
              className={styles.input}
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </label>

          <label className={styles.formLabel}>
            Email *
            <input
              className={styles.input}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label className={styles.formLabel}>
            Phone
            <input
              className={styles.input}
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>

          <div className={styles.formLabel}>
            <span>Languages you speak</span>
            <div className={styles.checkboxGroup}>
              {LANG_OPTIONS.map((lang) => (
                <label key={lang}>
                  <input
                    type="checkbox"
                    checked={languages.includes(lang)}
                    onChange={() => toggleLanguage(lang)}
                  />{" "}
                  {lang}
                </label>
              ))}
            </div>
          </div>

          <label className={styles.formLabel}>
            Short message
            <textarea
              className={styles.textarea}
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us briefly about your experience as a guide..."
            />
          </label>

          <button type="submit" className={styles.primaryBtn}>
            Submit Application
          </button>
        </form>
      </div>
    </section>
    </Section>
  );
}

export default GuideApplyForm;
