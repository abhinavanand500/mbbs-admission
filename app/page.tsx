import { getHomePageData } from "@/lib/getHomePageData";
import { Providers } from "./components/provider";
import CarouselBannerWrapper from "./components/CarouselBannerWrapper";
import LookingForMBBS from "./components/LookingForMBBS";
import OurServices from "./components/OurServices";
export default async function LandingPage() {
  const homePageData = await getHomePageData();
  return (
    <Providers>
      <CarouselBannerWrapper carouselData={homePageData.result[0].slider} />
      <LookingForMBBS />
      <OurServices />
    </Providers>
  );
}
