import React, { useState } from "react";

type Role = "TOURIST" | "GUIDE" | "ADMIN";

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<Role>("TOURIST");

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");
    try {
      const res = await fetch("http://localhost:4000/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, username, email, password, role }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.message || "Registration failed! Please try again.");
        setLoading(false);
        return;
      }
      setSuccessMsg("Registration successful! You can now log in.");
      //   setName("");
      //   setUsername("");
      //   setEmail("");
      //   setPassword("");
      //   setRole("TOURIST");

      setTimeout(() => {
        window.location.href = "/login";
      }, 1000);
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
   <div className="form-section" >
      
        <div className="form-card">
          <h2 className="text-2xl text-black font-semibold text-center mb-4">
            Create Account
          </h2>
          <p className="text-sm text-gray-600 text-center mb-6">
            Fill in your details to create an account
          </p>

          {errorMsg && (
            <p className="text-red-500 text-sm text-center mb-4">{errorMsg}</p>
          )}

          {successMsg && (
            <p className="text-green-600 text-sm text-center mb-4">
              {successMsg}
            </p>
          )}

          <form className="space-y-4" onSubmit={submitHandler}>
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Username</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="choose a username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="create a strong password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                At least 6 chars, 1 uppercase, 1 lowercase, 1 number.
              </p>
            </div>

            <div>
              <label className="block text-sm mb-1">User Type</label>
              <select
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-white"
                value={role}
                onChange={(e) =>
                  setRole(e.target.value as "TOURIST" | "GUIDE" | "ADMIN")
                }
              >
                <option value="TOURIST">Tourist</option>
                <option value="GUIDE">Tour guide</option>
                <option value="ADMIN">Admin</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">
                Are you seaching for a tour or providing tours?
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded"
              disabled={loading}
            >
              {loading ? "Creating account..." : "Register"}
            </button>
          </form>
          <p className="text-center text-sm mt-4 text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 underline">
              Login here
            </a>
          </p>
        </div>
      </div>
  
  );
};

export default Register;
