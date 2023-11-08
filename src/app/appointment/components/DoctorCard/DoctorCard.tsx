import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

interface Doctor {
  id: number;
  name: string;
  speciality: string;
  degree: string;
}

// interface DoctorCardProps {
//   data: Doctor;
// }

export default function DoctorCard({ data }: {data:Doctor}) {
  return (
    <Link href={`/appointment/${data.id}`}>
      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">{data.name}</p>
          <small className="text-default-500">{data.degree}</small>
          <h4 className="font-bold text-large">{data.speciality}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={
              'https://i.pinimg.com/1200x/b4/24/74/b42474b3297e9c512a6c23ff2235c26d.jpg"'
            }
            width={270}
          />
        </CardBody>
      </Card>
    </Link>
  );
}
