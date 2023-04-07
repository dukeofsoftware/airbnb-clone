"use client";
import { Container } from "@/components/global";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <header className="fixed w-full bg-white shadow-sm">
      <div className="border-b py-4 ">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Navbar;
