import CartCounter from "./components/CartCounter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Counter Page",
  description: "Counter Page",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <h1>Productos en el carrito</h1>
      <CartCounter value={20} />
    </div>
  );
}
