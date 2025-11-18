// const res = await fetch("http://localhost:4000/users/login", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({ username, password }),
// });



import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {Card,CardHeader,CardContent, CardTitle } from "@/components/ui/card";



export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

    const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("http://localhost:4000/users/login", {
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

         window.location.href = "/";
    } catch (err: any) {
      setError(err.message || "An error occurred. Please try again.");
    }

      setLoading(false);
    }

    return 

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <Card className="w-full max-w-md shadow-xl p-4">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-semibold">
            Sign In
          </CardTitle>
        </CardHeader>

        <CardContent>
          {error && (
            <p className="text-red-500 text-center mb-4">{error}</p>
          )}

          <form className="flex flex-col gap-4" onSubmit={submitHandler}>
            <div>
              <label className="text-sm">Username</label>
              <Input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm">Password</label>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button className="w-full mt-2" disabled={loading}>
              {loading ? "Signing in..." : "Login"}
            </Button>
          </form>

          <p className="text-center text-sm mt-4">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-600 underline">
              Register here
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

