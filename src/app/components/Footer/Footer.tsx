
import { footer } from "@/app/utils/staticData";
import React from "react";

export default function Footer() {
  return (
    <section className="bg-gray-50 pt-16 pb-4">
      <div className="container">
        <div className=" bg-blue-800 grid grid-cols-5 gap-4 p-8 rounded">
          {footer.map((footer: any, i: number) => {
            return (
              <div key={i} className="text-white">
                <h1 className="font-bold">{footer.footerTitle}</h1>
                <ol className="mt-4">
                    {
                        footer.links.map((item:any,j:number)=>{
                            return <li key={j} className="text-sm">{item.name}</li>
                        })
                    }
                </ol>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
