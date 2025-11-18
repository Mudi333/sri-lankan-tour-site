import React,{ useState } from "react";


const Login: React.FC = () => {
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
    }finally {
        setLoading(false);
    }
};


return ( 
    <div className="min-h-screen flex items-center justify-center bg-gray ">
        <div className ="w-full max-w-md bg-white rounded-lg shadow p-6">
            <h1 className="text-2xl font-semibold text-center mb-4">Sign In</h1>
            <p>Please enter your username and password.</p>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={submitHandler} className="space-y-4">
                <div>
                    <label className="block text-sm mb-1">Username</label>
                    <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2 "
                placeholder="Your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
                </div>
                <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded text-sm disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Login"}
          </button>


                    </form>

 <p className="text-center text-sm mt-4 text-gray-600">
          Don&apos;t have an account?{" "}
          <a href="/register" className="text-blue-600 underline">
            Register here
          </a>
        </p>


                <div>
        </div>

    </div>
       </div>
       );
};

export default Login;