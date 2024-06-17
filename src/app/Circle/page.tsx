import Image from "next/image";

export default function page() {
  return (
    <div className="w-full h-screen">
      <Image src={"/Group.svg"} alt="webwizcircle" fill={true}/>
    </div>
  );
}