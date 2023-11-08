"use client"
import GridLayout from "../layouts/GridLayout";
import React, { useState } from "react";
import Text from "../Text/Text";
import { Image } from "@nextui-org/react";
import { processes } from "@/app/utils/staticData";

export default function Process() {
  const [active,setActive] = useState<number>(1)
  const [activeImage, setActiveImage] = useState(
    "https://static.tvtropes.org/pmwiki/pub/images/screenshot_2018_10_28_operation_mr_bean_funny_clips_classic_mr_bean_youtube.jpg"
  );

  const handleSectionClick = (id: any) => {
    const sectionImageMap: any = {
      1: "https://static.tvtropes.org/pmwiki/pub/images/screenshot_2018_10_28_operation_mr_bean_funny_clips_classic_mr_bean_youtube.jpg",
      2: "https://www.shutterstock.com/shutterstock/videos/1063754383/thumb/1.jpg?ip=x480",
      3: "https://www.shutterstock.com/image-photo/doctor-patient-discussing-something-while-260nw-736555114.jpg",
      4: "https://www.shutterstock.com/image-photo/doctor-measures-man-waist-260nw-1648282072.jpg",
    };

    setActive(id);
    setActiveImage(sectionImageMap[id]);
  };
  return (
    <div className="my-32 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap4">
        <div className="w-full lg:w-9/12">
          <h1 className="text-3xl font-semibold text-gray-700">
            Allow me to explain the functioning process
          </h1>
        </div>
        <div className="w-full lg:w-9/12 ml-auto">
          <Text
            title={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem repellendus est, ad odit molestias asperiores nulla iusto. Voluptatibus ipsum similique adipisci ducimus veritatis eem, a r maiores, reum?"
            }
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
        <div>
            {
              processes.map(({id,title,details},i:number)=>{
                return <div key={id || i} onClick={() => handleSectionClick(id)} className={`py-4 cursor-pointer pl-4 border-l-4 ${id===active ? "border-blue-500" : "border-gray-300"}`}>
                  <h1 className="text-xl">{title}</h1>
                  <Text title={details}/>
                </div>
              })
            }
        </div>
        <div>
          <Image
            isZoomed
            alt="banner"
            src={activeImage}
            height={500}
            width={1000}
          />
        </div>
      </div>
    </div>
  );
}
