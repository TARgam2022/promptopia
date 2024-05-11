import Image from "next/image";
import "../styles/pages/hero.scss";
import "@/styles/utilities/_miscs.scss";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="container">
      <h1>Promptopia</h1>
      <p>Create and see prompts for AI engines</p>
      <button className="primary-btn">Start Creating</button>
    </div>
  );
}
