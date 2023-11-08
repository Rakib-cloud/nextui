"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Input,
  Link,
} from "@nextui-org/react";
import React, { FormEvent, useState } from "react";
import { Logo } from "../components/Logo/Logo";
import { inputHandler } from "../utils/service";
import { useRouter } from "next/navigation";

export default function Login() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();
  const [formData, setFromData] = useState<any>({
    email: "",
    password: "",
  });
  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    try {
      console.log(formData);
      if (formData.email==="admin@admin.com") {
        localStorage.setItem("isLogin", "1");
        router.push("/")
      }
    } catch (error) {

    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Card className="w-[420px]">
        <CardHeader className="flex gap-3">
          <Logo />
          <div className="flex flex-col">
            <p className="text-md">Acme Hospital</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <form onSubmit={onSubmit}>
            <Input
              onChange={(e) => inputHandler(e, formData, setFromData)}
              size="sm"
              name="email"
              type="email"
              label="Email"
            />
            <Input
              onChange={(e) => inputHandler(e, formData, setFromData)}
              size="sm"
              name="password"
              className="my-4"
              type="password"
              label="Password"
            />
            <Button type="submit" disabled={isLoading} color="primary">
              {isLoading ? "Loading..." : "Submit"}
            </Button>
          </form>
        </CardBody>
        <Divider />
        <CardFooter className="flex items-center justify-center">
          <Link
            className="text-sm"
            isExternal
            showAnchorIcon
            href="https://github.com/nextui-org/nextui"
          >
            First time here?
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
