"use client";

import { useRouter } from "next/navigation";

type ButtonProps = {
  title: string;
  dataAos?: string;
  dataAosDelay?: string;
  path: string;
};

export default function Button({
  title,
  dataAos,
  dataAosDelay,
  path,
}: ButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(path);
  };
  return (
    <button
      className="bg-white rounded-full border border-blue-900 hover:bg-blue-900 hover:text-white px-5 py-2 translate-y-full duration-300"
      data-aos={dataAos}
      data-aos-delay={dataAosDelay}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}
