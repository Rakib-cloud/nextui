'use client'
import { dataGet } from "@/app/utils/service";
import React, { useEffect, useState } from "react";
import Loader from "../../loader";
import DoctorCard from "../DoctorCard/DoctorCard";
import { Pagination } from "@nextui-org/react";

interface Doctor {
  id: number;
  name: string;
  speciality: string;
  degree: string; 
  
}

export default function DoctorsContainer() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: Doctor[] = await dataGet("doctors");
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
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 my-4">
        {doctors.length > 0 &&
          doctors.slice(0, 6).map((data, i) => {
            return <DoctorCard key={i} data={data} />;
          })}
      </div>
      <div className="flex items-center justify-center my-8">
        <Pagination key={12} total={doctors.length} initialPage={1} size={"sm"} />
      </div>
    </div>
  );
}
