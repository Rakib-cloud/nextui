"use client";

import { NextUIProvider } from "@nextui-org/react";

import { usePathname } from "next/navigation";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";


export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

 
  console.log(pathname)
  const isLoginPage = pathname.includes("login")
  return (
    <NextUIProvider>
      {!isLoginPage && <Nav />}
      {children}
      {!isLoginPage && <Footer />}
    </NextUIProvider>
  );
}
// "use client";
// import { useState } from 'react';
// import { NextUIProvider } from "@nextui-org/react";

// import { usePathname } from "next/navigation";
// import Footer from "./components/Footer/Footer";
// import { Nav } from './components/Nav/Nav';

// export function Providers({ children }: { children: React.ReactNode }) {
//   const pathname = usePathname();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = () => {
//     // Implement your login logic here.
//     setIsLoggedIn(true);
//   };

//   const handleLogout = () => {
//     // Implement your logout logic here.
//     setIsLoggedIn(false);
//   };

//   const isLoginPage = pathname.includes("login");

//   return (
//     <NextUIProvider>
//       {!isLoginPage && <Nav isLoggedIn={isLoggedIn} handleLogout={handleLogout} />}
//       {children}
//       {!isLoginPage && <Footer />}
//     </NextUIProvider>
//   );
// }
