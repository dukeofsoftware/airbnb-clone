"use client";
import { Container } from "@/components/global";
import { SafeUser } from "@/types/";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <header className="fixed w-full bg-white shadow-sm">
      <div className="border-b py-4 ">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Navbar;
