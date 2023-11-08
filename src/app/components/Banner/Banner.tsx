"use client";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";



import Text from "../Text/Text";
import Loader from "@/app/loader";
import { dataGet } from "@/app/utils/service";
export default function Banner() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [doctors, setDoctors] = useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await dataGet("doctors");
        setDoctors(data);
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
    <div className="grid grid-cols-12 items-center py-8">
      <div className="col-span-12 lg:col-span-7">
        <div className="w-full lg:w-11/12">
          <h1 className="text-4xl lg:text-6xl font-bold">
            Free Personalized Online Mental Health Care
          </h1>
          <div className="my-4">
            <Text title={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid eveniet ab totam sit labore, commodi at perferendis officia, nulla veritatis iure necessitatibus? A modi officia commodi mototam cupiditate magni quaerat deleniti.'}/>
          </div>
          <div className="grid grid-cols-12 items-center gap-4 rounded-xl">
            <div className="col-span-12 lg:col-span-5">
              <Select
                size="sm"
                label="Select a Doctor"
              >
                {doctors?.length>0 && doctors?.map((item: any, i: number) => {
                  return (
                    <SelectItem key={item.value||i} value={item.value}>
                      {item.name}
                    </SelectItem>
                  );
                })}
              </Select>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <Input
                size={"sm"}
                type="text"
                label="Living Area"
              />
            </div>
            <div className="col-span-12 lg:col-span-2">
              <Button size="lg" color="primary" className="w-full">Button</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block col-span-12 lg:col-span-5">
        <div className="p-8">
          <Image
            width={500}
            height={500}
            alt="banner"
            src={require('./banner.png')}
          />
        </div>
      </div>
    </div>
  );
}
