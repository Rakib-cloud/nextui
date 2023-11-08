
import { Button, Checkbox, Image } from "@nextui-org/react";
import React from "react";
import GridLayout from "../components/layouts/GridLayout";
import Text from "../components/Text/Text";



export default function Welness() {
  return (
    <GridLayout>
      <div>
        <h1 className="text-3xl font-semibold text-gray-700">
          Allow me to explain the functioning process
        </h1>
        <Text
          title={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias maxime laudantium pariatur quae asperiores modi dicta sint reiciendis fugit consequatur? Vero, dolor. Ex fuga accusamus sapiente adipisci, nulla quibusdam in? Obcaecati at neque quaerat sapiente dolorem, quae atque veniam dignissimos."
          }
        />
        <br />
        <Checkbox defaultSelected className="block">
          Guidance you can trust
        </Checkbox>
        <Checkbox defaultSelected className="block">
          Skills for life success
        </Checkbox>
        <Checkbox defaultSelected className="block">
          Strategies to feel better
        </Checkbox>
        <Button color="primary" className="mt-6">Try for free</Button>
      </div>
      <div className="bg-gray-100 rounded-xl">
        <Image alt="wellness" src="https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" height={500} width={500} />
      </div>
    </GridLayout>
  );
}
