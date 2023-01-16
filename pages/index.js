import Hero from "@/components/homepage/Hero";
import Navbar from "@/components/layouts/Navbar";
import Mission from "@/components/homepage/Mission";
import Footer from "@/components/layouts/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Mission />
      <Footer />
    </div>
  )
}
