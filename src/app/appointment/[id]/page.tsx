import Text from "@/app/components/Text/Text";

import { dataDetails } from "@/app/utils/service";
import { Button, Divider, Image } from "@nextui-org/react";
import { Metadata } from "next";
import React from "react";
import Details from "./components/Details/Details";
import MyModal from "./components/MyModal/MyModal";
export const metadata: Metadata = {
  title: "ACME || Doctor Details",
  description: "Dr.Rakibul Islam",
};
export default async function DoctorDetails({ params }: any) {
  const id = params?.id;
  const data = await dataDetails(`doctors/${id}`);

  return (
    <div className="container">
      <div className="grid grid-cols-2 gap-4 py-8">
        <Image isBlurred src={data.img} height={600} width={500} />
        <div className="p-4">
          <h1 className="text-4xl font-semibold">{data.name}</h1>
          <p className="text-gray-400 text-xs mb-4">
            {data.speciality} | {data.rating} | {data.degree}
          </p>
          <Text title={data.description} />
          <div className="max-w-md my-3">
            <div className="space-y-1">
              <h4 className="text-medium font-medium">Overall Records</h4>
             
            </div>
            <Divider className="my-2" />
            <div className="flex h-5 items-center space-x-4 text-small mb-8">
              <div>{data.patients} Patient Visited</div>
              <Divider orientation="vertical" />
              <div>{data.surgery} Surgery</div>
              <Divider orientation="vertical" />
              <div>{data.reviewer} Review</div>
            </div>
          </div>
           
          
          <MyModal/>

          
        </div>
      </div>
      <Details data={data} />
    </div>
  );
}
