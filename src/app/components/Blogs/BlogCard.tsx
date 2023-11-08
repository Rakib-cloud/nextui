import { Button, Image } from "@nextui-org/react";
import React from "react";
import Text from "../Text/Text";


export default function BlogCard({ blog }: any) {
  return (
    <div>
      <Image isBlurred src={blog.img} className="object-cover" />
      <div className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs text-gray-500">{blog.author}</span>
          <span className="text-xs text-gray-500">{blog.time}</span>
        </div>
        <h1 className="text-gray-800 mb-2">{blog.title.slice(0, 55)}</h1>
        <Text title={blog.details.slice(0, 120)} />
        <br />
        <Button variant="bordered">
          Learn more
        </Button>
      </div>
    </div>
  );
}
