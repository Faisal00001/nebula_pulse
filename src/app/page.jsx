import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";
import LatestPosts from "@/components/LatestPosts";
import OurTeam from "@/components/OurTeam";
import PopularService from "@/components/PopularService";
import Portfolio from "@/components/Portfolio";


export default function Home() {
  return (
    <main>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <PopularService></PopularService>
      <Portfolio></Portfolio>
      <OurTeam></OurTeam>
      <LatestPosts></LatestPosts>
    </main>
  );
}
