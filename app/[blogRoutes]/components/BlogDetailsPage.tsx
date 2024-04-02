import Image from "next/image";
import React from "react";
import { urlFor } from "@/lib/client";
import TextSerializer from "./TextSerializers";

const BlogDetailsPage = (props: any) => {
  console.log("tttt", props);
  return (
    <div>
      <section className="text-white body-font bg-indigo-600 bg-gradient-to-r">
        <div className="container py-12 mx-auto">
          <h1 className="text-4xl font-large font-extrabold title-font text-center text-white">
            {props?.blogDetailsContent?.data?.metaKeywords}
          </h1>
        </div>
      </section>
      <div className="container py-8 mx-auto w-full items-center justify-center text-justify sm:p-40">
        <Image
          src={urlFor(props?.blogDetailsContent?.data.bannerImage).url()}
          className="h-3/4 max-w-full object-fill"
          height={1000}
          width={10000}
          alt={props?.blogDetailsContent?.data?.title}
        />
        <TextSerializer
          data={props?.blogDetailsContent?.data?.pageContent}
          className="serializerTitle"
        />
      </div>
    </div>
  );
};

export default BlogDetailsPage;
