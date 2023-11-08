"use client";
import { dataGet } from "@/app/utils/service";
import React, { useEffect, useState } from "react";


import { Pagination } from "@nextui-org/react";

import BlogCard from "@/app/components/Blogs/BlogCard";
import Loader from "../../loader";

export default function BlogsContainer() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await dataGet("blogs");
          setBlogs(data);
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
          setIsLoading(false);
        }
      };
      fetchData();
    }, []);
    if (isLoading) {
      return <Loader />;
    }
  return (
    <div>
        <h1 className="font-bold text-2xl text-center">Our Popular Blogs</h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 my-4">
      {blogs.map((blog: any, i: number) => {
          return <BlogCard key={i} blog={blog} />;
        })}
      </div>
      {/* <div className="flex items-center justify-center my-8">
        <Pagination
          key={12}
          total={doctors?.length}
          initialPage={1}
          size={"sm"}
        />
      </div> */}
    </div>
  );
}
