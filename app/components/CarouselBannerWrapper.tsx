// "use client";
// import { Carousel } from "@material-tailwind/react";
// import { urlFor } from "@/lib/client";
// import Image from "next/image";

// export default function CarouselTransition({ carouselData }: any) {
//   return (
//     <Carousel
//       transition={{ duration: 2 }}
//       autoplay={true}
//       autoplayDelay={5000}
//       loop={true}
//       className=""
//       placeholder="Desktop-Slider"
//     >
//       {carouselData.map((obj: { sliderImage: any }, index: any) => (
//         <Image
//           src={urlFor(obj.sliderImage).url()}
//           alt="slider-image"
//           height={1000}
//           width={2000}
//           key={index}
//           className="h-full w-full object-cover"
//         />
//       ))}
//     </Carousel>
//   );
// }
"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { urlFor } from "@/lib/client";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import React from "react";

const CarouselBannerWrapper = ({ carouselData }: any) => {
  return (
    <div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        {/* <CarouselPrevious /> */}
        <CarouselContent className="mt-5">
          {carouselData.map((obj: { sliderImage: any }, index: any) => (
            <CarouselItem>
              <Image
                src={urlFor(obj.sliderImage).url()}
                alt="slider-image"
                height={1000}
                width={2000}
                key={index}
                className="h-full w-full object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute left-16 top-1/2">
          <CarouselPrevious />
        </div>
        <div className="absolute right-16 top-1/2">
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselBannerWrapper;
