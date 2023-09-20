import React from "react";
import { UserButton } from "@clerk/nextjs";
import ThemeSwitcher from "./ThemeSwitcher";
import Logo from "./Logo";

export default function NavBar() {
  return (
    <nav>
      <Logo />
      <div>
        <UserButton afterSignOutUrl="/" />
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
