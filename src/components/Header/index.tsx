import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Header = () => {
  const router = useRouter();

  const handlePush = () => {
    router.push("/");
  };

  return (
    <header className="flex w-full items-center justify-center px-[24px] py-[15px] lg:px-[240px] lg:py-[25px] bg-black">
      <div onClick={handlePush}>
        <Image
          src="/imgs/logo-transparent.png"
          width={180}
          height={180}
          alt="logo"
          className="cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Header;
