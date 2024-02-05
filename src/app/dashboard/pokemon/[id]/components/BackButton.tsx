"use client";
import { useRouter } from "next/navigation";
import { IoChevronBackSharp } from "react-icons/io5";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      className="flex items-center  none rounded-lg bg-blue-800 py-2 px-5 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-800/20 transition-all hover:shadow-lg hover:shadow-blue-800/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      onClick={() => router.back()}
    >
      <IoChevronBackSharp size={20} className="mr-2" />
      Volver
    </button>
  );
}
