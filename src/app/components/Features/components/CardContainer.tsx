"use client"
import { dataGet } from '@/app/utils/service';
import React, { useEffect, useState } from 'react'
import MyCard from './MyCard';
import Loader from '@/app/components/Features/components/loader';

export default function CardContainer() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [features, setFeatures] = useState<any>([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await dataGet("features"); // Use the function
          setFeatures(data);
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
          setIsLoading(false);
        }
      };
      fetchData();
    }, []);
    if (isLoading) {
      return <Loader/>
    }
    return (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {features?.length>0 && features?.slice(0,4)?.map((data: any, i: number) => {
          return <MyCard data={data} key={data.id || i} i={i} />;
        })}
      </div>
    );
}
