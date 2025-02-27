import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/clerk-react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-3 px-5 flex justify-between shadow-md">
      <img src="/logo.svg" width={40} height={40} />
      {isSignedIn ? (
        <div className="flex gap-2 items-center">
          <Link to={"/dashboard"}>
            <Button varient="outline">Dashboard</Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <Link to={"/auth/sign-in"}>
          <Button>Get Started</Button>
        </Link>
      )}
    </div>
  );
};

export default Header;
