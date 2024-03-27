"use client";
import React, { useState } from "react";
import Cards from "./Cards";

const BlogsTab = ({ blogContent, tabDetail }: any) => {
  const [blogDetailsForCurrentTab, setBlogDetailsForCurrentTab] =
    useState(blogContent);

  return (
    <div className="flex-1 w-full grid-cols-3">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {blogDetailsForCurrentTab.map((blog: any, index: number) => (
              <Cards blog={blog} key={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogsTab;
