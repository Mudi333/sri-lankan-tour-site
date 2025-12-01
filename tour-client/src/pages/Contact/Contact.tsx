import React, { FormEvent } from "react";
import styles from "./Contact.module.css";

const Contact: React.FC = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // You can plug in your API / email service here
    alert("Thank you for reaching out! We’ll get back to you shortly.");
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.subtitle}>
            Planning your dream trip to Sri Lanka or have a question about our tours? 
            Send us a message and our team will be happy to help.
          </p>
        </header>

        <main className={styles.main}>
          <section className={styles.infoCard}>
            <h2 className={styles.sectionTitle}>Get in Touch</h2>
            <p className={styles.text}>
              We’re here to support you from the first idea until the end of your journey.
            </p>

            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <h3>Address</h3>
                <p>No. 221 Galle Road, Colombo 03, Sri Lanka</p>
              </div>

              <div className={styles.infoItem}>
                <h3>Phone</h3>
                <p>+94 71 234 5678</p>
              </div>

              <div className={styles.infoItem}>
                <h3>Email</h3>
                <p>info@srilankantoursite.com</p>
              </div>

              <div className={styles.infoItem}>
                <h3>Opening Hours</h3>
                <p>
                  Monday – Sunday: 8:00 AM – 8:00 PM <br />
                  (GMT +5:30)
                </p>
              </div>
            </div>

            <div className={styles.highlights}>
              <p>✔ Personalized travel planning</p>
              <p>✔ Expert local knowledge</p>
              <p>✔ Flexible and custom itineraries</p>
              <p>✔ 24/7 support during your tour</p>
            </div>
          </section>

          <section className={styles.formCard}>
            <h2 className={styles.sectionTitle}>Send Us a Message</h2>
            <p className={styles.text}>
              Tell us a bit about your plans or questions. We usually respond within 24 hours.
            </p>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="example@email.com"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number (optional)</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+94 ..."
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your travel plans, dates, destinations or questions..."
                  required
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>

              <p className={styles.smallNote}>
                By submitting this form, you agree that we may contact you about your request.
              </p>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Contact;
