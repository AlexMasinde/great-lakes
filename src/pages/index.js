import Footer from "@/components/footer";
import HomeLakes from "@/components/homeLakes";
import HomePageHeader from "@/components/homePageHeader";
import HomeAbout from "@/components/homeAbout";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <main className={`${poppins.className}`}>
      <HomePageHeader />
      <HomeAbout />
      <HomeLakes />
      <Footer />
    </main>
  );
}
