import Image from "next/image";
import "../styles/pages/hero.scss";
import "@/styles/utilities/miscs.scss";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
    </main>
  );
}
