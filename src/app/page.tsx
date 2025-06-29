import Footer from "@/components/Footer";
import InfoPanel from "@/components/InfoPanel";
import Navbar from "@/components/Navbar";
import Scene from "@/components/Scene";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex h-screen overflow-hidden">
        <div className="w-1/3 sticky h-full border-r-1 object-cover">
          <Scene />
        </div>
        <div className="w-2/3 h-full overflow-y-auto bg-white">
          <InfoPanel />
        </div>
      </main>
      <Footer />
    </>
  );
}
