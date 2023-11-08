"use client";
import { LiaAngleRightSolid } from "react-icons/lia";
import {
  Link,
} from "@nextui-org/react";
import React from "react";
import Text from "../../Text/Text";
export default function MyCard({ data, i }: any) {
  const colors = ["bg-yellow-100", "bg-blue-100", "bg-green-100", "bg-red-100"];
  return (
    <div className={`rounded shadow p-2 ${colors[i]}`}>
      <h3 className="font-semibold text-base">
        {data.title}
      </h3>
      <div className="my-2">
        <Text title={data.description.slice(0,85)}/>
      </div>
      <div className="flex items-center justify-between">
        <Link className="text-sm" href="https://github.com/nextui-org/nextui">Explore more</Link>
        <LiaAngleRightSolid />
      </div>
    </div>
  );
}
