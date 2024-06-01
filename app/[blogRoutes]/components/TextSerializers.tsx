import { urlFor } from "@/lib/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { Children } from "react";

interface TextSerializerProps {
  data: any;
  className: string;
}

function TextSerializer({ data, className }: TextSerializerProps) {
  const addId = (children: string) => {
    const str = children;
    const strUnderscores =
      str.length > 0 &&
      str
        .toString()
        .replace(/[\s0-9-()&:?]/g, "_")
        .toLowerCase();
    return strUnderscores;
  };

  const serializers = {
    types: {
      image: ({ value }: { value: any }) => (
        <div className="flex justify-center my-10">
          <Image
            src={urlFor(value).url()}
            height={500}
            width={800}
            className="block"
            alt="serializers"
          />
        </div>
      ),
      code: ({ value }: { value: any }) => (
        <div
          className="overflow-x-auto"
          dangerouslySetInnerHTML={{ __html: value.code }}
        />
      ),
    },
    block: {
      p: ({ children }: { children: any }) => <p>{children}</p>,
      h1: ({ children }: { children: any }) => (
        <h1 className="text-black text-4xl font-bold my-8" id={addId(children)}>
          {children}
        </h1>
      ),
      h2: ({ children }: { children: any }) => (
        <h2
          className="text-black text-3xl font-bold mt-5 mb-2"
          id={addId(children)}
        >
          {children}
        </h2>
      ),
      h3: ({ children }: { children: any }) => (
        <h3
          className="text-black text-2xl font-bold mt-5 mb-2"
          id={addId(children)}
        >
          {children}
        </h3>
      ),
      h4: ({ children }: { children: any }) => (
        <h4
          className="text-black text-xl font-bold mt-5 mb-2"
          id={addId(children)}
        >
          {children}
        </h4>
      ),
      h5: ({ children }: { children: any }) => (
        <h5
          className="text-black text-lg font-bold mt-5 mb-2"
          id={addId(children)}
        >
          {children}
        </h5>
      ),
      h6: ({ children }: { children: any }) => (
        <h6
          className="text-black text-base font-bold mt-5 mb-2"
          id={addId(children)}
        >
          {children}
        </h6>
      ),
      blockquote: ({ children }: { children: any }) => (
        <blockquote className="border-l-4 pl-4">{children}</blockquote>
      ),
    },
    list: {
      bullet: ({ children }: { children: any }) => (
        <ul className="list-disc">{children}</ul>
      ),
      number: ({ children }: { children: any }) => (
        <ol className="list-disc">{children}</ol>
      ),
    },
    listItem: {
      bullet: ({ children }: { children: any }) => (
        <li className="pb-2 list-disc">{children}</li>
      ),
    },
  };

  return <PortableText value={data} components={serializers} />;
}

export default TextSerializer;
