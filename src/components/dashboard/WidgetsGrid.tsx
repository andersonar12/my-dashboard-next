"use client";
import { IoCartOutline } from "react-icons/io5";
import { SimpleWidget } from "./SimpleWidget";
import { useAppSelector } from "@/store";

export default function WidgetsGrid() {
  const counter = useAppSelector((state) => state.counter.counter);

  return (
    <div className="flex flex-wrap justify-center p-2 mt-2">
      <SimpleWidget
        title={counter}
        subtitle="Productos en el carrito"
        icon={<IoCartOutline size={50} className="text-blue-500" />}
        label={"Carrito de Compras"}
        href="/dashboard/counter"
      />
      {/* <SimpleWidget /> */}
    </div>
  );
}
