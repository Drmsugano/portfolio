import Inicio from "@/components/Inicio";
import Nav from "@/components/Nav";
import Sobre from "@/components/Sobre";

export default function Home() {
  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <header>
        <Nav />
      </header>
      <main>
        <Inicio />
        <Sobre />
      </main>
      <footer>
        <div className="bg-black relative">
          <h1>Fim</h1>
        </div>
      </footer>
    </div>
  );
}