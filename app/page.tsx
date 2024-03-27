import { getHomePageData } from "@/lib/getHomePageData";
import { Providers } from "./components/provider";
import CarouselBannerWrapper from "./components/CarouselBannerWrapper";
import LookingForMBBS from "./components/LookingForMBBS";
import OurServices from "./components/OurServices";
import Testinomials from "./components/Testinomials";
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
      <CarouselBannerWrapper carouselData={sliderData.slider} />
      <LookingForMBBS />
      <OurServices />
      <Testinomials testinomials={testimonials} />
    </Providers>
  );
}
