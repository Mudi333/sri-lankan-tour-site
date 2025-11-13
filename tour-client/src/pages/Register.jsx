import { useState } from "react";
import { NavLink } from "react-router-dom";

function Register() {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();
    // send request from FE to BE
    const res = await fetch("http://localhost:5001/users/register", {
      method: "POST",
      body: JSON.stringify({ fullname, username, password }),
    });
    if (res.ok) {
      const data = await res.json();
      alert(data.msg);
    } else {
      alert("Something is wrong!");
    }
  };
  return (
    <div className="text-center p-4 h-screen">
      <h2 className="text-2xl">Register Page</h2>
      <p className="text-sm">Please enter your credentials here to create an account!</p>
      <form
        className="flex flex-col items-center gap-y-2 sm:w-2/3 mx-auto mt-12"
        onSubmit={submitHandler}
      >
        <input
          type="text"
          name="fullname"
          placeholder="Fullname"
          className="border border-gray-300 w-4/5 h-8 ps-2"
          onChange={(e) => setFullname(e.target.value)}
          value={fullname}
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="border border-gray-300 w-4/5 h-8 ps-2"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border border-gray-300 w-4/5 h-8 ps-2"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input
          type="submit"
          value="Register"
          className="border border-gray-300 w-4/5 h-8 bg-blue-400 text-white rounded"
        />
      </form>

      <p className="text-sm w-46 mx-auto mt-6">
        If you don't have an account please
        <NavLink to="/register" className="text-blue-500">
          {" "}
          register
        </NavLink>{" "}
        here!
      </p>
    </div>
  );
}

export default Register;