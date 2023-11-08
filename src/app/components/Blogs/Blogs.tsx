"use client"
import Loader from "@/app/loader";
import { dataGet } from "@/app/utils/service";
import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";


export default function Blogs() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [blogs, setBlogs] = useState<any>([]);
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
    <section className="my-32">
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-gray-700">
          Popular News and Blogs
        </h1>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {blogs?.length>0 && blogs.map((blog: any, i: number) => {
          return <BlogCard key={i} blog={blog} />;
        })}
      </div>
    </section>
  );
}
