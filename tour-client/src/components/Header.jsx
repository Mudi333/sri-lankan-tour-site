import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="p-4 shadow-smflex justify-between items-center flex px-5">
      <img src="/logo.svg" alt="logo" />
      <div>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
