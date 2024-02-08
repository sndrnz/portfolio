import Image from "next/image";

export default function Profile() {
  return (
    <Image
      // src={profile}
      src={""}
      alt="profile"
      width={300}
      height={300}
      className="object-cover mx-auto aspect-square opacity-50 rounded-full"
    />
  );
}
