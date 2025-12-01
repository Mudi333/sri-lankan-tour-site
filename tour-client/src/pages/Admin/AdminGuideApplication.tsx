// src/pages/AdminGuideApplications.tsx
import React, { useEffect, useState } from "react";
import styles from "../GuideApply.module.css";

type GuideApp = {
  id: string;
  fullName: string;
  email: string;
  phone?: string | null;
  languages?: string[] | null;
  message?: string | null;
  status: "PENDING" | "APPROVED" | "REJECTED";
};

const AdminGuideApplications: React.FC = () => {
  const [apps, setApps] = useState<GuideApp[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchApps = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_HOST}/guides/applications`, {
        headers: {
          "Content-Type": "application/json",
          // IMPORTANT: here you should add admin token later:
          // Authorization: `Bearer ${auth.token}`,
        },
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.msg || "Failed to load applications");
        return;
      }

      const data = await res.json();
      setApps(data.applications || []);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Network error");
    }
  };

  useEffect(() => {
    fetchApps();
  }, []);

  const updateStatus = async (id: string, action: "approve" | "reject") => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_HOST}/guides/applications/${id}/${action}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${auth.token}`,
          },
        }
      );

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.msg || "Failed to update status");
        return;
      }

      await fetchApps();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Network error");
    }
  };

  return (
    <section className={styles.guideApply}>
      <div className={styles.guideApplyInner}>
        <h1 className={styles.title}>Guide Applications (Admin)</h1>
        {error && <p className={styles.error}>{error}</p>}

        {apps.length === 0 && !error && <p>No applications yet.</p>}

        <div className={styles.appList}>
          {apps.map((app) => (
            <div key={app.id} className={styles.appCard}>
              <h2>{app.fullName}</h2>
              <p>
                <strong>Email:</strong> {app.email}
              </p>
              {app.phone && (
                <p>
                  <strong>Phone:</strong> {app.phone}
                </p>
              )}
              {app.languages && app.languages.length > 0 && (
                <p>
                  <strong>Languages:</strong> {app.languages.join(", ")}
                </p>
              )}
              {app.message && (
                <p>
                  <strong>Message:</strong> {app.message}
                </p>
              )}
              <p>
                <strong>Status:</strong> {app.status}
              </p>

              {app.status === "PENDING" && (
                <div className={styles.appActions}>
                  <button
                    className={`${styles.approveBtn}`}
                    onClick={() => updateStatus(app.id, "approve")}
                  >
                    Approve
                  </button>
                  <button
                    className={`${styles.rejectBtn}`}
                    onClick={() => updateStatus(app.id, "reject")}
                  >
                    Reject
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdminGuideApplications;
