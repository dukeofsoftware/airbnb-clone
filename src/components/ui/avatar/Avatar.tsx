import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      height={30}
      width={30}
      alt="Avatar"
      className="rounded-full"
      src={"/images/placeholder.jpg"}
    />
  );
};

export default Avatar;
