import { getHomePageData } from "@/lib/getHomePageData";
import { Providers } from "./components/provider";
import HomeBanner from "./components/HomeBanner";
import LookingForMBBS from "./components/LookingForMBBS";
import CountryList from "./components/CountryList";
import OurServices from "./components/OurServices";
import Testinomials from "./components/Testinomials";
import Whyus from "./components/Whyus";
export default async function LandingPage() {
  const homePageData = await getHomePageData();
  let sliderData =
    homePageData !== undefined &&
    homePageData.result.find((item: any) => item.title === "Home Page Slider");
  let testimonials =
    homePageData !== undefined &&
    homePageData.result.find((item: any) => item.title === "Testimonials");

  return (
    <Providers>
      <HomeBanner sliderData={sliderData} />
      <LookingForMBBS />
      <OurServices />
      <CountryList />
      <Whyus />
      <Testinomials testinomials={testimonials} />
    </Providers>
  );
}
