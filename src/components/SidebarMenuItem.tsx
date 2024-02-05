"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarMenuItem({
  title,
  subtitle,
  icon,
  path,
}: {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  path: string;
}) {
  const isActive = usePathname();
  return (
    <Link
      href={path}
      className={
        "w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150 " +
        (isActive === path ? "bg-blue-800 " : "")
      }
    >
      <div>
        {icon}
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
          />
        </svg> */}
      </div>
      <div className="flex flex-col">
        <span className="text-lg text-slate-300 font-bold leading-5">{title}</span>
        <span className="text-sm text-slate-500 hidden md:block">{subtitle}</span>
      </div>
    </Link>
  );
}
