import Hero from "@/components/homepage/Hero";
import Navbar from "@/components/layouts/Navbar";
import Mission from "@/components/homepage/Mission";
import Footer from "@/components/layouts/Footer";
import OfficeInfo from "@/components/layouts/OfficeInfo";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Mission />
      <OfficeInfo />
      <Footer />
    </div>
  )
}
