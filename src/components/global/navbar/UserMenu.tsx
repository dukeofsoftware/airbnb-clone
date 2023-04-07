"use client";
import { Avatar } from "@/components/ui";
import useRegisterModal from "@/hooks/useRegisterModal";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MenuItem from "./MenuItem";
const UserMenu = () => {
  const registerModal = useRegisterModal();
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
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="w-[40vw overflow-hdden absolute right-0 top-12 rounded-xl bg-white text-sm shadow-md md:w-3/4">
          <div className="flex cursor-pointer flex-col">
            <>
              <MenuItem onClick={registerModal.onOpen} label="Login" />
              <MenuItem onClick={() => {}} label="Sign up" />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
