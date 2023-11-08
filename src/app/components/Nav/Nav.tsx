'use client'
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  Button,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

import Link from "next/link";
import { Logo } from "../Logo/Logo";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // const handleLogout = () => {
 
  //   localStorage.removeItem("isLogin");
  //   menuItems.pop();

  // };

  // const isUserLoggedIn = localStorage.getItem("isLogin") === "1";

  // const menuItems = [
  //   { name: "Home", route: "/" },
  //   { name: "Blog", route: "/blog" },
  //   { name: "Contact", route: "/contact" },
  // ];

  // if (isUserLoggedIn) {
  
  //   menuItems.splice(1, 0, { name: "Appointment", route: "/appointment" });
  // }
 
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(localStorage.getItem("isLogin") === "1");

  const menuItems = [
    { name: "Home", route: "/" },
    { name: "Blog", route: "/blog" },
    { name: "Contact", route: "/contact" },
  ];

  if (isUserLoggedIn) {
 
    menuItems.splice(1, 0, { name: "Appointment", route: "/appointment" });
  }

  const handleLogout = () => {
 
    localStorage.removeItem("isLogin");


    if (isUserLoggedIn) {
      menuItems.splice(1, 1);
    }

 
    setIsUserLoggedIn(false);

    
  };


  return (
    <div className="container">
      <Navbar
        maxWidth="full"
        className="px-0"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <Logo />
            <p className="font-bold text-inherit">ACME</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarBrand>
            <Logo />
            <p className="font-bold text-inherit">ACME</p>
          </NavbarBrand>
          {menuItems.map((item: any, i: number) => {
            return (
              <NavbarItem
                key={i}
                className="ml-4 text-gray-700"
                isActive={item.name === "Home" && true}
              >
                <Link href={item.route} aria-current="page" className="text-gray-700">
                  {item.name}
                </Link>
              </NavbarItem>
            );
          })}
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            {isUserLoggedIn ? (
              <Button onClick={handleLogout}>Logout</Button>
            ) : (
              <Link href="/login">Login</Link>
            )}
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="warning" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === 2
                    ? "warning"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href={item.route}
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
