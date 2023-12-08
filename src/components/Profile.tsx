import Image from "next/image";
import profile from "~/assets/profile.png";

export default function Profile() {
  return (
    <Image
      src={profile}
      alt="profile"
      width={300}
      height={300}
      className="object-cover mx-auto aspect-square rounded-full"
    />
  );
}
