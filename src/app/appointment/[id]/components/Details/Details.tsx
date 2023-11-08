"use client";
import Text from "@/app/components/Text/Text";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";

export default function Details({ data }: any) {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className="py-8">
      {!show && (
        <div className="flex items-center justify-center">
          <Button onClick={() => setShow(!show)} size="sm" variant="bordered">
            View more
          </Button>
        </div>
      )}
      {show && (
        <div className="my-8">
          <Text title={data.description}/>
        </div>
      )}
      {show && (
        <div className="flex items-center justify-center">
          <Button onClick={() => setShow(!show)} size="sm" variant="bordered">
            View less
          </Button>
        </div>
      )}
    </div>
  );
}
