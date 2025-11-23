import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="Header-left"> <img src="/logo.svg" className="header-logo" alt="logo" />
      <span className="site-logo">Serendip Tours</span>
      </div>

      <Link to="/login" className="login-button">
      Login
      </Link>

    </header>
  );
};

export default Header;





// ------------------------------

// import React from "react";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
// import "./Header.css";

// function Header() {
//   return (
//     <div className="p-4 shadow-smflex justify-between items-center flex px-5">
//       <img src="/logo.svg" alt="logo" />
//       <div>
//         <Link to="/login">
//           <Button>Login</Button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Header;
// --------------------

// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
// import {getAuth,clearAuth, AuthUser} from "../utils/auth";

// export default function Header() {
//   const [user,setUser]=useState<AuthUser | null>(null);
// useEffect(()=>{
//   const authUser=getAuth();
//   setUser(auth?.user || null);
// },[]);

// const handleLogout=()=>{
//   clearAuth();
//   setUser(null);
//   alert("Logged out successfully");
//   window.location
// };
//   return (
//     <div className="p-4 shadow-sm flex justify-between items-center px-5 bg-white">  
//       <img src="/logo.svg" alt="logo" /></div>)}
  

