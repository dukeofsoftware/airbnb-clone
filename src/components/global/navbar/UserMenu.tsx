"use client";
import { Avatar } from "@/components/ui";
import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import { SafeUser } from "@/types/";
import { signOut } from "next-auth/react";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MenuItem from "./MenuItem";
interface UserMenuProps {
  currentUser?: SafeUser | null;
}
const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((value) => !value);
  };
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="hidden cursor-pointer rounded-full px-4 py-3 text-sm font-semibold hover:bg-neutral-100 md:block"
        >
          {" "}
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className="  flex cursor-pointer flex-row items-center  gap-3  rounded-full  border-[1px]  border-neutral-200  p-4  transition  hover:shadow-md  md:px-2  md:py-1"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="w-[40vw overflow-hdden absolute right-0 top-12 rounded-xl bg-white text-sm shadow-md md:w-3/4">
          <div className="flex cursor-pointer flex-col">
            {currentUser ? (
              <>
                <MenuItem onClick={() => {}} label="My trips" />
                <MenuItem onClick={() => {}} label="My favorites" />
                <MenuItem onClick={() => {}} label="My properties" />

                <MenuItem onClick={() => {}} label="Airbnb my home" />
                <hr />
                <MenuItem onClick={signOut} label="Sign out" />
              </>
            ) : (
              <>
                <MenuItem onClick={registerModal.onOpen} label="Register" />
                <MenuItem onClick={loginModal.onOpen} label="Login" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
