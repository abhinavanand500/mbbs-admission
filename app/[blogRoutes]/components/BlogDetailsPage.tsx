import React from "react";

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
      <div className="sm:container py-12 mx-auto w-full items-center justify-center">
        {/* / */}
      </div>
    </div>
  );
};

export default BlogDetailsPage;
