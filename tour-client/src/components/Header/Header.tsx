import React from "react";
import styles from './Header.module.css';
import { Link } from "react-router-dom";



function Header()  {
  return (
    <header className={styles.header}>
      <div className={styles.Header_left}> <img src="/logo.svg" className={styles.header_logo} alt="logo" />
      <span className={styles.site_logo}>Serendip Tours</span>
      </div>
<div className={styles.log_buttons_container}>

   <Link to="/login" className={styles.login_buttons}>
      Login
      </Link>
       <Link to="/register" className={styles.login_buttons}>
      Register
      </Link>

</div>
   

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
  

