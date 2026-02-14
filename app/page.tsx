import Navbar from "@/components/Navbar";
import Home from "@/sections/Home";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
